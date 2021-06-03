import React, { useEffect, useState } from 'react';
import './styles/style.css';
//import React, { useState } from 'react';

const Tempapp = () => {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("Uttar Pradesh");


  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e595a9a22e9989b093b252c280bac8b4`;
      const response = await fetch(url);
      const res = await response.json();
      setCity(res.main);

    }
    fetchApi();

  })

  return (
    <>
      <div className="container">
        <div className="box">
          <div className="inputField">
            <input
              type="search"
              defaultValue="Uttar Pradesh"
              onChange={(event) => {
                setSearch(event.target.value)
              }} >
            </input>
          </div>
          <div className="total">
            <div className="display">
              <i id="font" className="fa fa-street-view" aria-hidden="true"></i> {search}
            </div>
            {
              !city ? (<p className="error">No City/State Found</p>) : (
                <div>
                  <h4 className="temp">{city.temp}°Cel</h4>
                  <h5>Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel</h5>
                </div>
              )}
          </div>

          <div className="wave one"></div>
          <div className="wave two"></div>
          <div className="wave three"></div>
        </div>
      </div>
    </>
  )
}

export default Tempapp;