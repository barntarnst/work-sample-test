import styled from 'styled-components';
import media from './media';

/* eslint-disable */
export const Container = styled.div`

/*
* default desktop
*/
  padding-left: 50px;
  padding-right: 40px;
  padding-top: 30px;
  max-width: 800px;

  & > .blog-count{
    position: absolute;
    font-size: 1.5rem;
    font-weight: 600;
    right: 0;
    padding-right:30px
  }

  & > .blog-hero{
    font-size:3rem;
    clear: both;
    &::before{
    content: " ";
    display: block;
    position: relative;
    margin-top:3vh;
    }
  }
/*
* Responsive Tablets
*/
  ${media.tablet`
    padding-left: 0;
    padding-right: 0;
    margin-left: 30px;
    margin-right: 30px;

 & > .blog-hero{
    &>h1{
    font-size:30px;
  }
  }
    & > .post-container{
      font-size:14px;
      margin-left: 0;
     margin-bottom:0;
     & div.post-center > div.post-title > h3{
       font-size:16px;
     }
     & div.post-left{
      margin-left: 0px;
     }
    }
  `}

/*
* Responsive Mobiles
*/

  ${media.phone`
  padding-right: 32px;
  padding-left: 18px;

  &> div.blog-count{
  padding-right: 12px;
  }

  & > .blog-hero{
    padding-top: 3px;
    &>h1{
    font-size:30px;
  }
  }
    & > .post-container{
      font-size:14px;
     & div.post-center > div.post-title > h3{
       font-size:16px;
     }
     & div.post-left{
      margin-left: 0px;
     }
    }

  `}
`;
