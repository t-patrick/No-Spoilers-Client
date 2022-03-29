import styled from 'styled-components';

const StyledSidebar = styled.nav`
  background-color: var(--navbar-color);
  width: 10%;
  opacity: 0.7;
  min-height: 100%;
  // display: flex;
  // flex-direction: column;

  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;

`;

export default StyledSidebar;