import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';



const Packages = () => {
    const packageStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
        textAlign: 'center',
        backgroundColor: 'rgb(224, 228, 233)'
    }
    return (
        <div className="container">
            <h2 style={{ textAlign: 'center' }}>Lesson Packages to Save</h2>
            <p style={{ textAlign: 'center' }}>Below you will find our three most popular packages</p>
            <div className="row">
                <div className="col-md-4">
                    <div style={packageStyle}>
                        <FontAwesomeIcon icon={faClock} /><span>6 Hours</span>
                        <h4 style={{ backgroundColor: 'grey' }}>Basic Package <br /> Minimum Requirement</h4>
                        <br />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <br />
                        <br />
                        <br />

                        <button style={{ backgroundColor: 'golden', marginLeft: '5%', borderRadius: '12px' }}>Buy Now</button>

                    </div>


                </div>

                <div className="col-md-4">
                    <div style={packageStyle}>
                        <FontAwesomeIcon icon={faClock} /><span>12 Hours</span>
                        <h4 style={{ backgroundColor: 'grey' }}>VIP Package <br /> Minimum Requirement</h4>
                        <br />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <br />
                        <br />
                        <br />

                        <button style={{ backgroundColor: 'golden', marginLeft: '5%', borderRadius: '12px' }}>Buy Now</button>

                    </div>
                    

                </div>

                <div className="col-md-4">
                    <div style={packageStyle}>
                        <FontAwesomeIcon icon={faClock} /><span>20 Hours</span>
                        <h4 style={{ backgroundColor: 'grey' }}>Extra Package <br /> Minimum Requirement</h4>
                        <br />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <br />
                        <br />
                        <br />

                        <button style={{ backgroundColor: 'golden', marginLeft: '5%', borderRadius: '12px' }}>Buy Now</button>

                    </div>
                    

                </div>
            </div>


        </div>

    );
};

export default Packages;