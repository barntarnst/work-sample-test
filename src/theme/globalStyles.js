import { createGlobalStyle } from 'styled-components';
import { backgroundColor, textColor } from './variables';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,300,600');

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
  background-color: ${backgroundColor};
  color: ${textColor};
}
`;
