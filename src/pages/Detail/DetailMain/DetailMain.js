import React from 'react';
import Body from './Body/Body';
import Invest from './Invest/Invest';
import styled from 'styled-components';

function DetailMain(props) {
  return (
    <Section>
      <Body investment={props.investment} />
      <Invest investment={props.investment} paramID={props.paramID} />
    </Section>
  );
}

export default DetailMain;

const Section = styled.section`
  position: relative;
  display: flex;
  max-width: 1110px;
  margin: 0 auto;
`;
