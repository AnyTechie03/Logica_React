import React, { useEffect, useState } from "react";
import { Box, Image, Text,Input,Button,FormControl } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { imageDb } from '../Functions/firebase/firebase';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import './PaymentButton.css'
import { v4 } from "uuid";
import { toast } from "react-toastify";
import Loading from "../Pages/Loading/Loading";

export default function PaymentButtuon() {
  const [UserPart, setUserPart] = useState("");
  const [loading, setloading ] = useState(true);
  const [transactionId, setTransactionId] = useState(""); 
  const [transactionImage, setTransactionImage] = useState(null); 
  const navigate = useNavigate();
  const [imgUrl,setImgUrl] =useState([])
  const [selectedFileName, setSelectedFileName] = useState('No file selected');


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
    setSelectedFileName(file.name);
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
        <Loading/>
      </>
    );
  } else {
    return (
      <div className="login ">
        <div className="row">
          <div className="col-4">
         
              <div className="login-box form-group text-center text-white mt-5 m-0 p-1">
              {UserPart === "Solo" && (
  <Box textAlign="center" py={4}>
    <Text fontWeight="semibold" className="h1 st">
      Solo Payment
    </Text>
    <Image
      src="https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2FQR100.jpeg?alt=media&token=3af1af47-7009-42ae-aaac-2f509bdd3947"
      alt="Solo Payment Image"
      boxSize="250px"
      border="2px solid #007BFF"  // Add a border
      boxShadow="md"              // Add a box shadow
      borderRadius="lg"           // Add a rounded corner
      
      _hover={{
        transform: "scale(1.05)", // Add a scale effect on hover
        transition: "transform 0.3s ease-in-out",
      }}
      htmlProps={{ draggable: "false" }}
    />
  </Box>
)}

{UserPart === "Team" && (
  <Box textAlign="center" py={4}>
    <Text fontSize={{ base: "20px", md: "30px" }} fontWeight="semibold">
      Team Payment
    </Text>
    <Image
      src="https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2FQR150.jpeg?alt=media&token=30ac2e85-6a8a-496e-a86a-b01ca711f1a1"
      alt="Team Payment Image"
      boxSize="250px"
      border="2px solid #FF5733"  // Add a border
      boxShadow="md"              // Add a box shadow
      borderRadius="lg"           // Add a rounded corner
      _hover={{
        transform: "scale(1.05)", // Add a scale effect on hover
        transition: "transform 0.3s ease-in-out",
      }}
      htmlProps={{ draggable: "false" }}
    />
  </Box>
)}

    
        {/* {UserPart === "Solo" && (
          <>
            <Text fontSize="30px" fontWeight="semibold" p="4">
              <h2 className="st">Solo Payment </h2>
            </Text>
            <Image src="https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2FQR100.jpeg?alt=media&token=3af1af47-7009-42ae-aaac-2f509bdd3947" alt="Solo Payment Image" boxSize="250px" />
          </>
        )}
        {UserPart === "Team" && (
          <>
            <Text fontSize="30px" fontWeight="semibold" p="4">
              Team Payment
            </Text>
            <Image src="https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2FQR150.jpeg?alt=media&token=30ac2e85-6a8a-496e-a86a-b01ca711f1a1" alt="Team Payment Image" boxSize="250px" />
          </>
        )} */}
        <FormControl>
        <Input
  type="text"
  placeholder="Enter Transaction ID"
  value={transactionId}
  variant="flushed"
  required
  onChange={(e) => setTransactionId(e.target.value)}
className="custom-input"
  _placeholder={{
    sm: { fontSize: "12px" },
    md: { fontSize: "16px" },
    lg: { fontSize: "18px" },
  }}
  _focus={{
    sm: { borderColor: "blue.200" },
    md: { borderColor: "blue.300" },
    lg: { borderColor: "blue.400" },
  }}
/>

          {/* <Input
            type="text"
            className="custom-input"
            placeholder="Enter Transaction ID"
            value={transactionId}
            variant='flushed' 
            required
            onChange={(e) => setTransactionId(e.target.value)}
          /> */}
           {/* <Input
            type="file" // This input type allows users to select a file (image)
            accept="image/*" // Specify accepted file types (images in this case)
            onChange={handleImageUpload} // Handle file selection
          /> */}
          <div className="file-input-container m-1 mt-0">
  <label className="file-input-label" htmlFor="imageInput">
    <span className="file-input-icon">+</span> Upload Image
  </label>
  <input
    type="file"
    id="imageInput"
    className="file-input"
    accept="image/*"
    onChange={handleImageUpload}
  />
</div>
<div className="selected-file text-white">Selected File: {selectedFileName}</div>
          <Button className="btn" colorScheme="blue" onClick={handleTransactionSubmit}>
            Submit
          </Button>
        </FormControl>
        <p className="text-center text-white">Scan the Qr Above and make payment. After payment fill in necessary details and submit the form.</p>

      </div>
      </div>
      </div>
      </div>
    );
  }
}
