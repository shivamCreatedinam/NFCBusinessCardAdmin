import React from 'react';
import './custom.css';
import CIcon from '@coreui/icons-react'
import quote from './images/quote.png'
// import {cil-double-quote-sans-left} from '@coreui/icons';

const AdminProfile = () => {
  return (
    <>
    {/* <div>Hi this is Admin info</div> */}
    
        {/* {
    "result": {
        "_id": "6638a09bc8ccd64ccc212d43",
        "email": "richard.admin2242@gmail.com",
        "password": "$2b$10$OAi9pADbAQ5nQQ8bST1Mj.hZ4e3sPcBGbbRw/nFiO7e0wqIhW.fTm",
        "mobile_number": null,
        "otpVerification": false,
        "userType": "ADMIN",
        "status": "ACTIVE",
        "subscription": "Unsubscribed",
        "createdAt": "2024-05-06T09:19:23.228Z",
        "updatedAt": "2024-05-06T09:19:23.228Z",
        "__v": 0
    },
    "responseMessage": "User Details",
    "statusCode": 200
} */}

<div className='main_container'>
  <div className='left_container'>
    <div className='left_container_inner'>
    <img className='img1' src='https://static.vecteezy.com/system/resources/previews/026/424/115/large_2x/stylish-handsome-cyborg-head-in-profile-futuristic-man-artificial-intelligence-generative-ai-technology-generative-ai-technology-photo.jpg'></img>
    <div className='quotes'> &emsp; &emsp; Take a Risk and Keep testing, because what works today won't work tomorrow, but what didn't work earlier may work in someday.</div>
    <img className='img2' src={quote}></img>
    </div>
  </div>
  <div className='right_container'>
    <div className='right_container_inner'>
    <h2>Richard Admin</h2>
    <div className='info'>
    <p>Age: <span>30</span> yrs</p>|
    <p>Gender: <span>Male</span></p>|
    <p>Location: <span>New York</span></p>|
    <p>Email: <span>example@mail.com</span></p>
    </div>
      <h2 className='des'>Description</h2>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      <div className='hero_container'>
      <div className='left_side'>
        <h2>Goals</h2>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div>
      <div className='right_side'>
      <h2>Pain Points</h2>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}


export default AdminProfile;