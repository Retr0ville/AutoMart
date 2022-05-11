import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';

const HomeListWrapper = styled.div`
  .pin, .pin-mid, .pin-bot {
    position: absolute;
    width: 10px;
    height: 10px;
  }
  .detail button {
    border-width: 0px;
  }
  .detail:hover button {
    border-width: 1px !important;
    padding-block:calc(.25rem - 1px) !important;
    color: #2e2e2e !important;
  }
  .pin {
    top: 5px;
    left: 10px;
  }
  .pin-mid {
    top: 43%;
    left: 10px;
  }
  .pin-bot {
    bottom: 5px;
    left: 10px;
  }
  .rule {
    width: 100%;
    height: 1px;
    background-color: #e5e5e5;
  }
  .v-rule {
    min-width: 1px;
    min-height: 100%;
    background-color: #e5e5e5;
  }
  .card {
    min-width: 235px;
  }
`;

const svgs = {
  odometer: (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#5e5e5e' data-name="Layer 1" width="27.29" height="21.5" viewBox="0 0 27.29 21.5"><g><rect className="cls-1" x="13.15" y="0.69" width="1" height="2.95" /><rect className="cls-1" x="23.69" y="13.18" width="2.95" height="1" /><rect className="cls-1" x="0.66" y="13.18" width="2.95" height="1" /><rect className="cls-1" x="20.32" y="5.04" width="2.95" height="1" transform="translate(2.47 17.03) rotate(-45)" /><rect className="cls-1" x="5.01" y="4.06" width="1" height="2.95" transform="translate(-2.3 5.52) rotate(-45)" /><rect className="cls-1" x="11.28" y="5.23" width="1" height="6.41" transform="translate(-2.15 4.45) rotate(-19.66)" /><path className="cls-1" d="M24.81,21.27H2.5L2.35,21A13.49,13.49,0,1,1,25,21ZM3,20.27H24.26A12.49,12.49,0,1,0,3,20.27Z" /><path className="cls-1" d="M13.65,16.54a2.86,2.86,0,1,1,2.86-2.86A2.86,2.86,0,0,1,13.65,16.54Zm0-4.72a1.86,1.86,0,1,0,1.86,1.86A1.86,1.86,0,0,0,13.65,11.82Z" /></g></svg>
  ),
  bodyType: (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" fill='#5e5e5e' data-name="Layer 1" width="31.25" height="24.06" viewBox="0 0 31.25 24.06"><g><path className="cls-1" d="M27.13,23.87H22.59a1.16,1.16,0,0,1-1.22-1.16V19.29h1V22.7c0,.2.23.2.25.2h4.55s.25,0,.25-.2V19.29h1V22.7A1.16,1.16,0,0,1,27.13,23.87Z" /><path className="cls-1" d="M25.42,16.65H22.31a1.94,1.94,0,0,1-1.94-1.94V13.48a1.94,1.94,0,0,1,1.94-1.94h3.11a1.94,1.94,0,0,1,1.93,1.94v1.24A1.94,1.94,0,0,1,25.42,16.65ZM22.31,12.5a1,1,0,0,0-1,1v1.24a1,1,0,0,0,1,1h3.11a1,1,0,0,0,1-1V13.48a1,1,0,0,0-1-1Z" /><path className="cls-1" d="M29.58,9.3H27.17v-1h2.41A.45.45,0,0,0,30,7.89V6.38a.45.45,0,0,0-.45-.45H25.94V5h3.64A1.41,1.41,0,0,1,31,6.38V7.89A1.41,1.41,0,0,1,29.58,9.3Z" /><path className="cls-1" d="M29.06,20.31H2.29A1.29,1.29,0,0,1,1,19V11.66a1.3,1.3,0,0,1,.3-.83L4.19,8a1.25,1.25,0,0,1,1-.42H26.21a1.29,1.29,0,0,1,1,.46L30,10.79a1.32,1.32,0,0,1,.34.87V19A1.29,1.29,0,0,1,29.06,20.31ZM5.14,8.59a.33.33,0,0,0-.25.12L2,11.48a.38.38,0,0,0,0,.18V19a.33.33,0,0,0,.33.33H29.06a.33.33,0,0,0,.33-.33V11.66a.33.33,0,0,0-.08-.21L26.5,8.74a.38.38,0,0,0-.29-.16Z" /><path className="cls-1" d="M27.22,8.59H4.14L6,1.55A1.72,1.72,0,0,1,7.67.27h16a1.72,1.72,0,0,1,1.66,1.28Zm-21.83-1H26L24.41,1.8a.75.75,0,0,0-.73-.56h-16a.75.75,0,0,0-.73.56Z" /><path className="cls-1" d="M8.77,23.87H4.22A1.16,1.16,0,0,1,3,22.7V19.29H4V22.7c0,.2.23.2.25.2H8.77s.25,0,.25-.2V19.29h1V22.7A1.16,1.16,0,0,1,8.77,23.87Z" /><path className="cls-1" d="M9,16.65H5.93A1.94,1.94,0,0,1,4,14.71V13.48a1.94,1.94,0,0,1,1.94-1.94H9A1.94,1.94,0,0,1,11,13.48v1.24A1.94,1.94,0,0,1,9,16.65ZM5.93,12.5a1,1,0,0,0-1,1v1.24a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V13.48a1,1,0,0,0-1-1Z" /><path className="cls-1" d="M4.18,9.3H1.77A1.41,1.41,0,0,1,.36,7.89V6.38A1.41,1.41,0,0,1,1.77,5H5.42v1H1.77a.45.45,0,0,0-.45.45V7.89a.45.45,0,0,0,.45.45H4.18Z" /></g></svg>
  ),
  engine: (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_3" fill='#5e5e5e' data-name="Layer 1" width="29.88" height="18.56" viewBox="0 0 29.88 18.56"><g><path className="cls-1" d="M17.09,18.35H11.48a2.32,2.32,0,0,1-2-.91c-.65-.8-1.46-1.71-1.73-1.95a9.16,9.16,0,0,0-3.09-.4,1.37,1.37,0,0,1-1-.29,1.87,1.87,0,0,1-.45-1.48V7.57c0-.26.11-1.12,1.51-1.12,1,0,2.91-.25,3.7-1.19L8.61,5a3.68,3.68,0,0,0,.25-.29,3.15,3.15,0,0,1,2.93-1.57h9c1.12,0,1.67.52,1.67,1.59V6.13h2.57l0-2.16,4.46.12,0,10.77-4.46-.09V12.44H22.5V13a2.67,2.67,0,0,1-1.09,1.84l-.56.55c-.71.71-2.14,2-2.68,2.5A1,1,0,0,0,18,18C17.8,18.32,17.64,18.35,17.09,18.35ZM4.65,14.08c.15,0,3.07,0,3.79.66.35.31,1.22,1.31,1.83,2.06a1.35,1.35,0,0,0,1.2.55h5.83a1.83,1.83,0,0,1,.22-.21c.52-.43,1.94-1.75,2.61-2.44l.56-.55c.44-.42.8-.77.8-1.13V11.44h4.56v2.33l2.46.05,0-8.77L26.08,5l0,2.14H21.5V4.77c0-.48-.06-.59-.67-.59h-9A2.18,2.18,0,0,0,9.66,5.34c-.09.13-.2.24-.31.36l-.18.2C7.93,7.37,5.24,7.45,4.71,7.45c-.35,0-.49.07-.51.1v5.77c0,.62.12.73.12.74A1,1,0,0,0,4.65,14.08Z" /><rect className="cls-1" x="14.42" y="0.43" width="1" height="3.54" /><rect className="cls-1" x="11.08" y="0.22" width="7.9" height="1" /><rect className="cls-1" x="0.45" y="10.26" width="3.54" height="1" /><rect className="cls-1" x="0.25" y="3.97" width="1" height="14.17" /></g></svg>
  ),
  transmission: (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_4" fill='#5e5e5e' data-name="Layer 1" width="22.04" height="26.75" viewBox="0 0 22.04 26.75"><g><polygon className="cls-1" points="21.85 26.5 0.22 26.5 0.22 22.94 8.07 15.78 6.59 11.82 7.53 11.46 9.25 16.06 1.22 23.38 1.22 25.5 20.85 25.5 20.85 23.38 12.95 16.11 10.39 9.93 11.32 9.55 13.83 15.63 21.85 22.94 21.85 26.5" /><path className="cls-1" d="M7.49,11.19a5.7,5.7,0,0,1-2.34-.5,5.64,5.64,0,0,1-3-3.18,5.54,5.54,0,0,1,.39-4.76l.09-.16L9.27.1l.17.06a5.63,5.63,0,0,1,3.44,3.34,5.7,5.7,0,0,1-3.36,7.33A5.76,5.76,0,0,1,7.49,11.19ZM3.34,3.39A4.55,4.55,0,0,0,3.1,7.16,4.65,4.65,0,0,0,5.56,9.78a4.73,4.73,0,0,0,6.38-5.93A4.57,4.57,0,0,0,9.28,1.16Z" /><path className="cls-1" d="M11.19,16.77a6.31,6.31,0,0,1-3-.75l.51-.86a4.9,4.9,0,0,0,4.71,0L14,16A5.39,5.39,0,0,1,11.19,16.77Z" /></g></svg>
  ),
}

