import React from 'react';
import styled from 'styled-components';

const StatusBar = props => {
  const { current, target } = props;
  const rate = (current / target) * 100;

  return (
    <StatusWrapper>
      <Statusbar style={{ left: `${parseInt(rate)}%` }} />
      <PercentWrapper>
        <Percent style={{ left: `${parseInt(rate)}%` }}>
          {parseInt(rate)}%
        </Percent>
      </PercentWrapper>
    </StatusWrapper>
  );
};

export default StatusBar;

const StatusWrapper = styled.div`
  position: relative;
  height: 3px;
  background-image: linear-gradient(to right, #a56ceb, #6c3ad3);
`;

const Statusbar = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #e6e6e6;
`;

const PercentWrapper = styled.div`
  position: relative;
  max-width: 97.1%;
`;

const Percent = styled.span`
  position: absolute;
  top: -12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3%;
  height: 26px;
  background-color: #6c3ad3;
  border-radius: 15px;
  color: #fff;
  font-size: ${props => props.theme.smallFont};
  z-index: 100;
`;
