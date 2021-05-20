import React from 'react'
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
import Slider from "@farbenmeer/react-spring-slider";

const imageStyle = (src) => ({
	// backgroundSize: "co",
	backgroundImage: `url(${src})`,
	height: "100%",
	width: "100%",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"center center",
});
const SpringSlider = ({items})=>{
    
    return(<Slider auto={3000} hasBullets bulletStyle={{ backgroundColor: "#fff" }}>
                {items.map((item,index) => (
                    <div
                        key={index}
                        draggable="false"
                        style={imageStyle(item)}
                        onClick={() => console.log("click")}
                    />
                ))}
            </Slider>
    )
}

export default SpringSlider;