import styled, { createGlobalStyle } from "styled-components";


/**
 * Hi Boys, let's keep global variables in here!
 * + '--' before a property makes it a variable
 * + use in app like: color: var(--color-red)
 * + Put @import statements (for fonts) in the App.css file, for reason I didn't have time to read
 * 

 */

const GlobalStyles = createGlobalStyle`

  html {
    --bg-color: #050214;
    --main-font: 'Poppins', sans-serif;
    --chatbox-color: #2D3748;
    --chatbox-border: #718096;
    --chatbox-wrd: #cbd5e0;
    --light-purple: #5d5fef;
    --chatlist-wrd: #c6cbd2;
    --score-font: 'Inter', sans-serif;
  }
`;

export default GlobalStyles;
