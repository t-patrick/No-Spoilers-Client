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
  border-radius: 20px;
  width: 98%;
  margin-right: 1%;
  display: hidden;
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
  border: 0.5px solid red;
  color: red;
  // width: 10%;
}

.report-btn img {
  width: 15%;
  padding-left: 15px;
}

`

export default StyledForumReplies;