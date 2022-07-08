import React from 'react'
// import playStore from"../../../image/playstore.png";
// import appStore from"../../../image/Appstore.png";
import"./footer.css";

const Footer = () => {
  return (
    <footer id = "footer">
        <div className= "left">
            <h3>DOWNLOAD APP</h3>
            <p> Download app for Mobiles</p>
            {/* <img src={playStore} alt="playStore" />
            <img src={appStore} alt="appStore" /> */}
        </div>

        <div className= "mid">
            <h1>Ecommerce</h1>
            <p>My rule hard working is the first priority for future. </p>
            <p>Copyright 2022 &copy; Raja Kr</p> 
        </div>

        <div className="right">
            <h4>follow us</h4>
            <a href="http://facebookcom/Raja kumar yaduvanshi ">FACEBOOK</a>
            <a href="http://instagram/Raja kumar yaduvanshi ">INSTAGRAM</a>
            <a href="http://linkedin/Raja kumar">LINKEDIN</a>

        </div>



    </footer>
    
  )
}

export default Footer