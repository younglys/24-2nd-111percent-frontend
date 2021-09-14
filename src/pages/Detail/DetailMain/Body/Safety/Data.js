import React from 'react';
import DataList from './DataList';
import styled from 'styled-components';

const Data = props => {
  const { evaluation, bond, target_amount, spare, collection } = props;

  const getRate = amount => {
    const rate = ((amount / evaluation) * 100).toFixed(2);
    return rate;
  };

  const handleCurrency = num => {
    const Units = ['', '만', '억', '조'];
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

  const doughnutData = [
    {
      id: 1,
      name: '선순위 채권금액',
      amount: handleCurrency(bond),
      rate: getRate(bond),
      color: '#dee2e7',
      highlight: false,
    },
    {
      id: 2,
      name: '111퍼센트 대출금',
      amount: handleCurrency(target_amount),
      rate: getRate(target_amount),
      color: '#adb5bd',
      highlight: false,
    },
    {
      id: 3,
      name: '담보 여유금',
      amount: handleCurrency(spare),
      rate: getRate(spare),
      color: '#3282f0',
      highlight: true,
    },
  ];

  return (
    <Ul>
      {doughnutData.map(item => (
        <DataList
          key={item.id}
          name={item.name}
          amount={item.amount}
          rate={item.rate}
          color={item.color}
          highlight={item.highlight}
        />
      ))}
      <Li>회수예상가액 {handleCurrency(collection)}원</Li>
    </Ul>
  );
};

export default Data;

const Ul = styled.ul`
  flex: 0 1 50%;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  font-size: 1.4rem;
  line-height: 2.4rem;
  letter-spacing: -0.06rem;
  color: ${props => props.theme.lightGray};

  &:last-child {
    justify-content: flex-end;
  }
`;
