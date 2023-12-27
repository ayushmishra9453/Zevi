import React, { useState } from 'react'
import './home.scss'
import logo from "../images/ZEVI-GG-LogoDesogn -Option-2-Black 2 (2) 1.png"
import search from "../images/search.svg"
import pic1 from "../images/unsplash_0FHNXqyqgg4.png"
import pic2 from "../images/unsplash_0FHNXqyqgg4 (1).png"
import pic3 from "../images/unsplash_0FHNXqyqgg4 (3).png"
import pic4 from "../images/unsplash_0FHNXqyqgg4 (3).png"
import pic5 from "../images/unsplash_0FHNXqyqgg4 (4).png"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { fetchSuggestions } from './api'



const obj=[
  {
    pic:pic1,
    des:"Shirt with puffed sleeves"
  },
  {
    pic:pic2,
    des:"Linen jumpsuit"
  },
  {
    pic:pic3,
    des:"White formal suit"
  },
  {
    pic:pic4,
    des:"Pattern dresses"
  },
  {
    pic:pic5,
    des:"Leather shirt dress"
  }
]
function Home() {
  const [state, setState]=useState(false)
  const handleClick=()=>{
    setState(!state)
  }

  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate('/about'); 
    }
  };



const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);

    // Fetch suggestions based on the input value
    const result = await fetchSuggestions(inputValue);
    setSuggestions(result);
  };



  return (
    
    <div className="home">
      <img className="logo" src={logo} alt="logo" />
      <div className='wrapper'>
      <div className="search">
       
      <input placeholder='Search'
       onClick={handleClick} 
       className='input' 
       type="text" 
        onKeyDown={handleKeyPress} 
        value={query}
        onChange={handleInputChange}
        />
      <img  src={search} alt="icon" />
    </div>
    </div>
    <div className="wrapper2" 
    
    style={state ? {opacity:1}:{opacity:0}}
    
    >
    <div className='onSearch'>
     <p className='heading'>Latest Trends</p>
    <div className='allCart'>
     {
      obj.map((item)=>{
       return <div className='cart1'>
        <img className='img' src={item.pic} alt="" />
        <p className='desc'>{item.des}</p>
      </div>
})
     }
      </div>
  
      <h6 className='heading2'>Popular suggestions</h6>
   

   {suggestions.length > 0 && (
        <div>
          {suggestions.map((item) => (
            <p className='para1' key={item.id}>{item.name}</p>
          ))}
         </div>
      )}
  
  </div>  
   </div>
   </div>

  )
}

export default Home
