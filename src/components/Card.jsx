import React, { useState } from 'react'
import "./about.scss"
import itemRate from "../images/Group 1 (1).svg"
import heart from "../images/Heart (1).svg";
import heart1 from "../images/Heart.svg"

function Card({item}) {
    // console.log(item)
    
    const [isHeartClicked, setIsHeartClicked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleHeartClick = () => {
      setIsHeartClicked((prevIsHeartClicked) => !prevIsHeartClicked);
    };
  return (
    <>
      <div className="cartItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
              <img src={item.image} alt="item1" />
             
              {/* <img className='hearticon' src={isHeartClicked?'heart':'heart1'} alt="icon"/> */}
              <img
                  className='hearticon'
                  src={isHeartClicked? heart1 :heart}
                  alt="icon"
                  onClick={handleHeartClick}
                />
              <p className='cartHead'>{item.heading}</p>
              <div className='price'>
              <p className='oldPrice'>{item.oldPrice}</p>
              <p className='newPrice'>{item.newPrice}</p>
              </div>
              <img className='cartRate' src={itemRate} alt="itemRating" />(210)
              {isHovered ? <p className="hoverText">View Product</p>:''}
             </div> 
    </>
  )
}

export default Card
