import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export const FooterPage = () => {
  return (
    <div>
    <MDBFooter color="blue" className="font-small pt-4 bg-dark mt-4">
      <MDBContainer fluid className="text-center bg-info text-md-left">
      <MDBCol className="foote"> <h1 className="title">API'S USED FOR COVID-19 TRACKER</h1>
        
      </MDBCol>
       <MDBRow>
         <ul><b>
            <a className="foot" href="https://api.covid19india.org/"><mark className="mar">IndiaApi</mark></a>
            <a className="footo" href="https://disease.sh/v2/all"><mark className="mar">WorldApi</mark></a>
            <a className="footo" href="https://covid19.mathdro.id/api"><mark className="mar">WorldApi_2</mark></a>
          </b>
          </ul>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
    </div>
  );
}

export default FooterPage;