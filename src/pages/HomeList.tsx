import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import svgs from '../svg';

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

  .card {
    min-width: 235px;
  }
`;

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
          <div className="detail card d-flex rounded shadow hover-shadow pointer bg-lighter flex-column w-100 mt-3 mt-sm-4 mt-md-5 bg-danger">
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
                      <span className="d-flex flex-wrap text-break">8,952 km</span>
                      <span className="color-gray">Odometer</span>
                    </span>
                  </div>
                  <div className="rule" />
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '18px' }}>
                      {svgs.bodyType}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span className="d-flex flex-wrap text-break">Sedan</span>
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
                      <span className="d-flex flex-wrap text-break">Automatic</span>
                      <span className="color-gray">Transmission</span>
                    </span>
                  </div>
                  <div className="rule" />
                  <div className="d-flex mb-1 align-items-center">
                    <div className="d-flex align-items-center align-self-start" style={{ width: '18px' }}>
                      {svgs.engine}
                    </div>
                    <span className="d-flex flex-column ms-2">
                      <span className="d-flex flex-wrap text-break">4cyl 2.0L Petrol</span>
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