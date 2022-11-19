import React,{useState} from 'react'
import axios from "axios";
import "./style.css"
import ShowTemp from './ShowTemp';

function App() {
  const[city,setCity]=useState("")
  const[data,setData]=useState(
    {
      description:"",
      temp:0,
      temp_max:0,
      temp_min:0,
      humidity:0,
      sunrise:0,
      sunset:"",
    })
  const handleClick=()=>{
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c412e32f8374f6a87ce341d095a159f6`)
    .then((response)=>{
      setData(
        {
          description:response.data.weather[0].description,
         temp: response.data.main.temp,
temp_max: response.data.main.temp_max,
temp_min: response.data.main.temp_min,
humidity: response.data.main.humidity,
sunrise: response.data.sys.sunrise,
sunset: response.data.sys.sunset,
country: response.data.sys.country,
        }
      )
    })
  }
  return (
    <>
      <div className='container text-center heading my-5'>
        <h1 className='my-5'>Weather app using React js</h1>
        <input type="text" className='form-control'placeholder='Enter City or State Name' value={city}  onChange={(e)=>{
          setCity(e.target.value)}}/>
        <button className='btn btn-primary my-3' type='submit' onClick={handleClick}> Get Detail</button>

      </div>
      <ShowTemp text={data}/>

    </>
  )
}

export default App

