import React from 'react';
import './BackBone.css';

const BackBone = () => {
    const headsDetails = [
        {
            name: "Manas Lahare",
            role: "Offline Event Handling Head",
            email: "manas.djrwh22@sinhgad.edu",
            phone: "9406603170",
            insta : 'manaslahare',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2FIMG_3826.JPG?alt=media&token=0cc6e2fa-ee7f-4f9f-b05f-e83d531f7658"
        },
        {
            name: "Shrutika Saudagar",
            role: "Offline Event Handling Head",
            email: "shrutika.gugah22@sinhgad.edu",
            phone: "7559439594",
            insta : '_shruta_2001',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2FIMG_2222.png?alt=media&token=3edfe736-0ee7-4d5e-b9b2-b06cbf25d9c2"
        },
        {
            name: "Aniket Raj",
            role: "Online Event Head",
            email: "aniket.wufwh22@sinhga.edu",
            phone: "87094 45958",
            insta : 'aniket_raj7246',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2F1697785830894.jpg?alt=media&token=9399ce19-7903-4dca-9a2c-f1ca1a03bb0d"
        },
        {
            name: "Amol Patil",
            role: "Media Head",
            email: "amol.chymp22@sinhgad.edu",
            phone: "9527472582",
            insta : 'amolrpatil96k',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2FIMG_20231002_033224.jpg?alt=media&token=3568d474-f717-41b2-97c5-c11496f3d1e9"
        },
        {
            name: "Shubham Raundal",
            role: "Media Head",
            email: "shubham.hyhyu22@sinhgad.edu",
            phone: "98501 61963",
            insta : 'being_shubh_s',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2F1694687757749.jpg?alt=media&token=dd5e0966-4fb5-406e-bb4e-6dca0cb987d5"
        },
        {
            name: "Dhnashree Tulankar",
            role: "Decoration Head",
            email: "",
            phone: "9876543212",
            insta : '',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2FIMG_20231015_130127.jpg?alt=media&token=e6cfdb0e-c0b5-4bc9-8121-58a28cd4a0c9"
        },
        {
            name: "Trupati Vaidya",
            role: "PR Head",
            email: "trupti.jpnjw22@sinhgad.edu",
            phone: "8080033481",
            insta : 'trupti._vaidyaa',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2FIMG_6258.png?alt=media&token=5f2ef867-0260-4b36-86b2-09e54bcfda54"
        },
        {
            name: "Rutuja Bhilare",
            role: "Registration Head",
            email: "Rutuja.nkmya22@sinhgad.edu",
            phone: "9623676889",
            insta : 'rutuja_bhilare769',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2F1686931217398%20(2).jpg?alt=media&token=ace3a9b4-6bcf-4e20-838f-8ebfaee2b28e"
        },
        {
            name: "Suraj Patil",
            role: "Technical Head",
            email: "suraj.wwmyw22@sinhgad.edu",
            phone: "9876543212",
            insta : 'surajsp83',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2FIMG_6856.png?alt=media&token=88f84c5f-7e85-4273-aad2-f8e7eef9633b"
        },
        {
            name: "Atharv Deshpande",
            role: "Moderation Head",
            email: "atharvadeshpande06.simca.mca@gmail.com",
            phone: "73875 55262",
            insta : 'atharavadeshpande2',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2FIMG20231012131207.jpg?alt=media&token=b514297e-bb03-4a22-820e-377da2473912"
        },
        
    ];

    return (
        <div className='Backbone text-center m-0'>
            <div className="row brrow p-5 m-0">
                <h1 className='mt-5 pt-5 col-12 justify-content-around title'>Back Bone</h1>
                {/* {headsDetails.map((item, i) => (
                    <div key={i} className="col-12 col-sm-6 col-md-6 col-lg-4  text-center ">
                        <div className="text-center ml-5 card border-light">
                        <div
                className="profile-cover rounded-top  "
                style={{ backgroundImage: `url(${pbg})` }}
              >
                            </div>
                            <div className="pt-5 pb-3 card-body">
                                <div className='backbone'>
                                    <img className="card-img user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4 profile-image" src={item.photo} alt="Portrait" />
                                </div>
                                <div className="card-title h5">{item.name}</div>
                                <div className="fw-normal card-subtitle h6">{item.role}</div>
                                <p className="text-gray mb-4 card-text">{item.email}</p>
                                <p className="text-gray mb-4 card-text">{item.phone}</p>
                            </div>
                        </div>
                    </div>
                ))} */}
                {headsDetails.map((item, i) => (
                    <div key={i} className="col-12 col-sm-6 col-md-6 col-lg-3  pb-5 pt-5 pl-5 text-center ">
                            <div class="card ml-5 p-0 ">
                            <div class="card-image">
                                <img src={item.photo}
                                    alt="Portrat" />
                            </div>
                            <div class="card-content d-flex flex-column align-items-center">
                                <h4 class="pt-2">{item.name}</h4>
                                <h5>{item.role}</h5>

                                <ul className="social-icons d-flex justify-content-center">
    <li>
        <a href={`mailto:${item.email}`}>
            <span className="fa-solid fa-envelope"></span>
        </a>
    </li>
    <li>
        <a href={`tel:${item.phone}`}>
            <span className="fa fa-phone"></span>
        </a>
    </li>
    <li>
        <a href={item.insta} target='_blank'>
            <span className="fab fa-instagram"></span>
        </a>
    </li>
</ul>


                            </div>
                        </div>
                    </div>
                        ))}
            </div>
            </div>
            );
}

            export default BackBone;
