import styled from 'styled-components';

const StyledForumReplies = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5px;

  .reply-modal {
    display: flex;
    justify-content: flex-end;
    margin-top: -45px;

    // border: 1px solid blue;

    // flex-direction: column;
    // width: 10%;
  }

  .replies {
    margin-left: 15%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .reply-summary {
    background-color: var(--chatbox-border);
    font-family: var(--main-font);
    color: var(--chatbox-wrd);
    border-radius: 3px 3px 0 0;
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
    // padding: 3px 10px;
    // border: 0.5px solid red;
    color: red;
  }

  .show-hide-btn {
    // color: var(--sharp-purple);
    padding-top: 5px;
    padding-bottom: 5px;
    border: none;
  }

  .reply-btn {
    border: none;
  }

  .reply-btn img {
    width: 10px;
  }

  .report-btn img {
    width: 10px;
  }

  .reply-btn:hover {
    border: none;
  }

  .show-hide-btn:hover {
    border: none;
  }
`;

export default StyledForumReplies;
