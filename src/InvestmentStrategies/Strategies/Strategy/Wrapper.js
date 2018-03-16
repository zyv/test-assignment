import styled from 'styled-components';

export default styled.li`
  background-color: #FAFAFA;
  border-radius: 2px;
  box-shadow: 0 1px 10px 0 #B0B0B0;
  list-style: none;
  margin: 30px;
  padding: 20px;
  transition: box-shadow .3s ease;

  &:hover {
    box-shadow: 0 3px 10px 1px #B0B0B0;
  }

  & span.risk-class {
    color: #F2B861;
  }

  & span.time-weighted-return {
    color: #a3d56f;

    & img {
      max-height: 15px;
      max-width: 15px;
    }
  }

  & div.name {
    color: #019EE1;
    font-size: 1.2em;
  }

  & div.minimum-investment {
    font-size: 1.2em;
    margin: 15px 0;
  }

  & p {
    margin: 0;
  }

  & div.asset-manager {
    color: #666;
  }

  & a.more-details {
    color: #019EE1;
    cursor: pointer;
  }
`;
