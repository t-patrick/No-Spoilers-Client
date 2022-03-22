import React from "react";
import StyledBackInTime from "./BackInTime.styled";
import downArrow from './image/down.png';



function Backintime() {

  

  return (
    <StyledBackInTime>
      <div className="dropdown">
        
        <button className="dropbtn"><span>BACK IN TIME</span> <img src={downArrow}/></button>

        <div className="dropdown-content">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">IMDB</a>
          <a href="#">Wikipedia</a>
          <form>
            <div>
              <input type='text' placeholder='Enter your URL here...'/>
            </div>
            <div>
              <button>Add</button>
            </div>
          </form>
        </div>
      </div>
    </StyledBackInTime>
  );
}

export default Backintime;
