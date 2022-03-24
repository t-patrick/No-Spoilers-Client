import styled from 'styled-components';

const StyledTopicBox = styled.div`
  display: flex;
  flex-direction: column;

  .topic-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .num-of-replies {
    margin-left: 16px;
    color: white;
  }

  .topic-main {
    display: flex;
  }

  .title-and-date {
    padding: 10px 15px;

    h3 {
      margin: 3px 0px 5px 0px;
    }
  }

  /* .top-box {
    display: flex;
    flex-direction: row;
  } */
`;

export default StyledTopicBox;
