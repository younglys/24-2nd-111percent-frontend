import React from 'react';
import styled from 'styled-components';

const Amount = props => {
  const { amount, return_percent } = props;

  const finalAmount = amount * return_percent * 10000;

  const handleCurrency = num => {
    const Units = ['', '만'];
    let answer = '';
    const unit = 10000;
    let index = 0;
    let division = Math.pow(unit, index);

    while (Math.floor(num / division) > 0) {
      const mod = Math.floor((num % (division * unit)) / division);
      if (mod) {
        const modToString = mod
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        answer = `${modToString}${Units[index]} ` + answer;
      }
      division = Math.pow(unit, ++index);
    }
    return answer;
  };

  return (
    <Wrapper>
      <Title>예상 수익금</Title>
      <Number>{handleCurrency(finalAmount)}원</Number>
    </Wrapper>
  );
};

export default Amount;

const Wrapper = styled.div`
  text-align: right;
  color: ${props => props.theme.purple};
  margin-bottom: 4rem;
`;

const Title = styled.span`
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: -0.04rem;
  margin-right: 0.3rem;
`;

const Number = styled.span`
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: -0.04rem;
`;
