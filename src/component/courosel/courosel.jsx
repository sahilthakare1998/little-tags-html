import './courosel.css'
import React, { useEffect,useState, Component} from "react";
import imageSlide1 from '../../images/flee_market_baner.jpg'
import { render } from '@testing-library/react';

class Courosel extends  Component{

  constructor(){
    super()

    this.state = {
      size : 0,
      counter:0
    }
    this.myInput = React.createRef()
  }

  componentDidMount(){
    console.log('counter 0',this.state.counter)

    // console.log(this.myInput.childNodes)

     console.log(this.myInput.current.offsetWidth)

    let slides = document.querySelectorAll('.slide img')
    this.setState({size:this.myInput.current.offsetWidth})
    this.nextClick()
  }

  
    
   nextClick = () => {
     console.log('counter next 1',this.state.counter)
    let slideCointaner = document.querySelector('.slide')
    let slides = document.querySelectorAll('.slide img')
  if(this.state.counter <= slides.length)
   {
   this.setState({counter:this.state.counter+1}) 

    slideCointaner.style.transition = 'transform 1s ease-in-out'
    slideCointaner.style.transform = `translateX(${-(this.state.size * this.state.counter)}px)`
  
   }
   console.log('counter next 2',this.state.counter)
  }

   prevClick = ()=> {
    console.log('counter prev 1',this.state.counter)
    let slideCointaner = document.querySelector('.slide')
    let slides = document.querySelectorAll('.slide img')
   if(this.state.counter > 0){
    this.setState({counter:this.state.counter - 1}) 
    slideCointaner.style.transition = 'transform 1s ease-in-out'
    slideCointaner.style.transform = `translateX(${-(this.state.size * this.state.counter)}px)`
    
   }
   console.log('counter prev 2',this.state.counter)
   }
  

  render(){
  
  return (
    <>
        <p>T-shirts</p>
        <div className='cointaner' >
          <div ref={this.myInput} className='slide' id='slideById'>
          <img className='image-styling' src={imageSlide1} alt=''></img>
          <img className='image-styling' src={imageSlide1} alt=''/>
          <img className='image-styling' src={imageSlide1} alt=''/>

          <img className='image-styling' src={imageSlide1} alt=''/>
          <img className='image-styling' src={imageSlide1} alt=''/>
          <img className='image-styling' src={imageSlide1} alt=''/>
          </div>
          <button id='prevButton' onClick={this.prevClick}> Previous</button>
          <button id='nextButton' onClick={this.nextClick} >Next</button>
        </div>
       
    </>
  );
  }
}

export default Courosel;