const HomeList = () => {
  return (
    <HomeListWrapper className="d-flex flex-column align-items-center justify-content-center my-4 bg-light px-5 align-self-center mw-1200 rounded-3">
      <div className="position-relative bg-color-light shadow rounded px-5 py-2 my-3">
        <div className="pin rounded-infinite bg-color-gray  shadow-alt" />
        <div className="pin-mid rounded-infinite bg-color-gray  shadow-alt" />
        <div className="pin-bot rounded-infinite bg-color-gray  shadow-alt" />
        <h1 className="text-center color-primary font-abee fw-bolder">Available For Sale</h1>
      </div>
      <div className="w-100 d-flex align-items-center justify-content-center">
        <Masonry
          breakpointCols={{
            default: 3,
            992: 2,
            550: 1,
          }}
          className="my-masonry-grid p-3"
          columnClassName="my-masonry-grid_column"
        >
          <div className="detail card d-flex rounded shadow hover-shadow pointer bg-light flex-column w-100 mt-3 mt-sm-4 mt-md-5 bg-danger">
            <img src="/images/sample-car2.png" className="w-100" alt="auto-sale" />
            <div className="d-flex flex-column p-2 justify-content-between align-items-start">
              <h6 className="fw-bolder color-gray">
                Toyota Corola
              </h6>
              <h5 className="fw-bolder color-gray-1">
                $1,000,000
              </h5>
              <div className="rule" />
              <div className="d-flex w-100 justify-content-around me-2">
                <div className="col-6 fs-small d-flex flex-column my-3 pe-1 text-dark">
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '17.5px' }}>
                      {svgs.odometer}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>8,952 km</span>
                      <span className="color-gray">Odometer</span>
                    </span>
                  </div>
                  <div className="rule" />
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '18px' }}>
                      {svgs.bodyType}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>Sedan</span>
                      <span className="color-gray">Body-type</span>
                    </span>
                  </div>
                </div>
                <div className="v-rule" />
                <div className="col-6 fs-small d-flex flex-column text-dark ps-2 my-3">
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '14px' }}>
                      {svgs.transmission}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>Automatic</span>
                      <span className="color-gray">Transmission</span>
                    </span>
                  </div>
                  <div className="rule" />
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '18px' }}>
                      {svgs.engine}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>4cyl 2.0L Petrol</span>
                      <span className="color-gray">Engine</span>
                    </span>
                  </div>
                </div>
              </div>
              <button type='button' className="align-self-center pointer mt-1 rounded p-1 border-light bg-color-light px-4 py-1 color-gray-2 fw-bold hover-shadow">
                View Details
              </button>
            </div>
          </div>
          <div className="detail card d-flex rounded shadow hover-shadow pointer bg-light flex-column w-100 mt-3 mt-sm-4 mt-md-5 bg-danger">
            <img src="/images/sample-car2.png" className="w-100" alt="auto-sale" />
            <div className="d-flex flex-column p-2 justify-content-between align-items-start">
              <h6 className="fw-bolder color-gray">
                Toyota Corola
              </h6>
              <h5 className="fw-bolder color-gray-1">
                $1,000,000
              </h5>
              <div className="rule" />
              <div className="d-flex w-100 justify-content-around me-2">
                <div className="col-6 fs-small d-flex flex-column my-3 pe-1 text-dark">
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '17.5px' }}>
                      {svgs.odometer}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>8,952 km</span>
                      <span className="color-gray">Odometer</span>
                    </span>
                  </div>
                  <div className="rule" />
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '18px' }}>
                      {svgs.bodyType}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>Sedan</span>
                      <span className="color-gray">Body-type</span>
                    </span>
                  </div>
                </div>
                <div className="v-rule" />
                <div className="col-6 fs-small d-flex flex-column text-dark ps-2 my-3">
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '14px' }}>
                      {svgs.transmission}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>Automatic</span>
                      <span className="color-gray">Transmission</span>
                    </span>
                  </div>
                  <div className="rule" />
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '18px' }}>
                      {svgs.engine}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>4cyl 2.0L Petrol</span>
                      <span className="color-gray">Engine</span>
                    </span>
                  </div>
                </div>
              </div>
              <button type='button' className="align-self-center pointer mt-1 rounded p-1 border-light bg-color-light px-4 py-1 color-gray-2 fw-bold hover-shadow">
                View Details
              </button>
            </div>
          </div>
          <div className="detail card d-flex rounded shadow hover-shadow pointer bg-light flex-column w-100 mt-3 mt-sm-4 mt-md-5 bg-danger">
            <img src="/images/sample-car2.png" className="w-100" alt="auto-sale" />
            <div className="d-flex flex-column p-2 justify-content-between align-items-start">
              <h6 className="fw-bolder color-gray">
                Toyota Corola
              </h6>
              <h5 className="fw-bolder color-gray-1">
                $1,000,000
              </h5>
              <div className="rule" />
              <div className="d-flex w-100 justify-content-around me-2">
                <div className="col-6 fs-small d-flex flex-column my-3 pe-1 text-dark">
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '17.5px' }}>
                      {svgs.odometer}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>8,952 km</span>
                      <span className="color-gray">Odometer</span>
                    </span>
                  </div>
                  <div className="rule" />
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '18px' }}>
                      {svgs.bodyType}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>Sedan</span>
                      <span className="color-gray">Body-type</span>
                    </span>
                  </div>
                </div>
                <div className="v-rule" />
                <div className="col-6 fs-small d-flex flex-column text-dark ps-2 my-3">
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '14px' }}>
                      {svgs.transmission}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>Automatic</span>
                      <span className="color-gray">Transmission</span>
                    </span>
                  </div>
                  <div className="rule" />
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '18px' }}>
                      {svgs.engine}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>4cyl 2.0L Petrol</span>
                      <span className="color-gray">Engine</span>
                    </span>
                  </div>
                </div>
              </div>
              <button type='button' className="align-self-center pointer mt-1 rounded p-1 border-light bg-color-light px-4 py-1 color-gray-2 fw-bold hover-shadow">
                View Details
              </button>
            </div>
          </div>
          <div className="detail card d-flex rounded shadow hover-shadow pointer bg-light flex-column w-100 mt-3 mt-sm-4 mt-md-5 bg-danger">
            <img src="/images/sample-car2.png" className="w-100" alt="auto-sale" />
            <div className="d-flex flex-column p-2 justify-content-between align-items-start">
              <h6 className="fw-bolder color-gray">
                Toyota Corola
              </h6>
              <h5 className="fw-bolder color-gray-1">
                $1,000,000
              </h5>
              <div className="rule" />
              <div className="d-flex w-100 justify-content-around me-2">
                <div className="col-6 fs-small d-flex flex-column my-3 pe-1 text-dark">
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '17.5px' }}>
                      {svgs.odometer}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>8,952 km</span>
                      <span className="color-gray">Odometer</span>
                    </span>
                  </div>
                  <div className="rule" />
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '18px' }}>
                      {svgs.bodyType}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>Sedan</span>
                      <span className="color-gray">Body-type</span>
                    </span>
                  </div>
                </div>
                <div className="v-rule" />
                <div className="col-6 fs-small d-flex flex-column text-dark ps-2 my-3">
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '14px' }}>
                      {svgs.transmission}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>Automatic</span>
                      <span className="color-gray">Transmission</span>
                    </span>
                  </div>
                  <div className="rule" />
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '18px' }}>
                      {svgs.engine}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>4cyl 2.0L Petrol</span>
                      <span className="color-gray">Engine</span>
                    </span>
                  </div>
                </div>
              </div>
              <button type='button' className="align-self-center pointer mt-1 rounded p-1 border-light bg-color-light px-4 py-1 color-gray-2 fw-bold hover-shadow">
                View Details
              </button>
            </div>
          </div>
          <div className="detail card d-flex rounded shadow hover-shadow pointer bg-light flex-column w-100 mt-3 mt-sm-4 mt-md-5 bg-danger">
            <img src="/images/sample-car2.png" className="w-100" alt="auto-sale" />
            <div className="d-flex flex-column p-2 justify-content-between align-items-start">
              <h6 className="fw-bolder color-gray">
                Toyota Corola
              </h6>
              <h5 className="fw-bolder color-gray-1">
                $1,000,000
              </h5>
              <div className="rule" />
              <div className="d-flex w-100 justify-content-around me-2">
                <div className="col-6 fs-small d-flex flex-column my-3 pe-1 text-dark">
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '17.5px' }}>
                      {svgs.odometer}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>8,952 km</span>
                      <span className="color-gray">Odometer</span>
                    </span>
                  </div>
                  <div className="rule" />
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '18px' }}>
                      {svgs.bodyType}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>Sedan</span>
                      <span className="color-gray">Body-type</span>
                    </span>
                  </div>
                </div>
                <div className="v-rule" />
                <div className="col-6 fs-small d-flex flex-column text-dark ps-2 my-3">
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '14px' }}>
                      {svgs.transmission}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>Automatic</span>
                      <span className="color-gray">Transmission</span>
                    </span>
                  </div>
                  <div className="rule" />
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '18px' }}>
                      {svgs.engine}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>4cyl 2.0L Petrol</span>
                      <span className="color-gray">Engine</span>
                    </span>
                  </div>
                </div>
              </div>
              <button type='button' className="align-self-center pointer mt-1 rounded p-1 border-light bg-color-light px-4 py-1 color-gray-2 fw-bold hover-shadow">
                View Details
              </button>
            </div>
          </div>
          <div className="detail card d-flex rounded shadow hover-shadow pointer bg-light flex-column w-100 mt-3 mt-sm-4 mt-md-5 bg-danger">
            <img src="/images/sample-car2.png" className="w-100" alt="auto-sale" />
            <div className="d-flex flex-column p-2 justify-content-between align-items-start">
              <h6 className="fw-bolder color-gray">
                Toyota Corola
              </h6>
              <h5 className="fw-bolder color-gray-1">
                $1,000,000
              </h5>
              <div className="rule" />
              <div className="d-flex w-100 justify-content-around me-2">
                <div className="col-6 fs-small d-flex flex-column my-3 pe-1 text-dark">
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '17.5px' }}>
                      {svgs.odometer}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>8,952 km</span>
                      <span className="color-gray">Odometer</span>
                    </span>
                  </div>
                  <div className="rule" />
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '18px' }}>
                      {svgs.bodyType}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>Sedan</span>
                      <span className="color-gray">Body-type</span>
                    </span>
                  </div>
                </div>
                <div className="v-rule" />
                <div className="col-6 fs-small d-flex flex-column text-dark ps-2 my-3">
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '14px' }}>
                      {svgs.transmission}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>Automatic</span>
                      <span className="color-gray">Transmission</span>
                    </span>
                  </div>
                  <div className="rule" />
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '18px' }}>
                      {svgs.engine}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span>4cyl 2.0L Petrol</span>
                      <span className="color-gray">Engine</span>
                    </span>
                  </div>
                </div>
              </div>
              <button type='button' className="align-self-center pointer mt-1 rounded p-1 border-light bg-color-light px-4 py-1 color-gray-2 fw-bold hover-shadow">
                View Details
              </button>
            </div>
          </div>
        </Masonry>
      </div>
    </HomeListWrapper>
  );
};

export default HomeList;