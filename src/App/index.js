import React, { Fragment } from 'react';

import { Blogs } from '../containers';
import GlobalStyle from '../globalStyles';

// import { Header } from '../components';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <section>
      <Blogs />
    </section>
  </Fragment>
);

export default App;
