import React from "react";
import styled from "styled-components";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter
      style={{ position: "static" }}
      bgColor="dark"
      className="text-center text-white text-lg-left"
    >
      <MDBContainer style={{ position: "static" }} className="p-4 pb-0">
        <form action="">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol size="auto" className="mb-4 mb-md-0">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>

            <MDBCol md="5" size="12" className="mb-4 mb-md-0">
              <MDBInput
                type="text"
                id="form5Example2"
                label="Email address"
                contrast
              />
            </MDBCol>

            <MDBCol size="auto" className="mb-4 mb-md-0">
              <MDBBtn outline color="light">
                Subscribe
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-white" href="https://mdbootstrap.com/">
          Reactstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}

// import React from "react";
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
// } from "mdb-react-ui-kit";

// export default function App() {
//   return (
//     <MDBFooter bgColor="gray" className="text-center text-lg-start text-muted">
//       <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
//         <div className="me-5 d-none d-lg-block">
//           <span>Get connected with us on social networks:</span>
//         </div>

//       </section>

//       <section className="">
//         <MDBContainer className="text-center text-md-start mt-5">
//           <MDBRow className="mt-3">
//             <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">
//                 <MDBIcon icon="gem" className="me-3" />
//                 Company name
//               </h6>
//               <p>
//               Our company "Rent" will help you find
//               flats and houses. Our data is attached next
//               </p>
//             </MDBCol>
//             <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
//               <p>
//                 <a href="#!" className="text-reset">
//                   Pricing
//                 </a>
//               </p>
//               <p>
//                 <a href="#!" className="text-reset">
//                   Settings
//                 </a>
//               </p>
//               <p>
//                 <a href="#!" className="text-reset">
//                   Orders
//                 </a>
//               </p>
//               <p>
//                 <a href="#!" className="text-reset">
//                   Help
//                 </a>
//               </p>
//             </MDBCol>

//             <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
//               <p>
//                 <MDBIcon icon="home" className="me-2" />
//               Country: Uzbekistan, Town: Tashkent
//               </p>
//               <p>
//                 <MDBIcon icon="envelope" className="me-3" />
//                 info@example.com
//               </p>
//               <p>
//                 <MDBIcon icon="phone" className="me-3" /> +998 (90) 133-55-05
//               </p>
//               <p>
//                 <MDBIcon icon="print" className="me-3" /> +998 (90) 957-55-05
//               </p>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </section>

//       <div
//         className="text-center p-4"
//         style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
//       >
//         © 2023 Copyright:
//         <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
//           Reactstrap.com
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }
