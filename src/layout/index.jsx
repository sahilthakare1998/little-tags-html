import "../App.css";
import { useEffect } from "react";
import Header from "../layout/header/header";
import Sidebar from "../layout/sidebar/sidebar";
import Footer from "../layout/footer/footer";
import HomePage from "../component/homePage/homePage";
import Tshirt from "../component/tshirt/tshirt";
import {Route,Switch ,BrowserRouter as Router,Redirect} from 'react-router-dom'
import ImageLoader from "./image-loader/imageLoader";
function Layout() {
  useEffect(() => {

    return(console.log('unmounted'))
  });

  return (
    <>
      <Sidebar />
        <Header />
        <div className="mainCointaner">
       

        <Router>
          <Switch>
            <Route path='/' strict exact component = {HomePage} />
            <Route path='/tshirt' strict exact component={Tshirt}></Route>
            <Route path='/image-loader' strict exact component={ImageLoader}></Route>
            <Redirect from="*" to="/" />                
          </Switch>
        </Router>

        {/* <Tshirt /> */}
        
       
      </div>
      <div class="fixed-bottom">
      {/* <Footer /> */}
      </div>
     
    </>
  );
}

export default Layout;
