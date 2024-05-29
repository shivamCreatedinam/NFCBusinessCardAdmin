import React, { useEffect } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'


const Allusers = () => {
  
const users = [];


useEffect(()=> {

//   try {
//     const apiEndpoint = 'https://createdinam-backend.onrender.com/api/v1/admin/userList';

//     // The token you received from your authentication process
//     const APItoken = sessionStorage.getItem('token');
    
//     // Data to be sent in the POST request
//     // const data = {
//     //   email: 'richard.admin2242@gmail.com',
//     //   password: 'Adminrichard@123'
//     // };
    
//     // Configure the headers
//     const config = {
//       headers: {
//         'token': `${APItoken}`,
//         'Content-Type': 'application/json'  
//       }
//     };
    
//     // Make the POST request
//     axios.post(apiEndpoint, config)
//       .then(response => {
//         console.log('Data:', response.data);
//         users.push(response.data);
//         console.log(users)
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });

// } catch (error) {
//   if (error.response) {
//     console.error('Error response:', error.response)
//     alert(
//       `Error Code: ${error.response.status}\nError Message: ${error.response.data.responseMessage}`,
//     )
//   } else if (error.request) {
//     console.error('Error request:', error.request)
//     alert('No response received from the server.')
//   } else {
//     console.error('Error message:', error.message)
//     alert('An error occurred while setting up the request.')
//   }
// }
const url = 'https://createdinam-backend.onrender.com/api/v1/admin/userList';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjM4YTA5YmM4Y2NkNjRjY2MyMTJkNDMiLCJlbWFpbCI6InJpY2hhcmQuYWRtaW4yMjQyQGdtYWlsLmNvbSIsInVzZXJUeXBlIjoiQURNSU4iLCJpYXQiOjE3MTY3ODc4MTMsImV4cCI6MTcxNjg3NDIxM30.B3G8QMMwCCWEwqvrLLj6cokNqjZ0PkjyCiIMz8Mob8c';

const data = {
    // Your POST data here
};

fetch(url, {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});


}, 
[]);




const tableExample2 = [
  {
    "result": {
        "docs": [
            {
                "_id": "6638a365eb79aab994fca65a",
                "mobile_number": 8178222323,
                "otp": 7519,
                "otp_time": 1714987997006,
                "otpVerification": false,
                "userType": "USER",
                "status": "ACTIVE",
                "subscription": "Unsubscribed",
                "createdAt": "2024-05-06T09:31:17.013Z",
                "updatedAt": "2024-05-06T09:31:17.013Z",
                "__v": 0
            },
            {
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
            }
        ],
        
    }
}
]

const test = () => {
  return tableExample2.flatMap(item => item.result.docs.filter(doc => doc.userType !== 'ADMIN'));
}

const filteredArray = test();

// filteredArray.map(item => {
//   console.log(item);
// });

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>All Users</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">User</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Country
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Usage</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Payment Method
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>

                  {/* {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-body-secondary text-nowrap">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="d-flex justify-content-between text-nowrap">
                          <div className="fw-semibold">{item.usage.value}%</div>
                          <div className="ms-3">
                            <small className="text-body-secondary">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-body-secondary text-nowrap">Last login</div>
                        <div className="fw-semibold text-nowrap">{item.activity}</div>
                      </CTableDataCell>
                    </CTableRow> */}
                      {filteredArray.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={avatar1} status={'success'} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item._id}</div>
                        <div className="small text-body-secondary text-nowrap">
                          <span>{'new'}</span> | Mobile:{' '}
                          {item.mobile_number}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={cifFr} title={'none'} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="d-flex justify-content-between text-nowrap">
                          <div className="fw-semibold">{'none'}</div>
                          <div className="ms-3">
                            <small className="text-body-secondary">{'none'}</small>
                          </div>
                        </div>
                        <CProgress thin color={'none'} value={43} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        {item.status}
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-body-secondary text-nowrap">Last login</div>
                        <div className="fw-semibold text-nowrap">{item.updatedAt}</div>
                      </CTableDataCell>
                    </CTableRow>
                    
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Allusers;  
