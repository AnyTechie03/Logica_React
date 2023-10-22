import React, { useEffect, useState } from "react";
import { Box, Image, Text,Center,Input,Button,FormControl } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { imageDb } from '../Functions/firebase/firebase';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { toast } from "react-toastify";

export default function PaymentButtuon() {
  const [UserPart, setUserPart] = useState("");
  const [loading, setloading ] = useState(true);
  const [transactionId, setTransactionId] = useState(""); 
  const [transactionImage, setTransactionImage] = useState(null); 
  const navigate = useNavigate();
  const [imgUrl,setImgUrl] =useState([])

  const notify = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const successnotify = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };


  const fetchUserType = async () => {
    try {
      const res = await fetch(
        "https://angry-moon-10536.pktriot.net/fetchUserType",
        {
          method: "GET",
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },

          credentials: "include",
        }
      );

      if (res.status === 201) {
        // const data = await res.json();
        // setUserType(data.userType);
        setloading(false);
      } else {
        // Handle unauthorized access
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleTransactionSubmit = () => {
    if (!transactionId.trim()) {
      alert("Transaction ID cannot be empty");
      return;
    }

    if (!transactionImage) {
      alert("Please select an image for the transaction");
      return;
    }
     if(transactionImage !==null){
        const imgRef =  ref(imageDb,`files/${v4()}`)
        uploadBytes(imgRef,transactionImage).then(value=>{            
            getDownloadURL(value.ref).then(url=>{
                setImgUrl(data=>[...data,url])
            })
            fetch('https://angry-moon-10536.pktriot.net/PaymentDetails',{
              method:"POST",
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
              credentials: "include",
              body: JSON.stringify({
                transactionId,
                transactionImageURL:imgUrl[0]
              })
            }).then((res)=>
            {
              if(res.status === 200){
                successnotify("Payment Details Stored")
                navigate('/')
              }
              else if(res.status === 500){
                notify("Internal Server Error")
                navigate('/')
              }
            })
        })
     }
    
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setTransactionImage(file);
  };

  const Paymentflow = () => {
    fetch("https://angry-moon-10536.pktriot.net/verify-account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "include",
    }).then((res) => {
      if (res.status === 201) {
        //User will have to make Payment
        const response = res.json();
        response.then((data) => {
          if (data.Type === "Team") {
            setUserPart("Team");
            console.log("Team Registration");
          }
          if (data.Type === "Solo") {
            setUserPart("Solo");
            console.log("Solo Registration.");
          }
        });
      } else if (res.status === 202) {
        //User Payment Record Already Stored on DB
        //don't show qr and either navigate to home or show the screenshot adn transaction id
        navigate('/')
      } else if (res.status === 404) {
        //User doesn't exists
        navigate("/");
      }
    });
  };
  useEffect(() => {
    fetchUserType();
    Paymentflow();
  }, []);

  if (loading == true) {
    return (
      <>
        <h2>Loading</h2>
      </>
    );
  } else {
    return (
      <Center h="100vh" bg="#0c243b" color="white" >
      <Box maxW="md" borderWidth="1px" borderRadius="lg" paddingTop="65px">
        {UserPart === "Solo" && (
          <>
            <Text fontSize="30px" fontWeight="semibold" p="4">
              Solo Payment
            </Text>
            <Image src="https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2Fec7fd901-3c61-4322-ab41-b6b2c899f41f?alt=media&token=8b91258c-b76f-437a-a4df-09362910b4a9" alt="Solo Payment Image" boxSize="500px" />
          </>
        )}
        {UserPart === "Team" && (
          <>
            <Text fontSize="30px" fontWeight="semibold" p="4">
              Team Payment
            </Text>
            <Image src="https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2F224ade06-03df-419e-b87d-7f4ca89aeada?alt=media&token=033382a9-ccd0-4431-a7f0-1526d24d52ed" alt="Team Payment Image" boxSize="500px" />
          </>
        )}
        <FormControl>
          <Input
            type="text"
            placeholder="Enter Transaction ID"
            value={transactionId}
            variant='flushed' 
            required
            onChange={(e) => setTransactionId(e.target.value)}
          />
           <Input
            type="file" // This input type allows users to select a file (image)
            accept="image/*" // Specify accepted file types (images in this case)
            onChange={handleImageUpload} // Handle file selection
          />
          <Button colorScheme="blue" onClick={handleTransactionSubmit}>
            Submit
          </Button>
        </FormControl>
        <p>Scan the Qr Above and make payment. After payment fill in necessary details and submit the form.</p>
      </Box>
      </Center>
    );
  }
}
