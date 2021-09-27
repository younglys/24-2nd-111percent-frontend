import React from 'react';
import styled from 'styled-components';

function PortfolioContainerGoodsTab({ goodsTab, investingTab }) {
  return (
    <Container>
      <Rank>
        <div className="list">개인</div>
        <div className="list">사업자</div>
        <div className="list">스페셜딜</div>
        <div className="list">부동산</div>
        <div className="list">기타</div>
      </Rank>
      <ProcessBarBox>
        {goodsTab?.map(goods => {
          return (
            <ProcessBar key="goods.id">
              <div
                className="ProcessValue"
                style={{
                  width: `${
                    (goods.price /
                      (investingTab?.[0].price +
                        investingTab?.[1].price +
                        investingTab?.[2].price +
                        investingTab?.[3].price +
                        investingTab?.[4].price)) *
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
        <div className="list">
          {goodsTab?.map(goods => {
            return (
              <div className="list" key="goods.id">
                {goods.price.toLocaleString('en')}원
              </div>
            );
          })}
        </div>
      </RankAmount>
      <RankQuantity>
        {goodsTab?.map(goods => {
          return (
            <div className="list" key="goods.id">
              {goods.number}건
            </div>
          );
        })}
      </RankQuantity>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Rank = styled.div`
  margin-top: 0.4rem;

  .list {
    margin-bottom: 2.4rem;
    font-size: 1.4rem;
    color: gray;
  }
`;

const ProcessBar = styled.div`
  position: relative;
  height: 0.3rem;
  width: 37rem;
  margin-bottom: 3.5rem;
  background-color: #f4f4f4;

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
    margin-bottom: 2.5rem;
    font-size: 1.4rem;
  }
`;

const RankQuantity = styled.div`
  padding-top: 0.3rem;
  text-align: right;

  .list {
    margin-bottom: 2.5rem;
    font-size: 1.4rem;
    color: #8a8a8a;
  }
`;

export default PortfolioContainerGoodsTab;
