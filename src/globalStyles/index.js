import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
};

* {
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
};

body {
  height: 100%;
  width: 100%;  
  background-color: rgb(225, 58, 58);
  color: rgb(255, 255, 255);
}
`;

// Imported in index.html
// google fonts
// @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
