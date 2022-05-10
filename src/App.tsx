import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import HomeList from './pages/HomeList';

const App = () => {
    return (
        <>
            <Header />
            <HomeList />
        </>
    )
};

export default App;
