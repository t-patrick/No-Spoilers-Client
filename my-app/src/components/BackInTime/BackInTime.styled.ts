import styled from "styled-components";

const StyledBackInTime = styled.div`

// border: 2px solid red;
width: 20%;


.dropbtn {
  background: linear-gradient(to right, #363839, #3b3d3f);
  width: 100%;
  color: white;
  padding: 16px;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
}


.dropdown img {
  width: 5%;
  padding-left: 60%;
}

.dropdown-content {
  display: none;
  overflow: scroll;
  max-height: 440px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  margin-top: 20px;
}

.dropdown-content a {
  width: 100%;
  color: white;
  background-color: #4b4e50;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  outline-style: solid; 
  margin: 2px;
}

.dropdown-content a:hover {background-color: red}

.dropdown:hover .dropdown-content {
  display: block;
}

// .dropdown:hover .dropbtn {
//   background-color: red;
// }
`;

export default StyledBackInTime;
