import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class AboutUs extends Component {

    render() {
      return (
        <div className="App">
            <div className="banner-2">
                <div className="banner-aboutus"></div>
            </div>
            <div className="merge-box">
                <div className="text-box">
                    <h1>
                        Our team works each day to give
                        you the best experience.
                    </h1>
                    <Link to="/10-final-project-matheus-bustamante/">
                        <span className="home-btn">Shop Now</span>
                    </Link>
                </div>
            </div>
       
            <div className="aboutus">
                <h1>About Us:</h1>
                <p>
                    We are the first company to sell true quality products. Our products are hand made by hundreds of employees
                    all over the world. When you buy a Galleria product, you are experiencing what true quality really is. 

                </p>
                <p>
                Besides having the greatest products on the market, we care about the world. Almost 90% of The Galleria sales were 
                distributed across an organization that is taking care of our planet. Come join us in this mission and enjoy our products.
                </p>
            </div>
            <div  className="footer"> </div>
        </div>
      );
    }
  }
  
  export default AboutUs;