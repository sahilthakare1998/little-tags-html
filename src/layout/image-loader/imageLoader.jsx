import './imageLoader.css'
import React, { useEffect,useState, Component} from "react";

function ImageLoader(props){
  let [width,setWidth] = useState(props.width) 
  let [height,setHeight] = useState(props.height) 
  let [src,setSrc] = useState() 

  useEffect(() => {
    if(props.width && props.height){
      setWidth(props.width)
      setHeight(props.height)
    }
    else{
      setHeight('200px')
    }
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
