import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LOANINFO_DATA from './LoanInfoData';

const MainLoanInfo = () => {
  return (
    <Container>
      <Date>2021.10.01 기준</Date>
      <LoanAmount>
        <LoanAmountText>누적 대출액</LoanAmountText>
        <LoanAmountNum>3,824억 1,520만원</LoanAmountNum>
      </LoanAmount>
      <Table>
        {LOANINFO_DATA.map(data => {
          return (
            <Item>
              <Label>{data.title}</Label>
              <Value>{data.value}</Value>
            </Item>
          );
        })}
      </Table>
      <More>
        <InfoLink to="#">사업공시 보러가기</InfoLink>
      </More>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  padding: 80px 0;
  max-width: 1080px;
  margin: 0 auto;
`;

const Date = styled.p`
  font-size: 1.6rem;
  line-height: 2.4em;
  color: ${props => props.theme.black};
  text-align: center;
`;

const LoanAmount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 30px;
`;

const LoanAmountText = styled.span`
  font-size: 1.8em;
  letter-spacing: -0.4px;
  color: ${props => props.theme.black};
  text-align: center;
  margin-right: 20px;
  vertical-align: middle;
`;

const LoanAmountNum = styled.span`
  font-size: 4em;
  line-height: 1.4em;
  text-align: center;
`;

const Table = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin: 50px 8.3333% 20px;
  padding: 30px 0;
  border: 1px solid #e6e6e6;
  height: 120px;
`;

const Item = styled.dl`
  display: flex;
  flex: 1 1 25%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #f0f0f0;
  border-right: 1px solid #f0f0f0;
  text-align: center;
`;

const Label = styled.dt`
  font-size: 1.4em;
  letter-spacing: -0.3px;
  color: ${props => props.theme.gray};
`;

const Value = styled.dd`
  margin-top: 1rem;
  font-size: 1.8rem;
`;

const More = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

const InfoLink = styled(Link)`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.4em;
  letter-spacing: -1px;
  color: #3282f0;
`;

export default MainLoanInfo;
