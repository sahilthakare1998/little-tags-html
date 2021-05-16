import "../App.css";
import { useEffect } from "react";
import Header from "../layout/header/header";
import Sidebar from "../layout/sidebar/sidebar";
import Footer from "../layout/footer/footer";
import HomePage from "../component/homePage/homePage";
import Tshirt from "../component/tshirts/tshirt";

function Layout() {
  useEffect(() => {});

  return (
    <>
      <Sidebar />
        <Header />
        <div className="mainCointaner">
        <HomePage />

        {/* <Tshirt /> */}
        
       
      </div>
      <div class="fixed-bottom">
      <Footer />
      </div>
     
    </>
  );
}

export default Layout;
