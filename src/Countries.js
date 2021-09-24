import React, {useState, useEffect}from 'react'
const url = 'https://restcountries.com/v2/continent/asia';

const Countries = () => {
    const [country, setCountry] = useState([]);
    
    const fetchData = async () => {
        const response = await fetch(url);
        const country = await response.json();
        setCountry(country);
        console.log(country);
       
    }
  
    useEffect(() => {
      fetchData();
     

    }, []);

  //const onClk =() => {
    //window.location.reload(false);
  //}
   

    return (
        <>
        <br></br><br></br><br></br>
        <div className="container">
       {country.map((country) => {
         const {numericCode, name, flags, capital,continent, region, population,borders} = country;
         return <article key={numericCode}>
       
       
        

<div className="header">EXP-ASIA<button onClick={fetchData} className="button">Show</button></div>
<div className="card">
  <div class="title">{name}</div>
  <div class="image"><img src={flags[1]} height="100%" width="100%"/></div>
  <p><b>Capital :</b>{capital}</p>
  <p><b>Region :</b>{continent}</p>
  <p><b>Sub-region :</b>{region} </p>
  <p><b>Population :</b>{population}</p>
  <p><b>Borders :</b>{` ${borders}`}</p>


  </div>
  

       </article>
       

       })}
</div>
      
       </>
    )
}

export default Countries
