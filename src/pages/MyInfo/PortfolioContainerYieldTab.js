import React from 'react';
import styled from 'styled-components';

function PortfolioContainerYieldTab({ yieldTab }) {
  return (
    <Container>
      <Rank>
        <div className="listA">8% 미만</div>
        <div className="listA">8% 이상</div>
        <div className="listA">10% 이상</div>
        <div className="listA">12% 이상</div>
      </Rank>
      <ProcessBarBox>
        {yieldTab?.map(yieldAmount => {
          return (
            <ProcessBar key="yieldTab.id">
              <div
                className="ProcessValue"
                style={{
                  width: `${
                    (yieldAmount.price /
                      (yieldTab?.[0].price +
                        yieldTab?.[1].price +
                        yieldTab?.[2].price +
                        yieldTab?.[3].price)) *
                    100
                  }%`,
                  backgroundColor: '#5B99EA',
                }}
              ></div>
            </ProcessBar>
          );
        })}
      </ProcessBarBox>
      <RankAmount>
        {yieldTab?.map(yieldTab => {
          return (
            <div className="list" key="yieldTab.id">
              {yieldTab.price?.toLocaleString('en')}원
            </div>
          );
        })}
      </RankAmount>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.3rem;
`;

const Rank = styled.div`
  margin-top: 0.4rem;

  .listA {
    font-size: 1.4rem;
    margin-bottom: 2.5rem;
    color: gray;
  }
`;

const ProcessBar = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  height: 0.3rem;
  background-color: #f4f4f4;
  width: 37rem;
  margin-bottom: 3.5rem;

  .ProcessValue {
    position: absolute;
    height: 0.4rem;
    border-radius: 0.2rem;
  }
`;
const ProcessBarBox = styled.div`
  margin-top: 1rem;
`;

const RankAmount = styled.div`
  padding-top: 0.3rem;
  text-align: right;

  .list {
    font-size: 1.4rem;
    margin-bottom: 2.5rem;
  }
`;

export default PortfolioContainerYieldTab;
