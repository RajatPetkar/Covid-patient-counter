import React from "react";
import { useEffect, useState } from "react";
import "./Covid.css";

const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    setData(actualData.statewise[0]);
  };
  useEffect(() => {
    getCovidData();
  }, []);
  
   

  return (
    <>
      <h1 align="center">🔴 LIVE</h1>
      <h1 align="center" className="xyz">
        COVID-19 TRACKER
      </h1>
      <div className="covidData__country__info">
        <p>Country Name : INDIA </p>
        <p>Confirm case : {data.confirmed}</p>
        <p>Deaths : {data.deaths}</p>
        <p>Recovered : {data.recovered}</p>
        <p>Active : {data.active}</p>
        <p>Delta Confirm : {data.deltaconfirmed}</p>
        <p>Delta Deadth : {data.deltadeaths}</p>
        <p>Delta Recovered : {data.deltarecovered}</p>
      </div>



    </>
  );
};

export default Covid;

// CHALLANGE 2
// const getCurrentDate = () =>{
//   let Dates = new Date();
//   return `Current Date is ${Dates.getMonth() + 1}/${Dates.getDate()}/${Dates.getFullYear()}`
// }
// const getCurrentTime = () =>{
//   let Dates = new Date();
//   return `Current Time is ${Dates.getHours()}:${Dates.getMinutes()}:${Dates.getSeconds()}`
// }

{/* <h1>My Name is Rajat</h1>
<p>{getCurrentDate()}</p>
<p>{getCurrentTime()}</p> */}

// CHALLANGE 3

// const css = {};

// let greeting = '';
// let CurrentDate = new Date().getHours();
// if(CurrentDate >1 && CurrentDate <12){
//   greeting = 'Good Morning';
//   css.color = 'green'
// }
// if(CurrentDate >=12 && CurrentDate <19){
//   greeting = 'Good Afternoon';
//   css.color= 'orange'
// }
// if(CurrentDate >=19 && CurrentDate <=23){
//   greeting = 'Good Night';
// }

// <div className="greeting">
// <p id="text">Hello sir, <span style = {css}>{greeting}</span></p>
// </div>