import React from 'react';
import styled from 'styled-components';

const PointList = props => {
  const { item } = props;
  return (
    <Li>
      <Image>
        <img src={item.img} alt="투자_포인트_이미지" />
      </Image>
      <div>
        <Strong>{item.name}</Strong>
        <P>{item.detail}</P>
      </div>
    </Li>
  );
};

export default PointList;

const Li = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;

const Image = styled.div`
  width: 8.5rem;
  height: 8.5rem;
  margin-right: 3rem;
  border-radius: 50%;
  background-color: #f1f3f5;

  img {
    width: 50%;
    height: 50%;
    transform: translate(50%, 50%);
  }
`;

const Strong = styled.strong`
  padding-bottom: 1rem;
  font-size: 1.8rem;
  line-height: 2.6rem;
  letter-spacing: -0.04rem;
`;

const P = styled.p`
  font-size: ${props => props.theme.middleFont};
  line-height: 2.4rem;
  letter-spacing: -0.04rem;
  color: #4b525a;
`;
