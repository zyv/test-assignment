import PropTypes from 'prop-types';
import React from 'react';

import api from '../../../api';
import Loader from '../../../Components/Loader';
import Wrapper from './Wrapper';

export default class Strategy extends React.Component {
  static propTypes = {
    asset_manager: PropTypes.shape({
      active_since: PropTypes.number.isRequired,
      company_name: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    minimum_investment: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    risk_class: PropTypes.number.isRequired,
  };

  state = {
    error: null,
    isPosting: false,
    time_weighted_return: null,
  };

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    this.setState({ isPosting: true }, () => {
      api(`asset-management/investment-strategies/${this.props.id}/performance`)
        .then(({ time_weighted_return }) => this.setState({
          time_weighted_return,
          error: null,
          isPosting: false,
        }))
        .catch(() => this.setState({
          error: 'Something went wrong!',
          isPosting: false,
        }));
    });
  };

  renderTimeWeightedReturn = () => {
    if (this.state.isPosting) {
      return (
        <span className="time-weighted-return">
          <Loader />
        </span>
      );
    }

    if (this.state.error) {
      return <span>{this.state.error}</span>;
    }

    if (!this.state.time_weighted_return) {
      return <span>No time weighted return given</span>;
    }

    return (
      <span className="time-weighted-return">
        Time weighted return of {this.state.time_weighted_return}%
      </span>
    );
  };

  render() {
    return (
      <Wrapper>
        <div>
          <span className="risk-class">
            Risk class of {this.props.risk_class}
          </span>
          {' | '}
          {this.renderTimeWeightedReturn()}
        </div>
        <div className="name">{this.props.name}</div>
        <div className="asset-manager">
          Managed by {this.props.asset_manager.company_name} ({this.props.asset_manager.active_since})
        </div>
        <div className="minimum-investment">
          Starts at {this.props.minimum_investment.toLocaleString('en-EN', { currency: 'EUR', style: 'currency' })}
        </div>
        <p>{this.props.description}</p>
      </Wrapper>
    );
  }
}
