import "./sidebar.css";
import { useEffect } from "react";
import {NavLink} from 'react-router-dom'
function Sidebar(props) {
  useEffect(() => {});

  function closeMenu() {
    let menuOpen = document.querySelector(".nav__menu");
    let cointaner = document.querySelector(".mainCointaner");
    cointaner.style.opacity = "100%";
    menuOpen.classList.remove("open");
    menuOpen.style.left = "-30rem";
    menuOpen.style.width = "30rem";
  }

  function navigate(event){
    props.history.push(event.target.href)
  }
  return (
    <>
      <div class="nav__menu">
        <div class="menu__top">
          <span class="nav__category">Little Tags</span>
          <a href="#" class="close__toggle">
            <i
              className="fas fa-times"
              style={{ color: "white" }}
              onClick={closeMenu}
            ></i>
          </a>
        </div>
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#header" class="nav__link scroll-link">
              Accesserories
            </a>

         
          </li>
          <li class="nav__item">
            <a href="/tshirt" class="nav__link scroll-link" onClick={navigate}>
              Shirt
            </a>
          </li>
          <li class="nav__item">
            <a href="#news" class="nav__link scroll-link">
              Pants
            </a>

           

          </li>
          <li class="nav__item">
            <a href="#contact" class="nav__link scroll-link">
              Jackets
            </a>
          </li>

          <li class="nav__item">
            <a href="/image-loader" class="nav__link scroll-link">
            image-loader
            </a>
          </li>

         
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
