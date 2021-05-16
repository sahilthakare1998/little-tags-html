import "./sidebar.css";
import { useEffect } from "react";

function Sidebar() {
  useEffect(() => {});
  
  function closeMenu() {
    let menuOpen = document.querySelector(".nav__menu");
    let cointaner = document.querySelector(".mainCointaner");
    cointaner.style.opacity = "100%";
    menuOpen.classList.remove("open");
    menuOpen.style.left = "-30rem";
    menuOpen.style.width = "30rem";
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
              Home
            </a>
          </li>
          <li class="nav__item">
            <a href="#category" class="nav__link scroll-link">
              Category
            </a>
          </li>
          <li class="nav__item">
            <a href="#news" class="nav__link scroll-link">
              Blog
            </a>
          </li>
          <li class="nav__item">
            <a href="#contact" class="nav__link scroll-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
