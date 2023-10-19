import "react-toastify/dist/ReactToastify.css";
import { notifyToast } from "../notifyToast";
import { useEffect } from "react";
// import {UserContext} from '../app.js'

export const Logout = () => {
  useEffect(() => {
    const logoutUser = async () => {
      try {
        // Clear local storage
        localStorage.setItem("userType", "UNKNOWN");
        localStorage.clear();

        // Clear cookies by setting max-age to 0
        document.cookie.split(";").forEach(function (c) {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/");
        });

        // Send a request to the server to logout
        const response = await fetch("https://angry-moon-10536.pktriot.net/logout", {
          method: "GET",
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "include",
        });

        if (response.status === 201) {
          // Reload the page or perform any other action as needed
          // dispatchEvent{}
          window.location.reload(false);
          notifyToast("User Logged Out", "success");

        } else {
          notifyToast("There was some problem");
        }
      } catch (error) {
        console.error("Error during logout:", error);
        notifyToast("An error occurred during logout");
      }
    };

    logoutUser();
  }, []);

  return null; // or return some component to render
};
