import styled from 'styled-components';

const StyledTopicBox = styled.div`
  display: flex;

  .topic-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .reply {
    // border: 2px solid red; 
    margin-top: 10px; 
  }
  .reply Button {
    // border: 2px solid green;
    margin-top: 0;
  }

  .num-of-replies {
    // border: 2px solid blue;
    margin-left: 16px;
    color: white;
  }

  .reply-box Dialog DialogTitle{
    font-size: 1000px;
    min-width: 1000px;
  }
`;

export default StyledTopicBox;

