import React, {useState, useRef, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "./Contact.css";
import MainCard from "./MainCard";
import SideCard from "./SideCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const contactDetails = [
  {
    name: "Amar Shinde",
    role: "Overall Faculty Coordinator",
    email: "asinde@gmail.com",
    phone: "82086 07636",
    photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2Ffb4f22be-f3ad-4b43-bff5-9fd1be38566f?alt=media&token=d2fce22b-2eb1-4ff3-8337-f732737ba3f0"
  },
  {
    name: "Akash Yerunkar",
    role: "Overall Coordinator",
    email: "akashnyerunkar580@gmail.com",
    phone: "9834178825",
    photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2FAK2.png?alt=media&token=e5407255-5d98-44c0-9bc3-1a430e2d8bea"
  },
  {
    name: "Prasad Ranjane",
    role: "Overall Coordinator",
    email: "prasad.ganpc@sinhgad.edu",
    phone: "9518751324",
    photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2Ffd26a6f4-f445-4f60-833f-f22045ae751b?alt=media&token=14fd8f14-49c7-4634-bc8a-44c70e4f1a9b"
  },
  {
   
    role: "Back Bone Of the Event",
    topage: "/backbone",
    photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2FLogica%20SIMCA%20(1).png?alt=media&token=839c96f1-319f-4560-872d-89ba2993be25"

  },
 

];

export default function Contact() {

  const [displayData, setDisplayData] = useState({
    name: "Amar Shinde",
    role: "Overall Faculty Coordinator",
    email: "asinde@gmail.com",
    phone: "82086 07636",
    photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2Ffb4f22be-f3ad-4b43-bff5-9fd1be38566f?alt=media&token=d2fce22b-2eb1-4ff3-8337-f732737ba3f0"
  });
  const [animate, setAnimate] = useState(false);
  const [contactClick, setContactClick] = useState(true);
	const targetRef = useRef(null);
  useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
        // setAnimate(entry.isIntersecting);

        if(entry.isIntersecting){
          setAnimate(entry.isIntersecting);
        }
			},
			{ root: null, rootMargin: '0px', threshold: 0.1 }
		);
		const target = targetRef.current;
		if (target) observer.observe(target);
		return () => {
			if (target) observer.unobserve(target);
		};
	}, [targetRef]);

  const handleClick = (i) => {
    setContactClick(false);
    setDisplayData({
      name: contactDetails[i].name,
      role: contactDetails[i].role,
      email: contactDetails[i].email,
      phone: contactDetails[i].phone,
      photo : contactDetails[i].photo,
    })
    setTimeout(() => {setContactClick(true)}, 10);
  }
  return(
    <div class="contact-us" id="Contact"  ref={targetRef}>
    <h1 class="contact-heading text-center">Contact Us</h1>
    <div class="contact-content">
      <div className={animate ? "contact-full-card animate" : "contact-full-card"}>
        {contactClick ? <MainCard data={displayData}/> : null}
      </div>
      <div className={animate ? "contact-carousal animate" : "contact-carousal"}>
        {contactDetails.map((item, i) => {
          return (
            <>
            <SideCard key={i} id={i} role={item.role} handleClick={handleClick} photo ={item.photo} topage={item.topage}/>
            
            </>
            
          )
        })}
      </div>
    </div>
  </div>
  )
}

























// export default function Contact() {
//   return (
//     <div className="contact-us">
//       <h1>Contact</h1>
//       {/* <Card /> */}
//       <div className="contact-first-layer">
//         <Card />
//         <Card />
//         <Card />
//       </div>
//       <div className="contact-second-layer">
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//       </div>
//       <div className="contact-carousal">
//         <Swiper
//           // install Swiper modules
//           modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//           spaceBetween={0}
//           slidesPerView={5}
//           navigation={{ clickable: true }}
//           //   pagination={{ clickable: true }}
//           //   scrollbar={{ draggable: true }}
//           onSwiper={(swiper) => console.log(swiper)}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           breakpoints={{
//             320: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//             // when window width is >= 480px
//             480: {
//               slidesPerView: 3,
//               spaceBetween: 30,
//             },
//             // when window width is >= 640px
//             640: {
//               slidesPerView: 4,
//               spaceBetween: 40,
//             },
//             900: {
//               slidesPerView: 5,
//               spaceBetween: 40,
//             },
//           }}
//           //   loop = {true}
//         >
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>

//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// }
