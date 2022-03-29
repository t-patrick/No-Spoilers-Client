import styled from 'styled-components';

const StyledSidebar = styled.nav<Props>`
  background-color: var(--navbar-color);
  width: ${(p) => (p.expanded ? '20%' : '6%')};
  opacity: ${(p) => (p.expanded ? '1' : '0.8')};
  min-height: 100%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  transition: width 0.4s ease-in-out, opacity 0.4s ease-in-out;

  h1 {
    margin-top: 20px;
  }

  .top {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 15px;

    button {
      height: 50%;
    }
  }
`;

export default StyledSidebar;

interface Props {
  expanded: boolean;
}
