import React, { Fragment } from 'react';
import { Blogs } from '../containers';
import GlobalStyle from '../theme/globalStyles';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <section>
      <Blogs />
    </section>
  </Fragment>
);

export default App;
