import React from 'react';
import './BackBone.css';
import pbg from '../../../assets/img/LogicaSh (2).png'

const BackBone = () => {
    const headsDetails = [
        {
            name: "Manas Lahare",
            role: "Offline Event Handling Head",
            email: "manas.djrwh22@sinhgad.edu",
            phone: "9406603170",
            insta : 'manaslahare',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2F05920fa4-241f-418a-9461-17fbf877d715?alt=media&token=5451a11b-eb06-4fd4-9967-da0bc98cbfa9"
        },
        {
            name: "Shrutika Saudagar",
            role: "Offline Event Handling Head",
            email: "shrutika.gugah22@sinhgad.edu",
            phone: "7559439594",
            insta : '_shruta_2001',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2Fb4a2f20c-7261-48fb-bc94-9a57982376ce?alt=media&token=039c3c9e-d440-4c06-823e-976111f3da24"
        },
        {
            name: "Amol Patil",
            role: "Media Head",
            email: "amol.chymp22@sinhgad.edu",
            phone: "9527472582",
            insta : 'amolrpatil96k',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2F999d8e68-9588-419a-86a5-3ce04067f219?alt=media&token=9c4b6354-ba7b-4638-9029-1171823cc00a"
        },
        {
            name: "Shubham Raundal",
            role: "Media Head",
            email: "shubham.hyhyu22@sinhgad.edu",
            phone: "98501 61963",
            insta : 'being_shubh_s',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2F711bc67d-b921-470a-8e47-f169a3bc5cb1?alt=media&token=048ab1b4-a6b1-4249-a17d-923bb1affc03"
        },
        {
            name: "Dhnashree Tulankar",
            role: "Decoration Head",
            email: "",
            phone: "9876543212",
            insta : '',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2F4fae969d-0211-4543-bff9-10e5aa7922b5?alt=media&token=32849da3-1d7a-4797-ad3d-5221b39082cb"
        },
        {
            name: "Trupati Vaidya",
            role: "PR Head",
            email: "trupti.jpnjw22@sinhgad.edu",
            phone: "8080033481",
            insta : 'trupti._vaidyaa',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2F4fae969d-0211-4543-bff9-10e5aa7922b5?alt=media&token=32849da3-1d7a-4797-ad3d-5221b39082cb"
        },
        {
            name: "Rutuja Bhilare",
            role: "Registration Head",
            email: "Rutuja.nkmya22@sinhgad.edu",
            phone: "9623676889",
            insta : 'rutuja_bhilare769',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2F68a5eab7-b597-419e-90a6-07eba8a4d636?alt=media&token=1e343b11-d8ce-4edd-9f03-4653bb01e799"
        },
        {
            name: "Suraj Patil",
            role: "Technical Head",
            email: "suraj.wwmyw22@sinhgad.edu",
            phone: "9876543212",
            insta : 'surajsp83',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2F5e384929-9e5f-4798-ad5a-dfe0bb1c005b?alt=media&token=0d2892c1-781c-4b7c-90c1-bc12c8ca110b"
        },
        {
            name: "Atharv Deshpande",
            role: "Moderation Head",
            email: "atharvadeshpande06.simca.mca@gmail.com",
            phone: "73875 55262",
            insta : 'atharavadeshpande2',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2F11b87dfb-7e44-47c2-9db7-d61d8c56b662?alt=media&token=bac3de53-ec42-48a4-be22-2d11f6642d9b"
        },
        {
            name: "Aniket Raj",
            role: "Online Event Head",
            email: "aniket.wufwh22@sinhga.edu",
            phone: "87094 45958",
            insta : 'aniket_raj7246',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2Faad3a65b-26e3-4681-93a7-4213902c1235?alt=media&token=ccb59912-f932-4c68-b365-ba32a3af04db"
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
