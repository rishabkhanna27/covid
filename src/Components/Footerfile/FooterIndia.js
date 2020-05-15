import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import styles from './Footer.module.css';

export const FooterPageIndia = () => {
  return (
    <div className={styles.container}>
    <MDBFooter color="blue" className="font-small pt-4 bg-dark mt-4">
      <MDBContainer fluid className="text-center bg-info text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Covid-19 Tracker</h5>
          </MDBCol>
          <MDBCol>
 


      
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
    </div>
  );
}

export default FooterPageIndia;