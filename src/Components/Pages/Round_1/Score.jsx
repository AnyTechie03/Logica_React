import React, { useEffect } from 'react'
import './Quiz.css'
export default function Score({score,outof,level}) {
    useEffect(()=>{
        fetch('https://angry-moon-10536.pktriot.net/SubmitScore',{
            method:"POST",
            headers:{
                'Accept':"*/*",
                'Content-Type':'application/json'
            },
            credentials: 'include',
            body:JSON.stringify({
                score,
                level
            })
        }).then((res)=>res.json())
        .then((data) =>{  
            if(data.success === true){
                //Sir handle what to do in front end (i mean what to display user) after Score is Submitted to Server 
                console.log("Score Submitted");
            }
            else{
                console.log("Internal Server Error");
            }
            })
    },[])
    return (
    <div className='ScoreContainer'>
        Your Score is Submitted 
    </div>
  )
}