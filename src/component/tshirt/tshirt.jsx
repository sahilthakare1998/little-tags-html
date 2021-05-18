import "./tshirt.css";
import React, { useEffect, useState, Component } from "react";
import ImageLoader from "../../layout/image-loader/imageLoader";
import imageSlide1 from "../../images/flee_market_baner.jpg";

function Tshirt() {
  return (
    <>
      <div className="item-cointaner">
      
        <div className="card">
          <div className="card-header">
            <ImageLoader src={imageSlide1} />
          </div>

          <div className="card-content">
            <div className="card-title">
              <h2>Levis</h2>
              <i className="far fa-heart" style={{ fontSize: "24px" }}></i>
            </div>
            <div className="card-subtitle">
              <p> Round Neck</p>
            </div>
            <div className="amount">
              <span>
                ₹<strong>800</strong>{" "}
              </span>
            </div>
    
          </div>
        </div>
    
        <div className="card">
          <div className="card-header">
            <ImageLoader src={imageSlide1} />
          </div>

          <div className="card-content">
            <div className="card-title">
              <h2>Levis</h2>
              <i className="far fa-heart" style={{ fontSize: "24px" }}></i>
            </div>
            <div className="card-subtitle">
              <p> Round Neck</p>
            </div>
            <div className="amount">
              <span>
                ₹<strong>800</strong>{" "}
              </span>
            </div>
    
          </div>
        </div>
   
      </div>

      <div class="d-flex flex-sm-row flex-column">
 
  <div className=" mr-auto p-2 card">
          <div className="card-header">
            <ImageLoader src={imageSlide1} />
          </div>

          <div className="card-content">
            <div className="card-title">
              <h2>Levis</h2>
              <i className="far fa-heart" style={{ fontSize: "24px" }}></i>
            </div>
            <div className="card-subtitle">
              <p> Round Neck</p>
            </div>
            <div className="amount">
              <span>
                ₹<strong>800</strong>{" "}
              </span>
            </div>
    
          </div>
        </div>
    
        <div className=" mr-auto p-2 card">
          <div className="card-header">
            <ImageLoader src={imageSlide1} />
          </div>

          <div className="card-content">
            <div className="card-title">
              <h2>Levis</h2>
              <i className="far fa-heart" style={{ fontSize: "24px" }}></i>
            </div>
            <div className="card-subtitle">
              <p> Round Neck</p>
            </div>
            <div className="amount">
              <span>
                ₹<strong>800</strong>{" "}
              </span>
            </div>
    
          </div>
        </div>
    
        <div className=" mr-auto p-2 card">
          <div className="card-header">
            <ImageLoader src={imageSlide1} />
          </div>

          <div className="card-content">
            <div className="card-title">
              <h2>Levis</h2>
              <i className="far fa-heart" style={{ fontSize: "24px" }}></i>
            </div>
            <div className="card-subtitle">
              <p> Round Neck</p>
            </div>
            <div className="amount">
              <span>
                ₹<strong>800</strong>{" "}
              </span>
            </div>
    
          </div>
        </div>
    

        <div className=" mr-auto p-2 card">
          <div className="card-header">
            <ImageLoader src={imageSlide1} />
          </div>

          <div className="card-content">
            <div className="card-title">
              <h2>Levis</h2>
              <i className="far fa-heart" style={{ fontSize: "24px" }}></i>
            </div>
            <div className="card-subtitle">
              <p> Round Neck</p>
            </div>
            <div className="amount">
              <span>
                ₹<strong>800</strong>{" "}
              </span>
            </div>
    
          </div>
        </div>
    

        <div className=" mr-auto p-2 card">
          <div className="card-header">
            <ImageLoader src={imageSlide1} />
          </div>

          <div className="card-content">
            <div className="card-title">
              <h2>Levis</h2>
              <i className="far fa-heart" style={{ fontSize: "24px" }}></i>
            </div>
            <div className="card-subtitle">
              <p> Round Neck</p>
            </div>
            <div className="amount">
              <span>
                ₹<strong>800</strong>{" "}
              </span>
            </div>
    
          </div>
        </div>
    
  

</div>
    </>
  );
}

export default Tshirt;
