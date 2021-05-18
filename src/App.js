import "./App.css";
import { useEffect } from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import Layout from "./layout";

function App() {
  useEffect(() => {});

  return (
    <>
    <Router>
    <Layout />
    </Router>
    </>
  );
}

export default App;
