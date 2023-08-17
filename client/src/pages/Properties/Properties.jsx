import React from 'react'
import './Properties.css';
import SearchBar from "../../components/SearchBar/SearchBar"

const Properties = () => {
  return (
    <div className='wrapper'>
      <div className="flexCenter paddings innerWidth properties-container">
        <SearchBar/>
      </div>
      
    </div>
  )
}

export default Properties;
