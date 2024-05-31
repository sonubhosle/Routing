import React, { useState } from 'react'
import Slider from '../../Components/Slider/Slider'

const Home = () => {

  const [name,setName] = useState();
  // const [surname,setusename] = useState();
  // const [email,setEmail] = useState();
  // const [number,setNumber] = useState();


  const handleChange = (e) =>{
     const {name,value} = e.target;
     if(name ==='name'){
      setName(value)
     }
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
  const formData ={
    name:name
  }
  console.log(formData)
  }


  return (
    <div>
      <Slider />
      <br />
      <br /><br /><br />
      <form onSubmit={handleSubmit}>
      <input type="text" name='name' value={name} onChange={handleChange}/>
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Home