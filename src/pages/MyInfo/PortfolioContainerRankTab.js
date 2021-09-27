import React from 'react';
import styled from 'styled-components';

function PortfolioContainerRankTab({ rankTab }) {
  return (
    <Container>
      <Rank>
        <div className="listA">A</div>
        <div className="listB">B</div>
        <div className="listC">C</div>
        <div className="listD">D</div>
      </Rank>
      <ProcessBarBox>
        {rankTab?.map(rank => {
          return (
            <ProcessBar key="rank.id">
              <div
                className="ProcessValue"
                style={{
                  width: `${
                    (rank.price /
                      (rankTab?.[0].price +
                        rankTab?.[1].price +
                        rankTab?.[2].price +
                        rankTab?.[3].price)) *
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
        {rankTab?.map(rank => {
          return (
            <div className="list" key="rank.id">
              {rank.price?.toLocaleString('en')}원
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
`;
const Rank = styled.div`
  .listA {
    width: 2.5rem;
    height: 2.5rem;
    margin-bottom: 1.3rem;
    padding: 0.4rem 0;
    font-size: 2rem;
    background-color: #2880e4;
    color: white;
    border-radius: 0.3rem;
    text-align: center;
  }

  .listB {
    width: 2.5rem;
    height: 2.5rem;
    margin-bottom: 1.3rem;
    padding: 0.4rem 0;
    font-size: 2rem;
    background-color: #60c03e;
    color: white;
    border-radius: 0.3rem;
    text-align: center;
  }

  .listC {
    width: 2.5rem;
    height: 2.5rem;
    margin-bottom: 1.3rem;
    padding: 0.4rem 0;
    font-size: 2rem;
    background-color: #eec306;
    color: white;
    border-radius: 0.3rem;
    text-align: center;
  }

  .listD {
    width: 2.5rem;
    height: 2.5rem;
    margin-bottom: 1.8rem;
    padding: 0.4rem 0;
    font-size: 2rem;
    background-color: #dd864e;
    color: white;
    border-radius: 0.3rem;
    text-align: center;
  }
`;

const ProcessBar = styled.div`
  position: relative;
  width: 37rem;
  height: 0.3rem;
  background-color: #f4f4f4;
  margin-bottom: 3.5rem;

  .ProcessValue {
    position: absolute;
    height: 0.4rem;
    border-radius: 0.2rem;
  }
`;
const ProcessBarBox = styled.div`
  margin-top: 1rem;
  margin-bottom: 3.3rem;
`;

const RankAmount = styled.div`
  padding-top: 0.3rem;
  text-align: right;

  .list {
    margin-bottom: 2.5rem;
    font-size: 1.4rem;
  }
`;

export default PortfolioContainerRankTab;
