import React from 'react';
import InvestPoint from './InvestPoint/InvestPoint';
import Summary from './Summary';
import Safety from './Safety/Safety';
import Map from './Map/Map';
import Borrower from './Borrower';
import Professional from './Professional';
import CheckList from './CheckList';
import System from './System';
import styled from 'styled-components';
import MiniInvest from './MiniInvest';

function Body(props) {
  return (
    <BodyDetail>
      <InvestPoint investment={props.investment} />
      <Summary investment={props.investment} />
      <Safety investment={props.investment} />
      <Map investment={props.investment} />
      <Borrower investment={props.investment} />
      <Professional />
      <CheckList />
      <System />
      <MiniInvest />
    </BodyDetail>
  );
}

export default Body;

const BodyDetail = styled.div`
  flex: 7 7 75%;
  margin-right: 7rem;

  @media only screen and (max-width: 1079px) {
    max-width: 730px;
    margin: 0 auto;
  }
`;
