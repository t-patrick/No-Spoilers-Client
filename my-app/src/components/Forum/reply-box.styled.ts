import styled from 'styled-components';

const StyledReplyBox = styled.div`
  border-radius: 10px;

  .replier-bar {
    display: flex;
    align-items: center;
  }
  .replier-progress {
    padding: 8px 10px;
    border-radius: 10px;
    margin-left: 5px;
  }
  .replier-progress-ahead {
    color: white;
    background-color: darkred;
    height: 18px;
  }
  .replier-progress-same {
    margin-left: -8px;
    color: white;
  }
  .replier-progress-behind {
    color: white;
    background-color: black;
  }
`;

export default StyledReplyBox;
