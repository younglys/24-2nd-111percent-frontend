import React from 'react';
import styled from 'styled-components';

function CarouselContent({ image }) {
  return (
    <Wrapper>
      <img src={image} alt="건물이미지" width="600" height="360" />
    </Wrapper>
  );
}

export default CarouselContent;

const Wrapper = styled.div`
  width: 33%;
  height: 360px;

  img {
    display: block;
    width: 600px;
    height: 360px;
    margin: 0 auto;
  }
`;
