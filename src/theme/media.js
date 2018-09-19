import { css } from 'styled-components';

const sizes = {
  phone: 444,
  tablet: 760,
  desktop: 1000,
  largeDesktop: 1200,
};

const media = Object.keys(sizes).reduce((finalMedia, size) => ({
    ...finalMedia,
    [size](...args) {
      return css`
        @media(max-width: ${sizes[size]}px) {
          ${css(...args)}
        }
      `;
    },
  }), {});

export default media;

/* function phone(...args) {
  return css`
  @media (max-width: ${sizes[phone]}px) {
    ${css(...args)}
  }
  `;
} */
