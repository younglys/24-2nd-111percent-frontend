import React, { useState } from 'react';
import styled from 'styled-components';

function Deposit({ deposit, accountNumber }) {
  const [inputValue, setInputValue] = useState(0);
  const handleInputValue = num => {
    setInputValue(inputValue + num);
    if (inputValue >= deposit) {
      setInputValue(deposit);
    }
  };

  const handleInputDeposit = () => {
    setInputValue(deposit);
  };

  const handleInput = e => {
    setInputValue(e.target.value);
    if (inputValue >= deposit) {
      setInputValue(deposit);
    }
  };

  return (
    <DepositContainer>
      <DepositBox>
        <Box className="depositBox">
          <Title>예치금</Title>
          <AccountNumber>{accountNumber}</AccountNumber>
          <MyMoney>{deposit.toLocaleString('en')}원</MyMoney>
        </Box>
        <Box>
          <Title>예치금 출금</Title>
          <div className="dt">
            <Available>출금 가능 금액 </Available>
            <Amount>{deposit.toLocaleString('en')}원</Amount>
          </div>
          <Available>받을 계좌</Available>
          <Amount>{accountNumber}</Amount>
          <AmountTabContainer>
            <AmountTab onClick={handleInputDeposit}>전체</AmountTab>
            <AmountTab onClick={() => handleInputValue(1000000)}>
              +100만원
            </AmountTab>
            <AmountTab onClick={() => handleInputValue(100000)}>
              +10만원
            </AmountTab>
            <WithdrawInput type="text">
              <input
                name="qwe"
                placeholder="0원"
                value={inputValue.toLocaleString('en') + '원'}
                onChange={handleInput}
              />
            </WithdrawInput>
            <WithdrawBnt>출금하기</WithdrawBnt>
          </AmountTabContainer>
        </Box>
      </DepositBox>
      <Box>
        <Title>거래내역</Title>
        <Tab>
          <TabList>
            <List>전체</List>
            <List>입금</List>
            <List>지급</List>
            <List>출금</List>
            <List>투자</List>
          </TabList>
          <div>
            <span class="totalInvestment">투자합계</span>
            <span class="won">원</span>
          </div>
        </Tab>
        <TransactionHistoryBox>
          <Date>날짜</Date>
          <Division>구분</Division>
          <TransactionHistory>거래내역</TransactionHistory>
          <TransactionAmount>거래금액</TransactionAmount>
          <BalanceAfterTransaction>거래 후 금액</BalanceAfterTransaction>
        </TransactionHistoryBox>
      </Box>
    </DepositContainer>
  );
}

const DepositContainer = styled.div`
  margin: 0 auto;
  max-width: 91.5rem;
`;

const Box = styled.div`
  padding: 2rem;
  width: 100%;
  background-color: white;
  box-shadow: 0 0.1rem 0.3rem 0 #d2d2d2;

  .dt {
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;

const DepositBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  .depositBox {
    margin-right: 1.5rem;
  }
`;

const Title = styled.div`
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;

const AccountNumber = styled.div`
  color: #8a8a8a;
  font-size: 1.4rem;
  text-decoration: underline;
`;

const MyMoney = styled.div`
  margin-top: 13rem;
  font-size: 2.4rem;
  text-align: right;
`;

const Available = styled.span`
  margin-right: 1rem;
  font-size: 1.2rem;
  color: #8a8a8a;
`;

const Amount = styled.span`
  font-size: 1.4rem;
`;

const AmountTabContainer = styled.div`
  margin-top: 5.5rem;
  display: flex;
`;

const AmountTab = styled.div`
  font-size: 1.2rem;
  width: 7rem;
  height: 4.5rem;
  padding-top: 1.7rem;
  margin-top: 1rem;
  margin-right: 1rem;
  color: #8a8a8a;
  text-align: center;
  background-color: #f4f4f4;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: #e6e6e6;
  }
`;

const WithdrawInput = styled.div`
  position: relative;
  top: 1rem;
  width: 12.5rem;
  margin-bottom: 1rem;
  margin-left: 13rem;
  color: white;
  font-size: 1.6rem;

  input {
    width: 100%;
    height: 4.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border: 1px solid #d2d2d2;
    border-radius: 0.3rem;
    text-align: right;
  }
`;

const WithdrawBnt = styled.span`
  position: relative;
  top: 1rem;
  width: 7.5rem;
  height: 4.5rem;
  margin-left: 1rem;
  padding-top: 1.6rem;
  background-color: #6741d9;
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
  border-radius: 0.3rem;

  &:hover {
    background-color: #5929aa;
  }
`;

const Tab = styled.div`
  display: flex;
  justify-content: space-between;

  .totalInvestment {
    color: #8d8d8d;
    font-size: 1.2rem;
  }

  .won {
    margin-left: 1.5rem;
    font-size: 1.4rem;
  }
`;

const TabList = styled.div`
  display: flex;
`;

const List = styled.div`
  margin-right: 1.5rem;
  font-size: 1.4rem;
  color: #b2b2b2;
`;

const TransactionHistoryBox = styled.table`
  color: #b2b2b2;
`;

const Date = styled.th`
  width: 20rem;
  height: 4.2rem;
  font-size: 1.2rem;
`;

const Division = styled.th`
  width: 20rem;
  font-size: 1.2rem;
`;

const TransactionAmount = styled.th`
  width: 20rem;
  font-size: 1.2rem;
`;

const TransactionHistory = styled.th`
  width: 20rem;
  font-size: 1.2rem;
`;

const BalanceAfterTransaction = styled.th`
  width: 20rem;
  font-size: 1.2rem;
`;

export default Deposit;
