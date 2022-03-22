import styled from 'styled-components';

const StyledShow = styled.div`
  color: white;
  
  .show-view {
    display: flex;
    justify-content: space-around;
    margin-top: 2.5%;
    margin-bottom: 2.5%;
  }
  
  .button-container {
    text-align: center;
  }

  .button-container Button {
    color: white;
    font-family: var(--main-font);
    background-color: var(--navbar-color);
    padding: 8px;
    border-radius: 8px;
    margin-top: 16px;

  }

  .button-container Button: hover {
    border: 2px solid var(--sharp-purple);
    margin-top: 16px;
    padding: 6px;
    outline: none;
  }


`

export default StyledShow;