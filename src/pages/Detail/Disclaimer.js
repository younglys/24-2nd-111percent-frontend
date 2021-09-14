import React from 'react';
import styled from 'styled-components';

function Disclaimer() {
  return (
    <Footer>
      <Wrapper>
        <H1>투자 유의사항</H1>
        <Ul>
          <Li>
            본 투자상품은 (주)원헌드레드일레븐퍼센트가 심사하여 취급하려는
            대출채권에 대한 원리금수취권을 신규 매입하는 형태입니다.
          </Li>
          <Li>
            본 투자상품의 경우 투자 모집이 완료되기 전까지 투자 취소가
            가능합니다.
          </Li>
          <Li>
            투자 모집 마감 후 대출을 실행하며, 실행이 승인되지 않을 경우 즉시
            투자원금을 예치금 계좌로 환불해 드립니다.
          </Li>
          <Li>
            원금 및 수익률이 보장되지 않으므로 투자 시 신중한 판단이 필요합니다.
          </Li>
          <Li>
            대출자의 자금 상황에 따라 만기 전에 조기 상환될 수 있으며 다음
            날(영업일 기준) 원리금을 지급해드립니다.
          </Li>
          <Li>
            원헌드레드퍼센트는 투자상품에 대한 충분한 정보를 제공할 의무가
            있으며, 원헌드레드퍼센트가 제공하는 정보를 확인한 후 투자하시기
            바랍니다.
          </Li>
          <Li>준법감시인 심사필 제21-B94호(21.09.09)</Li>
        </Ul>
      </Wrapper>
    </Footer>
  );
}

export default Disclaimer;

const Footer = styled.footer`
  color: #858d94;
  background-color: #f8f9fa;
  padding: 6rem 0.75rem;
`;

const Wrapper = styled.div`
  width: 1095px;
  margin: 0 auto;

  @media only screen and (max-width: 1079px) {
    max-width: 730px;
  } ;
`;

const H1 = styled.h1`
  font-size: 1.8rem;
  line-height: 1.56;
  letter-spacing: -0.3px;
  margin-bottom: 2rem;
`;

const Ul = styled.ul`
  list-style: inside;
`;

const Li = styled.li`
  font-size: 1.6rem;
  line-height: 1.57;
  letter-spacing: -0.3px;
  margin-bottom: 1rem;
`;
