import React from "react";
import MyNav from './Components/MyNav';
import MyFooter from "./Components/MyFooter";
import Welcome from "./Components/Welcome";
import 'bootstrap/dist/css/bootstrap.min.css';
/* import LatestRelease from "./Components/LatestRelease";/* 
/* import SingleBook from "./Components/SingleBook";*/
import BookList from "./Components/BookList";

function App() {
  return (
    <div className="App">
      <MyNav/>
      <Welcome/>
      <BookList/>      
      <MyFooter/>
    </div>
  );
}

export default App;
