import React from 'react';
import './BackBone.css';
import pbg from '../../../assets/img/LogicaSh (2).png'

const BackBone = () => {
    const headsDetails = [
        {
            name: "Manas Lahare",
            role: "Offline Event Handling Head",
            email: "manaslahare@gmail.com",
            phone: "1234567899",
            insta : '',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2F05920fa4-241f-418a-9461-17fbf877d715?alt=media&token=5451a11b-eb06-4fd4-9967-da0bc98cbfa9"
        },
        {
            name: "Amol Patil",
            role: "Media Head",
            email: "",
            phone: "9876543212",
            insta : '',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2F71291a7e-e0dd-4677-a464-fa1c0e60ac7e?alt=media&token=0e2ed118-364e-46c3-bbec-323c43391200"
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
            name: "Suraj Patil",
            role: "Technical Head",
            email: "",
            phone: "9876543212",
            insta : '',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2F5e384929-9e5f-4798-ad5a-dfe0bb1c005b?alt=media&token=0d2892c1-781c-4b7c-90c1-bc12c8ca110b"
        },
        {
            name: "Atharv Deshpande",
            role: "Moderation Head",
            email: "",
            phone: "9876543212",
            insta : '',
            photo: "https://firebasestorage.googleapis.com/v0/b/imageuploaddb-75eba.appspot.com/o/files%2F11b87dfb-7e44-47c2-9db7-d61d8c56b662?alt=media&token=bac3de53-ec42-48a4-be22-2d11f6642d9b"
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
