import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Add_user = () => {


  
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Form Control</strong>
          </CCardHeader>
          <CCardBody>
            {/* <DocsExample href="forms/form-control"> */}
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Enter username</CFormLabel>
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    placeholder="username"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Email address</CFormLabel>
                  <CFormInput
                    type="email"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Email address</CFormLabel>
                  <CFormInput
                    type="number"
                    id="exampleFormControlInput1"
                    placeholder="XX XXXXXX"
                  />
                </div>
              </CForm>
            {/* </DocsExample> */}
          </CCardBody>
        </CCard>
      </CCol>
    
    </CRow>
  )
}

export default Add_user;
