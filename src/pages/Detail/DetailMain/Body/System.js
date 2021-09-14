import React from 'react';
import styled from 'styled-components';

function System() {
  return (
    <Section>
      <H1>채권 관리 시스템</H1>
      <div>
        <NumberWrapper>
          <P>
            <Number>01</Number>
            법적절차(경매)를 통해 토지 및 건물의 근저당권자로서 배당을 받습니다.
          </P>
          <P>
            <Number>02</Number>본 채권을 원리금 전액 회수를 목표로 타 기관에
            매각하여 회수 합니다.
          </P>
        </NumberWrapper>
        <div>
          <P>
            1) 신속하고 철저한 추심 및 회수를 위해 대출기간이 경과되거나 이자
            납입을 2회 이상 지체 시 적절한 절차에 의하여 자체 추심을 진행합니다.
          </P>
          <P>
            2) 위 방법 중 원리금 보존 및 회수기간을 고려하여 투자자에게 가장
            부합하는 방법으로 채권을 회수 할 예정입니다. 매각 대금은 해당 채권의
            투자금에 비례하여 지급합니다. 단, 원리금 회수 과정에서 발생하는 각종
            비용은 원칙적으로 채무자 부담이나 회수되는 금액에 따라 일부 차감될
            수 있습니다.
          </P>
        </div>
      </div>
    </Section>
  );
}

export default System;

const Section = styled.section`
  margin-bottom: 12rem;
  color: ${props => props.theme.black};
`;

const H1 = styled.h1`
  margin-bottom: 3rem;
  font-size: 2.2rem;
  letter-spacing: -0.05rem;
  line-height: 1.27;
`;

const NumberWrapper = styled.div`
  margin-bottom: 3rem;
`;

const Number = styled.span`
  display: inline-block;
  width: 3.1rem;
  padding: 0.3rem 0 0.2rem 0;
  margin-right: 1rem;
  border-radius: 1rem;
  border: 1px solid #3b5bdb;
  color: #3b5bdb;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.2rem;
  letter-spacing: -0.03rem;
`;

const P = styled.p`
  margin-bottom: 0.7rem;
  font-size: 1.4rem;
  line-height: 2.4rem;
  letter-spacing: -0.06rem;
`;
