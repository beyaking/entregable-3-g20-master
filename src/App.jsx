import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";
import ErrorFetch from "./components/ErrorFetch";

function App() {
  const [location, setLocation] = useState();
  const [locationInput, setlocationInput] = useState();
  const [hasError, sethasError] = useState(false);

  useEffect(() => {
    /* 
    const randomLocation = Math.floor(Math.random() * 126) + 1;
    const URL = `https://rickandmortyapi.com/api/location/${randomLocation}`;
     */
    let URL;

    if (locationInput) {
      URL = `https://rickandmortyapi.com/api/location/${locationInput}`;
    } else {
      const randomLocation = Math.floor(Math.random() * 126) + 1;
      URL = `https://rickandmortyapi.com/api/location/${randomLocation}`;
    }

    axios
      .get(URL)
      .then((res) =>{
         setLocation(res.data)
         sethasError(false)
        })
      .catch(err => {
        sethasError(true)
        console.log(err)
      })

  }, [locationInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setlocationInput(e.target.inputSearch.value);
  };

  return (
    <div className="App">
      <div className="container"> 
      <div className="img-container">
      <img className="img-logo" src="tt2.png" alt="" />
      <img className="img-logo2" src="tt.png" alt="" />
      </div>
      
      
<div className="search-container">
<form onSubmit={handleSubmit}>
        <input className="search__input" id="inputSearch" type="text" />
        <button className="search-container__btn">Search</button>
      </form>
</div>
      
      {hasError ? (
        <ErrorFetch />
      ) : (
        <>
          <LocationInfo location={location} />
          <div className="residents-container">
            {location?.residents.map((url) => (
              <ResidentCard key={url} url={url} />
            ))}
          </div>
        </>
      )}
</div>
<footer className="footer__app">
  <ul className="footer__list">
    <li>
    <p>Author: Javier Mejia - Jeferson Vergara</p>
    </li>
    <li>
    <p>&copy; Copyright 2022
</p>
    </li>
  </ul>

 
</footer>

    </div>
    
  );

  
}

export default App;
