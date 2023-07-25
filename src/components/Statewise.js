import React, { useEffect, useState } from "react";

const Statewise = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    setData(actualData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <h1 align='center' >INDIA COVID-19 DASHBOARD</h1>
      <table class="table p-5">
        <thead>
          <tr>
              <th scope="col">State</th>
              <th scope="col">Confirmed</th>
              <th scope="col">recovered</th>
              <th scope="col">deadths</th>
              <th scope="col">active</th>
              <th scope="col">updated</th>
              <th>Deltaconfirmed</th>
              <th>DeltaRecovered</th>
          </tr>
        </thead>
        <tbody>
        {
                data.map((cur, i) => {
                return (
                  <tr key={i}>
                    <td>{cur.state}</td>
                    <td>{cur.confirmed}</td>
                    <td>{cur.recovered}</td>
                    <td>{cur.deaths}</td>
                    <td>{cur.active}</td>
                    <td>{cur.lastupdatedtime}</td>
                    <td>{cur.deltaconfirmed}</td>
                    <td>{cur.deltarecovered}</td>
                  </tr>
                );
              })
              }
        </tbody>
      </table>
    </>
  );
};

export default Statewise;
