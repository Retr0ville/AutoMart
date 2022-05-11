import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
// import HomeList from './pages/HomeList';
import CarDetail from './pages/CarDetail';

const App = () => {
    return (
        <div className="d-flex flex-column ">
            <Header />
            {/* <HomeList /> */}
            <CarDetail />
        </div>
    )
};

export default App;
