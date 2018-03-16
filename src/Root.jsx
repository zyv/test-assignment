import React from 'react';
import { injectGlobal } from 'styled-components';

import InvestmentStrategies from './InvestmentStrategies';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-family: sans-serif;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
  }

  div#root {
    margin: 0 auto;
    max-width: 1200px;
  }
`;

export default () => <InvestmentStrategies />;
