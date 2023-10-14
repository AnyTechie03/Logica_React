import React, { useEffect, useState } from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
// import Payment_Gateway from "./Payment_Gateway.jpg";

export default function PaymentButtuon() {
  const [amount, setamount] = useState(5000);
  const [key, setkey] = useState("");

  useEffect(() => {
    fetch("https://logicabackend.onrender.com/api/getkey", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setkey(data.key);
      });
  }, []);

  const checkoutHandler = async () => {
    const Response = fetch("https://logicabackend.onrender.com/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        amount,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const order = data.order;
        const options = {
          key: key,
          amount: order.amount,
          currency: "INR",
          name: "Logica",
          description: "Logica Registration Payment",
          // image: "https://example.com/your_logo",
          order_id: order.id,
          handler: function (response) {
            console.log("Payment Under Verification");
             setTimeout(()=>{
              fetch("https://logicabackend.onrender.com/paymentVerification", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  PaymentID: response.razorpay_payment_id,
                  Signature: response.razorpay_signature,
                  OrderID:response.razorpay_order_id
                }),
              }).then((response) => response.json()).then(
                (data) =>{
                    const PaymentID = data.payment_Id;
                    window.location.href = `/PaymentSuccessful?reference=${PaymentID}`;
                }
              );
            },1000)
        
          },
          prefill: {
            name: "Logica SIMCA",
            email: "logica.simca@gmail.com",
            contact: "9834178825",
          },
          notes: {
            address: "Logica, SIMCA",
          },
          theme: {
            color: "#3399cc",
          },
        };
        const razor = new window.Razorpay(options);
        razor.open();
      });
  };
  return (
    <Box>
      <Stack direction={"row"}>
        <Card
          amount={500}
          // img={Payment_Gateway}
          onClick={(e) => setamount(e.target.value)}
          checkoutHandler={() => checkoutHandler(amount)}
        />
      </Stack>
    </Box>
  );
}
