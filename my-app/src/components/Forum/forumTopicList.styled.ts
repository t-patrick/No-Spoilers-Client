import styled from "styled-components";
const StyledForumTopicList = styled.div`
  display: flex;
  font-family: var(--main-font);
  color: var(--chatlist-wrd);
  margin: 25px 80px;



  .score {
    border: 1px solid red;
    color: #6030d0;
    font-family: var(--score-font);
  }

  .up {
    background-color: 
    // width: 0;
    // height: 0;
    // border-left: 50px solid #5d5fef;
    // border-right: 50px solid #5d5fef;
    // border-bottom: 100px solid #5d5fef;
  }

  .text-container {
    border: 1px solid green;
    width: 100%;
  }

  .topic-header {
    background-color: #4A5568;
  }
  
  .bottom-half {
    display: flex;
    background-color: #2d3748;
  }

  .user-info {
    border: 2px solid blue;
  }

`;

export default StyledForumTopicList;