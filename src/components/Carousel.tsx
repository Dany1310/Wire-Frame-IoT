import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface carouselProps{
    images: string[];
}

const Carousel = ({images}:carouselProps) => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
                {images.map((image,index) => (
                    <div>
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img  src={image} className="d-block w-100" alt="..." />
                        </div>

                        <div className="carousel-item">
                            <img src={image} className="d-block w-100" alt="..." />
                        </div>

                        <div className="carousel-item">
                            <img src={image} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={image} className="d-block w-100" alt="..." />
                        </div>

                    </div>
                ))}

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
}

export default Carousel;