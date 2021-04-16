import React from 'react';
import header from '../../../images/header.jpg';
import dog from '../../../images/dog.jpg';
import { Carousel } from 'react-bootstrap';

const HeaderMain = () => {
    return (
        <div>
            {/* <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img style={{height: '700px'}} src={header} class="d-block w-100" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Smart driver Starts Here</h2>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img style={{height: '700px'}} src={dog} class="d-block w-100" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h2>We learn to Drive Easy</h2>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div> */}

            <Carousel>
                <Carousel.Item>
                    <img style={{height: '800px'}}
                        className="d-block w-100"
                        src={header}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height: '800px'}}
                        className="d-block w-100"
                        src={dog}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HeaderMain;