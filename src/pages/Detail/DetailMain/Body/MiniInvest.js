import React from 'react';
import styled from 'styled-components';

const MiniInvest = props => {
  return (
    <Wrapper>
      <Container>
        <Button>투자하기 &gt;</Button>
      </Container>
    </Wrapper>
  );
};

export default MiniInvest;

const Wrapper = styled.div`
  position: fixed;
  top: 840px;
  width: 100%;
  max-width: 730px;
  display: none;

  @media only screen and (max-width: 1079px) {
    display: block;
  } ;
`;

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 34rem;
  height: 6rem;
  margin: 0 auto;
  background-color: ${props => props.theme.purple};
  border-radius: 0.3rem;
  color: #fff;
  font-size: 1.6rem;
  letter-spacing: -0.04rem;
`;
