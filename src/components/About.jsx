import React, { useState } from 'react'
import logo from "../images/ZEVI-GG-LogoDesogn -Option-2-Black 2 (2) 1.png"
import search from "../images/search.svg"
import "./about.scss"
import Angle from "../images/angle-right 1.svg"
import rating1 from "../images/Group 24.svg"
import rating2 from "../images/Group 25.svg"
import rating3 from "../images/Group 26.svg"
import rating4 from "../images/Group 27.svg"
import rating5 from "../images/Group 28.svg"
import img1 from "../images/Rectangle 10.png"
import img2 from "../images/Rectangle 10 (1).png"
import img3 from "../images/Rectangle 10 (2).png"
import img4 from "../images/Rectangle 10 (3).png"
import img5 from "../images/Rectangle 10 (4).png"
import img6 from "../images/Rectangle 10 (5).png"
import img7 from "../images/Rectangle 10 (6).png"
import img8 from "../images/Rectangle 10 (7).png"
import itemRate from "../images/Group 1 (1).svg"
import heart from "../images/Heart (1).svg";
import heart1 from "../images/Heart.svg"
import Card from './Card'
const obj2=[
  {
    id:1,
    image:img1,
    heading:"Round neck cotton Tee",
    oldPrice:"Rs. 599",
    newPrice:"Rs.549",
    isLiked: false,
  },
  {
    id:2,
    image:img2,
    heading:"High waist trousers",
    oldPrice:"Rs. 999",
    newPrice:"Rs.749",
    isLiked: false,
  },
  {
    id:3,
    image:img3,
    heading:"High neck pullover",
    oldPrice:"Rs. 899",
    newPrice:"Rs.849",
    isLiked: false,

  },
  {
    id:4,
    image:img4,
    heading:"satin jumpsuit",
    oldPrice:"Rs. 650",
    newPrice:"Rs.549",
    isLiked: false,
  },
  {
    id:5,
    image:img5,
    heading:"",
    oldPrice:"",
    newPrice:"",
    isLiked: false,
  },
  {
    id:6,
    image:img6,
    heading:"",
    oldPrice:"",
    newPrice:"", 
    isLiked: false,
  },
  {
    id:7,
    image:img7,
    heading:"",
    oldPrice:"",
    newPrice:"",
    isLiked: false,
  },
  {
    id:8,
    image:img8,
    heading:"",
    oldPrice:"",
    newPrice:"",
    isLiked: false,
  }
]


function About() {


  const [cardStates, setCardStates] = useState({});

  const updateCardState = (cardId, newState) => {
    setCardStates((prevStates) => ({
      ...prevStates,
      [cardId]: newState,
    }));
  };

  return (
    <>
    <div className='header'>
       <img className="logo" src={logo} alt="logo" />
      <div className='wrapper3'>
      <div className="search2">
      <input placeholder='Search' className='input2' type="text"  />
      <img className="icon" src={search} alt="icon" />
    </div>
    </div>
    </div>
    <div className='body'>
        <div className='leftBody'>
       <p className='res'>Search Results</p>
        <div className='mainHead1'>
            <p className='subHead1'>BRAND</p>
            <img src={Angle} alt="arrow" />
        </div>
        <div className="wrapper4">
        <div className='checkDiv'>
        <input  type="checkbox" name="mango" id="mango" />
          <label for="mango">Mango</label>
          </div>
          <div className='checkDiv'>
          <input  type="checkbox" name="H&M" id="H&M" />
          <label className='hm' for="H&M">H&M</label>
          </div>
          </div>
          <hr className='hr'/>
          <div className='mainHead1'>
            <p className='subHead2'>PRICE RANGE</p>
            <img src={Angle} alt="arrow" />
        </div>
        <div className="wrapper4">
        <div className='checkDiv'>
        <input  type="checkbox" name="mango" id="mango" />
          <label for="mango">Under 500</label>
          </div>
          <div className='checkDiv'>
          <input  type="checkbox" name="H&M" id="H&M" />
          <label className='hm' for="H&M">1000 To 3000</label>
          </div>
          </div>
          <hr className='hr'/>
          <div className='mainHead1'>
            <p className='subHead2'>RATNGS</p>
            <img src={Angle} alt="arrow" />
        </div>
        <div className="wrapper4">
        {/* <div className='checkDiv'> */}
         <img className='rating' src={rating1} alt="rating" />
         <img className='rating' src={rating2} alt="rating" />
         <img className='rating' src={rating3} alt="rating" />
         <img className='rating' src={rating4} alt="rating" />
         <img className='rating' src={rating5} alt="rating" />
         
          </div>
        </div>
        <div className='rightBody'>
           <div className="cart2">
           {
            obj2.map((item,index)=>(
            <Card item={item} key={index}/>
            ))
           }
           </div>
        </div>
    </div>
    </>
  )
}

export default About
