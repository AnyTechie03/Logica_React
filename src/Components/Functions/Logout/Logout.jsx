import "react-toastify/dist/ReactToastify.css";
import { notifyToast } from "../notifyToast";
export const Logout = () => {
  localStorage.setItem("userType","UNKNOWN")
localStorage.clear()
    const response = fetch("https://logicabackend.onrender.com/logout", {
        method: "GET",
  
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        "Credentials":"include",
        },

      });

      response.then((res) => {
        
        switch (res.status) {
          case 201: {
            window.location.reload(false);
            notifyToast("User Logged Out","success");
            return 201
          }
          case 500: {
            notifyToast("There was some problem");
            break;
          }
          default:
            break;
        }
    })


};