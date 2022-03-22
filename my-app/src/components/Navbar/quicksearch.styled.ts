import styled from 'styled-components';

const StyledQuickSearch = styled.div`
  position: relative;
  padding: 10px;
  .option {
    display: flex;
    gap: 40px;
    width: 95%;
    justify-content: space-between;
    padding-left: 0px;
    padding-right: 5px;
    margin: 10px;
    margin-right: 10px;
    font-size: 18px;
    font-family: var(--main-font);
    align-items: center;
  }

  h1 {
    font-family: var(--main-font);
  }

  .info {
    min-width: 120px;
    max-width: 120px;
  }

  .button {
    background-color: '#64748b';
    color: 'white';
    border: 0px;
    border-radius: 10px;
    padding: 20px;
    font-family: var(--main-font);
    font-weight: 700;
    max-width: 120px;
    min-width: 120px;
  }

  .button-added {
    background-color: lightgreen;
    color: 'white';
    border: 0px;
    border-radius: 10px;
    padding: 20px;
    font-family: var(--main-font);
    font-size: 12px;
    font-weight: 700;
    max-width: 120px;
    min-width: 120px;
    justify-self: flex-end;
  }

  .img-container {
    min-height: 150px;
    max-height: 150px;
    max-width: 100px;
    min-width: 100px;
    img {
      border-radius: 10%;

      min-height: 100%;
      max-height: 100%;
      max-width: 100%;
      min-width: 100%;
    }
  }
`;

export default StyledQuickSearch;
