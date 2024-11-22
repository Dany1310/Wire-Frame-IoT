import React from 'react';
import {useState}from 'react';
import {useNavigate, Routes, Route} from 'react-router-dom';
import Boton from '../components/Boton';
import Carousel from '../components/Carousel';
import rasp from '../fotos/rasp.jpg'
import LM from '../fotos/LM555.jpg'
import Xrover from '../fotos/Xrover.jpg'
import Ultrasonico from '../fotos/Ultrasonico.jpg'

function Inicio() {

    const images = [
      rasp,
      LM,
      Xrover,
      Ultrasonico
    ]
  
    const navigate = useNavigate();
  
    const handleNext = () => {
      navigate('/menu');
    }
  
    return (
      <div className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100 container-fluid">
        <h1 className='txt'><b>Xploration Rovers</b></h1>
        <br />
        <br />
        <h4 className="txt">INTERNET OF THINGS 531</h4>
        <br />
        <br />
        <Boton onClick={handleNext}>
          <b>BEGIN EXPERIENCE</b>
        </Boton>
        <br />
        <Carousel images={images}></Carousel>
      </div>
    );
  }

  export default Inicio;