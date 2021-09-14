import React from 'react';
import styled from 'styled-components';

const DataList = props => {
  const { name, amount, rate, color, highlight } = props;

  const strong = {
    color: '#3282f0',
  };

  return (
    <Li>
      <First style={{ backgroundColor: color }} />
      <Title>{name}</Title>
      <Amount style={highlight ? strong : {}}>
        <div>{amount}원</div>
        <Percent style={highlight ? strong : {}}>{rate}%</Percent>
      </Amount>
    </Li>
  );
};

export default DataList;

const Li = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  font-size: 1.4rem;
  line-height: 2.4rem;
  letter-spacing: -0.06rem;
  color: ${props => props.theme.lightGray};
`;

const First = styled.span`
  display: inline-block;
  width: 1.4rem;
  height: 1.4rem;
  margin-right: 1rem;
  background-color: #dee2e7;
  border-radius: 0.2rem;
`;

const Title = styled.span`
  margin-right: auto;
  font-size: ${props => props.theme.smallFont};
  line-height: 1.71;
  letter-spacing: -0.03rem;
  color: #868e96;
`;

const Amount = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: ${props => props.theme.middleFont};
  color: #495057;

  div {
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.03rem;
    font-weight: 700;
  }
`;

const Percent = styled(Amount)`
  width: 5rem;
  margin-left: 0.5rem;
  font-weight: 400;
  text-align: end;
`;
