import './imageLoader.css'
import React, { useEffect,useState, Component} from "react";

function ImageLoader(props){
  let [width,setWidth] = useState(props.width) 
  let [height,setHeight] = useState(props.height) 
  let [src,setSrc] = useState() 

  // let [width,setWidth] = useState('100px') 
  // let [height,setHeight] = useState('100px') 
  // let [src,setSrc] = useState({imageSlide1}) 

  useEffect(() => {

     setTimeout(getData, 2500) 
  },[])

  function getData(){
    
      setSrc(props.src)
  }
  return (
    <>
        <div className='cointaner animated-bg' style={{height:height,width:width }}>
            <img className='image' src={src}  alt=''/>
        </div>
       
    </>
  );
  
}

export default ImageLoader;
