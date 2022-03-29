import React, { useState } from 'react';
import ChatList from '../ChatList/ChatList';
import StyledSidebar from './sidebar.styled';

function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  if (expanded) {
    return (
      <StyledSidebar expanded={expanded}>
        <div className="top">
          <h1>Chats</h1>
          <button onClick={() => setExpanded(!expanded)}>Expand</button>
        </div>
        <ChatList />
      </StyledSidebar>
    );
  }

  return (
    <StyledSidebar expanded={expanded}>
      <div className="top">
        <h1>Chats</h1>
        <button onClick={() => setExpanded(!expanded)}>Expand</button>
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
