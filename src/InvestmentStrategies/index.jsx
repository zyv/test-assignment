import React from 'react';

import api from '../api';
import Loader from '../Components/Loader';
import Strategies from './Strategies';
import Wrapper from './Wrapper';

export default class InvestmentStrategies extends React.Component {
  state = {
    error: null,
    isPosting: false,
    strategies: [],
  };

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    this.setState({ isPosting: true }, () => {
      api('asset-management/investment-strategies/')
        .then(strategies => this.setState({
          error: null,
          isPosting: false,
          strategies: strategies.results,
        }))
        .catch(() => this.setState({
          error: 'Something went wrong!',
          isPosting: false,
        }));
    });
  };

  renderContent = () =>  {
    if (this.state.isPosting) {
      return <Loader />;
    }

    if (this.state.error) {
      return <p>{this.state.error}</p>;
    }

    return <Strategies strategies={this.state.strategies} />;
  }

  render() {
    return <Wrapper>{this.renderContent()}</Wrapper>;
  }
}
