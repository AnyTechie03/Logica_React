
import './Sponsors.css';
import React, {useState, useRef, useEffect} from "react";
import Spbg from '../../../assets/img/box_sponsors.png';



const sponsors_data=[
	{
	name:'',
	imsrc:'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675429916/cepheus23_posters/sponsors/State_Bank_of_India.svg_fcglpj.png',
	web:'https://sbi.co.in/',
	role:'TITLE SPONSOR',
	},
	{
	name:'HPCL',
	imsrc:'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675429916/cepheus23_posters/sponsors/Hindustan_Petroleum_Logo.svg_b7mmo6.png',
	web:'https://www.hindustanpetroleum.com/',
	role:'CO SPONSOR',
	},
	{
	name:'ATHER ENERGY',
	imsrc:'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675429915/cepheus23_posters/sponsors/ather_svbwai.png',
	web:'https://www.atherenergy.com/',
	role:'CO SPONSOR',
	},
    	{
	name:'ATHER ENERGY',
	imsrc:'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675429915/cepheus23_posters/sponsors/ather_svbwai.png',
	web:'https://www.atherenergy.com/',
	role:'CO SPONSOR',
	},



]





















function Sponsors() {
	const [animate, setAnimate] = useState(false);
	const targetRef = useRef(null);

	useEffect(() => {
			const observer = new IntersectionObserver(
				(entries) => {
					const [entry] = entries;
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


	return (
		<div className="Sponsors" id="Sponsors" ref={targetRef}>
			<div className="events-bg1" >
			
				<h1 className='myStyl'>Sponsors</h1>
				<br></br>
				<br></br>
				<br></br>
				
				<center>
				<div >
				<div id='box' style={{marginBottom:'50px'}} className={animate ? 'sps animate' : 'sps'} >
					<center>
					<div>
					<div>
				
					<div id='container_main'  >
						
							
							<a href={sponsors_data[2].web} target="_blank">
							<div>
							<img src={Spbg} id='box_spon'></img>
							<h2 id='heading_box' className='imp' style={{textDecoration:'none'}}>{sponsors_data[2].role}</h2>
							<img src={sponsors_data[2].imsrc} id='img_spon_2' ></img>
							</div>
							</a>
						
							<a href={sponsors_data[1].web} target="_blank">
							<div>
							<img src={Spbg} id='box_spon'></img>
							<h2 id='heading_box' className='imp' style={{textDecoration:'none'}}>{sponsors_data[1].role}</h2>
							<img src={sponsors_data[1].imsrc} id='img_spon_1' ></img>
							</div>
							</a>
							{/* <a href={sponsors_data[3].web} target="_blank">
							<div>
							<img src={Spbg} id='box_spon'></img>
							<h2 id='heading_box' className='imp' style={{textDecoration:'none'}}>{sponsors_data[3].role}</h2>
							<img src={sponsors_data[3].imsrc} id='img_spon_1_ne'></img>
							</div>
							</a> */}
							
						</div>
						</div>
					<div>
				
					{/* <div id='container_main_dupe'  >
						
							
							
							
							<a href={sponsors_data[4].web} target="_blank">
							<div>
							<img src={Spbg} id='box_spon'></img>
							<h2 id='heading_box_mai' className='imp' style={{textDecoration:'none'}}>{sponsors_data[4].role}</h2>
							<img src={sponsors_data[4].imsrc} id='img_spon_1_ne_it'></img>
							</div>
							</a>
							<a href={sponsors_data[15].web} target="_blank">
							<div id='adj' >
							<img src={Spbg} id='box_spon'></img>
							<h2 id='heading_box' className='imp' style={{textDecoration:'none'}}>{sponsors_data[15].role}</h2>
							<img src={sponsors_data[15].imsrc} id='img_spon_ne_eu'></img>
							</div>
							</a>
							<a href={sponsors_data[5].web} target="_blank">
							<div>
							<img src={Spbg} id='box_spon'></img>
							<h2 id='heading_box' className='imp' style={{textDecoration:'none'}}>{sponsors_data[5].role}</h2>
							<img src={sponsors_data[5].imsrc} id='img_spon_1_ne_ims'></img>
							</div>
							</a>
							
							
							
						</div> */}
						</div>
						<div>
						
						{/* <div id='mob_2' >
						
							<div id='container_main_3'>
							
							<a href={sponsors_data[1].web} target="_blank">
							<div id='container_main_2'>
							
							<div>
							<img src={Spbg} id='box_spon_sec'></img>
							<h2 id='heading_box' className='imp' style={{textDecoration:'none'}}>{sponsors_data[1].role}</h2>
							<img src={sponsors_data[1].imsrc} id='img_spon_mo' ></img>
							
							</div>
							</div>
							</a>
							<a href={sponsors_data[2].web} target="_blank">
							<div id='container_main_2'>
							<div>
						
							<img src={Spbg} id='box_spon_sec'></img>
							<h2 id='heading_box' className='imp' style={{textDecoration:'none'}}>{sponsors_data[2].role}</h2>
							<img src={sponsors_data[2].imsrc} id='img_spon_1_mo' ></img>
						
							</div>
							</div>
							</a>
							<a href={sponsors_data[3].web} target="_blank">
							<div id='container_main_2'>
							
							<div>
							<img src={Spbg} id='box_spon_sec'></img>
							<h2 id='heading_box' className='imp' style={{textDecoration:'none'}}>{sponsors_data[3].role}</h2>
							<img src={sponsors_data[3].imsrc} id='img_spon_1_ne_ne' ></img>
							
							</div>
							</div>
							</a>
							</div>
						</div> */}
						</div>
						<div>
						
							<br></br>
						{/* <div id='mob_2' >
							
							<div id='container_main_3'>
							
							
							<a href={sponsors_data[4].web} target="_blank">
							<div id='container_main_2'>
							
							<div>
							<img src={Spbg} id='box_spon_sec'></img>
							<h2 id='heading_box_mai' className='imp' style={{textDecoration:'none'}}>{sponsors_data[4].role}</h2>
							<img src={sponsors_data[4].imsrc} id='img_spon_1_ne_ne' ></img>
							
							</div>
							</div>
							</a>
							<a href={sponsors_data[15].web} target="_blank">
							<div id='container_main_2' >
							<div>
							
							<img src={Spbg} id='box_spon_sec'></img>
							<h2 id='heading_box' className='imp' style={{textDecoration:'none'}}>{sponsors_data[15].role}</h2>
							<img src={sponsors_data[15].imsrc} id='img_spon_ne_eu' ></img>
						
							</div>
							</div>
							</a>
							
							<a href={sponsors_data[5].web} target="_blank">
							<div id='container_main_2'>
							<div>
						
							<img src={Spbg} id='box_spon_sec'></img>
							<h2 id='heading_box' className='imp' style={{textDecoration:'none'}}>{sponsors_data[5].role}</h2>
							<img src={sponsors_data[5].imsrc} id='img_spon_1_ne' ></img>
							
							</div>
							</div>
							</a>
							
							
							
							</div>
							
						</div> */}
						
						</div>
						<div>
						<br></br>
						<br></br>
						
						{/* <div  id='container1' >
							<a href={sponsors_data[6].web} target="_blank">
							<div>
							<img src={Spbg} id='box_spon'></img>
							<h2 id='heading_box' className='adjust' style={{textDecoration:'none'}}>{sponsors_data[6].role}</h2>
							<img src={sponsors_data[6].imsrc} id='img_spon_6'></img>
							</div>
							</a>
							
							<a href={sponsors_data[8].web} target="_blank">
							<div>
							<img src={Spbg} id='box_spon'></img>
							<h2 id='heading_box' className='adjust' style={{textDecoration:'none'}}>{sponsors_data[8].role}</h2>
							<img src={sponsors_data[8].imsrc} id='img_spon_4'></img>
							</div>
							</a>
							
							<a href={sponsors_data[9].web} target="_blank">
							<div>
							<img src={Spbg} id='box_spon'></img>
							<h2 id='heading_box' className='adjust' style={{textDecoration:'none'}}>{sponsors_data[9].role}</h2>
							<img src={sponsors_data[9].imsrc} id='img_spon_5'></img>
							</div>
							</a>
							
						</div> */}
						</div>
						<div>
					
						{/* <div id='container2' >
							
							<a href={sponsors_data[10].web} target="_blank">
							<div>
							<img src={Spbg} id='box_spon'></img>
							<h2 id='heading_box' className='adjust' style={{textDecoration:'none'}}>{sponsors_data[10].role}</h2>
							<img src={sponsors_data[10].imsrc} id='img_spon_7'></img>
							</div>
							</a>
							<a href={sponsors_data[11].web} target="_blank">
							<div>
							<img src={Spbg} id='box_spon'></img>
							<h2 id='heading_box' className='adjust' style={{textDecoration:'none'}}>{sponsors_data[11].role}</h2>
							<img src={sponsors_data[11].imsrc} id='img_spon_3_nef'></img>
							</div>
							</a>
							<a href={sponsors_data[12].web} target="_blank">
							<div>
							<img src={Spbg} id='box_spon'></img>
							<h2 id='heading_box' className='adjust' style={{textDecoration:'none'}}>{sponsors_data[12].role}</h2>
							<img src={sponsors_data[12].imsrc} id='img_spon_4_nef'></img>
							</div>
							</a>
							
							<a href={sponsors_data[13].web} target="_blank">
							<div>
							<img src={Spbg} id='box_spon'></img>
							<h2 id='heading_box' className='adjust' style={{textDecoration:'none'}}>{sponsors_data[13].role}</h2>
							<img src={sponsors_data[13].imsrc} id='img_spon_5'></img>
							</div>
							</a>
						</div> */}
						</div>
						<div>
						
						{/* <div id='container2' >
							
							<a href={sponsors_data[14].web} target="_blank">
							<div>
							<img src={Spbg} id='box_spon'></img>
							<h2 id='heading_box' className='adjust' style={{textDecoration:'none'}}>{sponsors_data[14].role}</h2>
							<img src={sponsors_data[14].imsrc} id='img_spon_7_nef'></img>
							</div>
							</a>
							
							<a href={sponsors_data[16].web} target="_blank">
							<div>
							<img src={Spbg} id='box_spon'></img>
							<h2 id='heading_box' className='adjust' style={{textDecoration:'none'}}>{sponsors_data[16].role}</h2>
							<img src={sponsors_data[16].imsrc} id='img_spon_9_nef'></img>
							</div>
							</a>
							
						</div> */}
						</div>
					</div>
					</center>
				</div>
				</div>
				</center>

				
			</div>
		</div>
	);
}
export default Sponsors; 
