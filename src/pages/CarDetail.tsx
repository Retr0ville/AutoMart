import React from 'react';
import styled from 'styled-components';
import svgs from '../svg';

const DetailWrapper = styled.div`
  img {
    object-fit: contain;
    height: auto;
    max-width: 550px;
    border-radius:0 0 2rem 2rem;
  }
  // .break {
  //   flex-basis: 100%;
  //   height: 0;
  // }
`;

const CarDetail = () => {
  return (
    <DetailWrapper className="col-9 align-self-center mb-3">
      <div className="container d-flex flex-column align-items-center pb-4 px-0 bg-lighter">
        <div className="d-flex flex-column col-9">
          <img src="/images/sample-car5.jpg" alt="car" className="w-100 align-self-center mb-3" />
          <div className="d-flex w-100 flex-column flex-lg-row">
            <div className="d-flex col-12 col-lg-6 mb-4 mb-lg-0 mt-lg-2">
              <div className="d-flex justify-content-center align-items-center w-100">
                <span className="me-2">
                  {svgs.bodyType}
                </span>
                <span>Sedan2</span>
              </div>
              <div className="d-flex justify-content-center align-items-center w-100">
                <span className="me-2">
                  {svgs.engine}
                </span>
                <span>Sedan3</span>
              </div>
            </div>
            <div className="d-flex col-12 col-lg-6 mt-lg-2">
              <div className="d-flex justify-content-center align-items-center w-100">
                <span className="me-2">
                  {svgs.odometer}
                </span>
                <span>Sedan4</span>
              </div>
              <div className="d-flex justify-content-center  align-items-center w-100">
                <span className="me-2">
                  {svgs.transmission}
                </span>
                <span>Sedan</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rule my-3 align-self-center" />
        <div className="bg-light rounded-alt d-flex justify-content-center align-self-center py-4 col-10 col-lg-8">
          <div className="flex-column d-flex justify-content-center align-items-center col-6 px-3">
            <div className="d-flex flex-column align-self-start flex-md-row align-self-md-center mb-2 mb-md-4">
              <span className="color-gray me-3">
                Odometer:
              </span>
              <span className="color-gray-2">
                8,658n km
              </span>
            </div>
            <div className="d-flex flex-column align-self-start flex-md-row align-self-md-center mb-2 mb-md-4">
              <span className="color-gray me-3">
                Odometer:
              </span>
              <span className="color-gray-2">
                8,658 km
              </span>
            </div>
            <div className="d-flex flex-column align-self-start flex-md-row align-self-md-center mb-2 mb-md-4">
              <span className="color-gray me-3">
                Odometer:
              </span>
              <span className="color-gray-2">
                8,658 km
              </span>
            </div>
            <div className="d-flex flex-column align-self-start flex-md-row align-self-md-center mb-2 mb-md-4">
              <span className="color-gray me-3">
                Odometer:
              </span>
              <span className="color-gray-2">
                8,658 km
              </span>
            </div>
          </div>
          <div className="v-rule" />
          <div className="flex-column d-flex justify-content-center align-items-center ps-3 col-6 ">
            <div className="d-flex flex-column align-self-start flex-md-row align-self-md-center mb-2 mb-md-4">
              <span className="color-gray me-3">
                Odometer:
              </span>
              <span className="color-gray-2">
                8,658 km
              </span>
            </div>
            <div className="d-flex flex-column align-self-start flex-md-row align-self-md-center mb-2 mb-md-4">
              <span className="color-gray me-3">
                Odometer:
              </span>
              <span className="color-gray-2">
                8,658 km
              </span>
            </div>
            <div className="d-flex flex-column align-self-start flex-md-row align-self-md-center mb-2 mb-md-4">
              <span className="color-gray me-3">
                Odometer:
              </span>
              <span className="color-gray-2">
                8,658 km
              </span>
            </div>
            <div className="d-flex flex-column align-self-start flex-md-row align-self-md-center mb-2 mb-md-4">
              <span className="color-gray me-3">
                Odometer:
              </span>
              <span className="color-gray-2">
                8,658 km
              </span>
            </div>
          </div>
        </div>
        <div className="bg-light rounded-alt d-flex justify-content-end justify-content-md-center align-self-center col-10 col-lg-8">

          <button type='button' className="d-flex justify-content-center align-items-center col-6 col-lg-4 pointer mt-1 rounded p-1 border-0 bg-color-primary py-2 color-light shadow fw-bold hover-shadow mb-3">
            Contact Seller
          </button>
        </div>
      </div>
    </DetailWrapper>
  );
};

export default CarDetail;