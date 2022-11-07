import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



// let data = [
//   {
    
//     imgSrc: "assets/10008.png"
//   },
//   {
    
//     imgSrc: "assets/10003.png"
//   },
//   {
    
//     imgSrc: "assets/10007.png"
//   },
//   {
    
//     imgSrc: "/assets/10006.jpeg"
//   },
//   {
    
//     imgSrc: "/assets/10005.png"
//   },
//   {
    
//     imgSrc: "/assets/10001.jpeg"
//   }
// ];

// /* Percantage to set height does not work well 
// in prop sliderBoxStyle here because we could 
// not init the height of parent element */

// let sliderBoxStyle = {
//   height: "275px"
//   //, width: "200px"
//   , background: "tranparent"
  
// };

// let itemsStyle = {
//   // ,height: "100%", padding: "0px"
//   // , padding: "15px"
//   // , background: "#FFCA28"
//   // , borderRadius: "4px"
//   // , margin: "0px 0px", padding: "0px"
// };

// let textBoxStyle = {
//   textAlign: "left"
//   ,width:"75%"
//   , background: "transparent"
//   , fontSize: "36px"
//   , fontWeight: 300
//   ,Scale:"1.1"
// };

// let buttonSetting = {
//   placeOn: "middle-inside"
//   ,hoverEvent: true,
  
// };

// let manner = {
//   // autoSliding: {interval: "4s"}
//   // , duration: "0.3s"
// }; 

export default function Hero() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
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
         
     <div className="row">
      <div className="col-md-12">
      <Carousel responsive={responsive}>
  <img className='w-75' src="assets/10008.png" alt="" />
<img className='w-75' src="assets/10003.png" alt="" /> 
<img className='w-75' src="assets/10007.png" alt="" />
<img className='w-75' src="assets/10004.png" alt="" />
<img className='w-75' src="assets/10001.jpeg" alt="" />
<img className='w-75' src="assets/10008.png" alt="" />
<img className='w-75' src="assets/10003.png" alt="" /> 
<img className='w-75' src="assets/10007.png" alt="" />
<img className='w-75' src="assets/10004.png" alt="" />
<img className='w-75' src="assets/10001.jpeg" alt="" />


 
</Carousel>;
      </div>
     </div>
        
      </div>


  


 
      
      </div>
    </div>
  )
}
