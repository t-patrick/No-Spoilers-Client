import styled from 'styled-components';

const StyledForumReplies = styled.div`
  // border: 2px solid red;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;

  .reply-modal {
    // border: 2px solid blue;
    text-align: right;
    display: flex;
    flex-direction: column;
    width: 10%;
  }

  .replies {
    width: 98%;
    margin-left: 20%;
    margin-right: 1%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .reply-summary {
    background-color: var(--chatbox-border);
    font-family: var(--main-font);
    color: var(--chatbox-wrd);
  }

  .reply-content {
    background-color: #dee2e7;
  }

  .report-container {
    display: flex;
    justify-content: center;
    width: 10%;
  }

  .report-btn {
    margin-top: 12px;
    padding: 3px 10px;
    border: 0.5px solid red;
    color: red;
    // font-size: 12px;
    /* width: 0px; */
  }

  .show-hide-btn {
    color: var(--sharp-purple);
    border: 0.5px solid var(--sharp-purple);
    margin-bottom: 12px;

  }

  .report-btn img {
    width: 15%;
    padding-left: 15px;
  }

  .replier-progress {
    padding: 8px 10px;
    border-radius: 10px;
    margin-left: 5px;
  }
  .replier-progress-ahead {
    color: white;
    background-color: darkred;
  }
  .replier-progress-same {
    color: blueviolet;
  }
  .replier-progress-behind {
    color: white;
    background-color: black;
  }
`;

export default StyledForumReplies;
