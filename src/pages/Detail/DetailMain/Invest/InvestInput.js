import React from 'react';
import styled from 'styled-components';

function InvestInput(props) {
  const { amount, limit } = props;
  const inputRef = React.createRef();

  const handleAmount = e => {
    props.handleAmount(e);
  };

  return (
    <Inputs>
      <Label htmlFor="input-money">금액 입력</Label>
      <Span className={amount >= limit ? 'warning' : ''}>만원</Span>
      <Input
        ref={inputRef}
        className={amount >= limit ? 'warning' : ''}
        type="text"
        value={amount.toLocaleString()}
        onChange={handleAmount}
        maxLength="7"
      />
    </Inputs>
  );
}

export default InvestInput;

const Inputs = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: inline-block;
  position: absolute;
  top: -1rem;
  right: 2rem;
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: -0.04rem;
  color: #9ca5ad;
  background-color: #fff;
  padding: 0 0.5rem;
`;

const Span = styled.span`
  position: absolute;
  top: 50%;
  right: 2.2rem;
  transform: translate(0, -50%);
  font-size: 2.8rem;
  line-height: 4rem;
  letter-spacing: -0.08rem;

  &.warning {
    color: ${props => props.theme.red};
  }
`;

const Input = styled.input`
  width: 100%;
  height: 6rem;
  border: 1px solid #dee2e5;
  border-radius: 0.6rem;
  padding-right: 7.2rem;
  font-size: 2.8rem;
  line-height: 4rem;
  letter-spacing: -0.08rem;
  text-align: right;

  &:focus {
    outline: none;
    border: 1px solid #6da5ff;
  }

  &.warning {
    border-color: ${props => props.theme.red};
    color: ${props => props.theme.red};
  }
`;
