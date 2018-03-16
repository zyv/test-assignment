import PropTypes from 'prop-types';
import React from 'react';

import Strategy from './Strategy';
import Wrapper from './Wrapper';

const Strategies = ({ strategies }) => {
  const renderStrategy = strategy => <Strategy {...strategy} key={strategy.id} />;

  return <Wrapper>{strategies.map(renderStrategy)}</Wrapper>;
};

Strategies.propTypes = {
  strategies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default Strategies;
