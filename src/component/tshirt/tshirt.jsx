import "./tshirt.css";
import React, { useEffect, useState, Component, useRef } from "react";
import ImageLoader from "../../layout/image-loader/imageLoader";
import imageSlide1 from "../../images/flee_market_baner.jpg";
import { debounce, throttle } from "lodash";

function Tshirt() {
  let scroller = useRef();
  let [products, setProducts] = useState([...new Array(10)]);
  let [scrollToTopButton, setScrollToTopButton] = useState(false);
  const delayedHandleChange = debounce(handleScroll, 500);

  useEffect(() => {
    // window.addEventListener('Scroll', function);
    window.addEventListener("scroll", delayedHandleChange);

    return () => {
      window.removeEventListener("scroll", delayedHandleChange);
    };
  }, [products]);

  function scrollToTopButtonClick() {
    window.scrollTo(0,0)
  }

  function handleScroll() {
    if (window.innerHeight < window.scrollY) {
      setScrollToTopButton(true);
    } else {
      setScrollToTopButton(false);
    }
    if (
      window.innerHeight + window.scrollY >
      scroller.current.clientHeight + scroller.current.offsetTop
    ) {
      let arr = [...new Array(10)];
      let count = products.concat(arr);

       setProducts(count)
      window.scrollTo(
        0,
        scroller.current.clientHeight + scroller.current.offsetTop - 100
      );

      console.log("true", window.innerHeight);
    }
  }
  return (
    <>
      <div ref={scroller} className="item-cointaner">
        {products.map(() => {
          return (
            <div className="card">
              <div className="card-header">
                <ImageLoader src={imageSlide1} />
              </div>

              <div className="card-content ">
                <div className="card-title ">
                  <h2>Levis</h2>
                  <i className="far fa-heart" style={{ fontSize: "24px" }}></i>
                </div>
                <div className="card-subtitle">
                  <p> Round Neck</p>
                </div>
                <div className="amount">
                  <span>
                    ₹<strong>800</strong>
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        {scrollToTopButton && (
          <button
            className='scrollToTop'
            onClick={scrollToTopButtonClick}
          >
            {" "}
            <i className='fas fa-angle-up'></i>
          </button>
        )}
      </div>
    </>
  );
}

export default Tshirt;
