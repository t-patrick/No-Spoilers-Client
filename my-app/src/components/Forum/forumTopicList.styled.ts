import styled from "styled-components";
const StyledForumTopicList = styled.div`
  display: flex;
  font-family: var(--main-font);
  color: var(--chatlist-wrd);
  margin: 25px 80px;
  padding-bottom: 45px;

  .score {
    color: #6030d0;
    font-family: var(--score-font);
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

  .number {
    padding-top: 15px;
    padding-bottom: 15px;  
  }

  .text-container {
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
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .avatar {
    width: 50%;
  }

  .topic-content {
    flex: 8;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  .topic-content button {
    margin-left: 90%;
    margin-top: 16px;
    background-color: var(--chatbox-color);
    border: none;
    cursor: pointer;
    padding: 0;
  }
`;

export default StyledForumTopicList;