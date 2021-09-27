import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InvestSummary from './InvestSummary';
import Deposit from './Deposit';

function MyInfo() {
  const [tabIndex, setTabIndex] = useState(1);
  const [myInfo, setMyInfo] = useState({});
  const [myInfo2, setMyInfo2] = useState([]);
  const [depositPuls, setDepositPuls] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    fetch('http://10.58.7.120:8000/transactions/portfolio', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0._fleYhEIx5512GwejJ70cid7blXOsKEmcbf5zeHBHtA',
      },
    })
      .then(res => res.json())
      .then(data => {
        setMyInfo(data.results);
        setDepositPuls(data.results.deposit_information.deposit_balance);
      });
  }, []);

  useEffect(() => {
    fetch(`http://10.58.7.126:8000/transactions/transaction${value}`, {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.AuY-wS_swloja_rpJAgCfaHccsAcpU8HS5GOjs9p6Zs',
      },
    })
      .then(res => res.json())
      .then(data => {
        setMyInfo2(data.transactions);
      });
  }, [value]);

  const MAPPING_MyInfoTab = {
    1: (
      <InvestSummary
        deposit={myInfo.deposit_information?.deposit_balance}
        investing={myInfo.investment_current_condition?.all[0].price}
        investmentCompleted={Number(
          myInfo.investment_current_condition?.all[1].price
        )}
        loss={Number(myInfo.investment_current_condition?.all[2].price)}
        investingTab={myInfo.investment_current_condition?.investing}
        accountNumber={myInfo.deposit_information?.deposit_account}
        yieldTab={myInfo.portfolio_current_condition?.return_rate}
        rankTab={myInfo.portfolio_current_condition?.grade}
        rateOfReturn={myInfo.investment_general_infomation?.rate_of_return}
        cumulativeProfit={
          myInfo.investment_general_infomation?.cumulative_profit
        }
        depositPuls={depositPuls}
        setDepositPuls={setDepositPuls}
      />
    ),
    4: (
      <Deposit
        deposit={myInfo.deposit_information?.deposit_balance}
        accountNumber={myInfo.deposit_information?.withdrawal_account}
        investingTab={myInfo.investment_current_condition?.investing}
        depositAccount={myInfo.deposit_information?.deposit_account}
        data={myInfo2}
        depositPuls={depositPuls}
        setDepositPuls={setDepositPuls}
        setValue={setValue}
        value={value}
      />
    ),
  };

  return (
    <div>
      <MyInfoTab>
        <InvestSummaryTab
          tab={tabIndex}
          onClick={() => {
            setTabIndex(1);
          }}
        >
          투자요약
        </InvestSummaryTab>
        <InvestDetailsTab
          tab={tabIndex}
          onClick={() => {
            setTabIndex(2);
          }}
        >
          투자내역
        </InvestDetailsTab>
        <PaymentsStatusTab
          tab={tabIndex}
          onClick={() => {
            setTabIndex(3);
          }}
        >
          지급현황
        </PaymentsStatusTab>
        <DepositTab
          tab={tabIndex}
          onClick={() => {
            setTabIndex(4);
          }}
        >
          예치금
        </DepositTab>
      </MyInfoTab>
      <BackgroundBanner>{MAPPING_MyInfoTab[tabIndex]}</BackgroundBanner>
    </div>
  );
}

const BackgroundBanner = styled.div`
  padding-bottom: 10rem;
  padding-top: 12.5rem;
  background-color: #f4f4f4;
`;

const MyInfoTab = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 5;
  background-color: white;
  margin-top: 60px;
`;

const InvestSummaryTab = styled.div`
  font-size: 14px;
  width: 100px;
  height: 50px;
  padding-top: 15px;
  text-align: center;
  font-weight: ${props => props.tab === 1 && 'bold'};
  border-bottom: ${props => props.tab === 1 && '#3c3c3c 3px solid'};

  &:hover {
    cursor: pointer;
  }
`;

const InvestDetailsTab = styled.div`
  font-size: 14px;
  width: 100px;
  height: 50px;
  padding-top: 15px;
  text-align: center;
  font-weight: ${props => props.tab === 2 && 'bold'};
  border-bottom: ${props => props.tab === 2 && '#3c3c3c 3px solid'};

  &:hover {
    cursor: pointer;
  }
`;

const PaymentsStatusTab = styled.div`
  font-size: 14px;
  width: 100px;
  height: 50px;
  padding-top: 15px;
  text-align: center;
  font-weight: ${props => props.tab === 3 && 'bold'};
  border-bottom: ${props => props.tab === 3 && '#3c3c3c 3px solid'};

  &:hover {
    cursor: pointer;
  }
`;

const DepositTab = styled.div`
  font-size: 14px;
  width: 100px;
  height: 50px;
  padding-top: 15px;
  text-align: center;
  font-weight: ${props => props.tab === 4 && 'bold'};
  border-bottom: ${props => props.tab === 4 && '#3c3c3c 3px solid'};

  &:hover {
    cursor: pointer;
  }
`;

export default MyInfo;
