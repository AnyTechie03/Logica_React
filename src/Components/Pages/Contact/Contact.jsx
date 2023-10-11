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
    name: "Rajesh Gawali",
    role: "Overall Coordinator",
    email: "rajeshgawali@gmail.com",
    phone: "1234567899",
    photo: ""
  },
  {
    name: "Akash Yerunkar",
    role: "Coordinator",
    email: "",
    phone: "9876543212",
    photo: ""
  },
  {
    name: "Prasad Ranjane",
    role: "Coordinator",
    email: "",
    phone: "98754512351",
    photo: ""
  }
];

export default function Contact() {

  const [displayData, setDisplayData] = useState({
    name: "Rajesh Gawali",
    role: "Overall Coordinator",
    email: "rajeshgawali@gmail.com",
    phone: "1234567899",
    photo: ""
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
            <SideCard key={i} id={i} role={item.role} handleClick={handleClick} photo ={item.photo}/>
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
