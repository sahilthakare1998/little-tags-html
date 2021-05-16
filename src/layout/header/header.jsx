import "./header.css";
import { useEffect } from "react";

function Header() {
  useEffect(() => {});

  function openMenu() {
    let menuOpen = document.querySelector(".nav__menu");
    let cointaner = document.querySelector(".mainCointaner");
    cointaner.style.opacity = "50%";
    menuOpen.classList.add("open");
    menuOpen.style.left = 0;
    menuOpen.style.width = "30rem";
  }



  return (
    <>


        <header id="header" class="header">
          <div class="navigation">
            <div class="container">
              <nav class="nav">
                <div class="nav__hamburger">
                  <i
                    class="fas fa-bars "
                    style={{ color: "white" }}
                    onClick={openMenu}
                  ></i>
                </div>

                <div class="nav__logo">
                  <a href="/" class="scroll-link">
                    Little Tags
                  </a>
                </div>

                <div className="search__bar">
                  <input
                    type="search"
                    placeholder="search"
                    id="search"
                    className="search__input"
                  />
                </div>

                <div class="nav__icons">
                  <p className="username">Sahil</p>
                  <a href="#" class="icon__item">
                    <i className="fas fa-user"></i>
                  </a>

                  <a href="#" class="icon__item">
                    <i class="fas fa-shopping-basket"></i>
                    <span id="cart__total">0</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </header>
      

    </>
  );
}

export default Header;
