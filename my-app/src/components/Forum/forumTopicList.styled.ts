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
    flex: 1;
  }

  .up {
    width: 0; 
    height: 0; 
    padding: 0;

    border-left: 25px solid var(--bg-color);
    border-right: 25px solid var(--bg-color);
    border-bottom: 25px solid #5d5fef;
    cursor: pointer;
  }

  .down {
    width: 0; 
    height: 0; 
    padding: 0;
    border-left: 25px solid var(--bg-color);
    border-right: 25px solid var(--bg-color);
    border-top: 25px solid #5d5fef;
    cursor: pointer;
  }

  .text-container {
    border: 1px solid green;
    width: 100%;
    flex: 9;
  }

  .topic-header {
    background-color: #4A5568;
    padding: 15px 15px 15px ;
  }
  
  .bottom-half {
    display: flex;
    background-color: #2d3748;
  }

  .user-info {
    border: 2px solid blue;
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .avatar {
    width: 50%;
    border: 2px solid yellow;
  }

  .topic-content {
    flex: 8;
    padding: 20px;
  }

`;

export default StyledForumTopicList;