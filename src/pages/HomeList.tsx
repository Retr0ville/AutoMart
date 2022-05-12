/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios";
import Masonry from 'react-masonry-css';
import svgs from '../svg';

const baseUrl = process.env.APP_URL || "http://127.0.0.1:8030"

const HomeListWrapper = styled.div`
  min-width:390px;
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
  const navigate= useNavigate();
  const [carData, setCarData] = React.useState<any>({})
  const [reqErr, setReqErr] = React.useState("")

  React.useEffect(() => {
    axios.get(`${baseUrl}/api/cars`)
      .then((response) => {
        const dt = response.data;
        setCarData(dt);
      }).catch((err) => { if (err) setReqErr("error occured while fetching cars") })
  }, [])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const deleteCar = async (id: any) => {
    axios.delete(`${baseUrl}/api/cars/${id}`)
      .then(() => {
        axios.get(`${baseUrl}/api/cars`)
          .then((response) => {
            const dt = response.data;
            setCarData(dt);
          }).catch((err) => { if (err) setReqErr("error occured while fetching cars") })
      }).catch((err) => { if (err) setReqErr("error occured while deleting car") })
  }

  return (
    <HomeListWrapper className="d-flex flex-column align-items-center justify-content-center my-4 bg-light px-5 align-self-center mw-1200 rounded-3 container">
      <div className="position-relative bg-color-light shadow rounded px-5 py-2 my-3">
        <div className="pin rounded-infinite bg-color-gray  shadow-alt" />
        <div className="pin-mid rounded-infinite bg-color-gray  shadow-alt" />
        <div className="pin-bot rounded-infinite bg-color-gray  shadow-alt" />
        <h1 className="text-center color-primary font-abee fw-bolder">Available For Sale</h1>
      </div>
      {reqErr && <small className="text-danger">{reqErr}</small>}
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
          {
            carData && carData.map((car: any) => {
              return (
                <div key={car.id} className="detail card d-flex rounded shadow hover-shadow pointer bg-light flex-column w-100 mt-3 mt-sm-4 mt-md-5">
                  <img src="/images/sample-car2.png" className="w-100" alt="auto-sale" />
                  <div className="d-flex flex-column p-2 justify-content-between align-items-start">
                    <h6 className="fw-bolder color-gray">
                      {car.name}
                    </h6>
                    <h5 className="fw-bolder color-gray-1">
                      {car.price}
                    </h5>
                    <div className="rule" />
                    <div className="d-flex w-100 justify-content-around me-2">
                      <div className="col-6 fs-small d-flex flex-column my-3 pe-1 text-dark">
                        <div className="d-flex mb-1 align-items-center">
                          <div className="d-flex align-items-center align-self-start" style={{ width: '17.5px' }}>
                            {svgs.odometer}
                          </div>
                          <span className="d-flex flex-column ms-2">
                            <span className="d-flex flex-wrap text-break">{carData && `${carData.odometer} km`}</span>
                            <span className="color-gray">Odometer</span>
                          </span>
                        </div>
                        <div className="rule" />
                        <div className="d-flex mb-1 align-items-center">
                          <div className="d-flex align-items-center align-self-start" style={{ width: '18px' }}>
                            {svgs.bodyType}
                          </div>
                          <span className="d-flex flex-column ms-2">
                            <span className="d-flex flex-wrap text-break">{car.bodyType}</span>
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
                            <span className="d-flex flex-wrap text-break">{car.transmission}</span>
                            <span className="color-gray">Transmission</span>
                          </span>
                        </div>
                        <div className="rule" />
                        <div className="d-flex mb-1 align-items-center">
                          <div className="d-flex align-items-center align-self-start" style={{ width: '18px' }}>
                            {svgs.engine}
                          </div>
                          <span className="d-flex flex-column ms-2">
                            <span className="d-flex flex-wrap text-break">{car.engine}</span>
                            <span className="color-gray">Engine</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <button type='button' onClick={() => { navigate(`/car/${car.id}`) }} className="align-self-center pointer mt-1 rounded p-1 border-light bg-color-light px-4 py-1 color-gray-2 fw-bold hover-shadow">
                      View Details
                    </button>
                  </div>
                </div>
              )
            })
          }
        </Masonry>
      </div>
    </HomeListWrapper>
  );
};

export default HomeList;
