import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';

const HomeListWrapper = styled.div`
  .pin, .pin-mid, .pin-bot {
    position: absolute;
    width: 10px;
    height: 10px;
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
`;

const HomeList = () => {
  return (
    <HomeListWrapper className="d-flex flex-column align-items-center justify-content-center container my-4 bg-light rounded-3">
      <div className="position-relative bg-color-light shadow rounded px-5 py-2 my-3">
        <div className="pin rounded-infinite bg-color-gray  shadow-alt" />
        <div className="pin-mid rounded-infinite bg-color-gray  shadow-alt" />
        <div className="pin-bot rounded-infinite bg-color-gray  shadow-alt" />
        <h1 className="text-center color-primary font-abee fw-bolder">Available For Sale</h1>
      </div>
      <div className="w-100 d-flex align-items-center justify-content-center">
        <Masonry
          breakpointCols={{
            default: 4,
            1100: 3,
            700: 2,
            500: 1,
          }}
          className="my-masonry-grid w-100 p-3"
          columnClassName="my-masonry-grid_column"
        >
          <div className="d-flex rounded shadow hover-shadow pointer bg-light flex-column w-100 mt-2 bg-danger color-alt">
            <img src="/sample-car.jpg" alt="auto-sale" />
            <div className="d-flex flex-column p-2 justify-content-between align-items-start">
              <h5 className="fw-bolder">
                Toyota Corola
              </h5>
              <h6 className="fw-bolder">
                $1,000,000
              </h6>
              <div className="rule"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, nisi eu tempus ornare, nisl nisl
              </p>
            </div>
          </div>
          <div className="w-100 p-4 mt-2 bg-danger color-alt">1</div>
          <div className="w-100 p-4 mt-2 bg-danger color-alt">1</div>
          <div className="w-100 p-4 mt-2 bg-danger color-alt">1</div>
          <div className="w-100 p-4 mt-2 bg-danger color-alt">1</div>
        </Masonry>
      </div>
    </HomeListWrapper>
  );
};

export default HomeList;