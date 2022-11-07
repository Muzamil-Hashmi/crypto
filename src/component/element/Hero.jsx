import React from 'react'
import { render } from "react-dom";
import CarouselSlider from "react-carousel-slider";


let data = [
  {
    
    imgSrc: "assets/10008.png"
  },
  {
    
    imgSrc: "assets/10003.png"
  },
  {
    
    imgSrc: "assets/10007.png"
  },
  {
    
    imgSrc: "/assets/10006.jpeg"
  },
  {
    
    imgSrc: "/assets/10005.png"
  },
  {
    
    imgSrc: "/assets/10001.jpeg"
  }
];

/* Percantage to set height does not work well 
in prop sliderBoxStyle here because we could 
not init the height of parent element */

let sliderBoxStyle = {
  height: "250px"
  //, width: "200px"
  , background: "tranparent"
  
};

let itemsStyle = {
  // ,height: "100%", padding: "0px"
  // , padding: "15px"
  // , background: "#FFCA28"
  // , borderRadius: "4px"
  // , margin: "0px 0px", padding: "0px"
};

let textBoxStyle = {
  textAlign: "left"
  ,width:"50%"
  , background: "transparent"
  , fontSize: "36px"
  , fontWeight: 300
  ,Scale:"1.1"
};

let buttonSetting = {
  placeOn: "middle-inside"
  ,hoverEvent: true,
  
};

let manner = {
  // autoSliding: {interval: "4s"}
  // , duration: "0.3s"
}; 

export default function Hero() {
  
  return (
    <div>
 

  
      
      <div className="container-fluid mt-5 text-white">

      <div className="row ">
        
          <div className="col-md-6">
          <h3>Top Collection</h3>
          
          </div>
          <div className="col-md-6 text-end pe-5">
          <h6 className=''>see All</h6>

          </div>
          <CarouselSlider className="collection"
    slideItems={data}
    manner={manner}
    buttonSetting={buttonSetting}
    sliderBoxStyle={sliderBoxStyle}
    itemsStyle={itemsStyle}
    textBoxStyle={textBoxStyle}
  />
      
        
      </div>


  


 
      
      </div>
    </div>
  )
}
