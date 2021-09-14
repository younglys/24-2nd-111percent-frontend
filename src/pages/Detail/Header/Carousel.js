import React, { useState } from 'react';
import CarouselContent from './CarouselContent';
import styled from 'styled-components';

function Carousel(props) {
  const { images } = props;

  const [index, setIndex] = useState(0);

  const handleLeft = () => {
    setIndex(index === 0 ? 2 : index - 1);
  };

  const handleRight = () => {
    setIndex(index === 2 ? 0 : index + 1);
  };

  return (
    <>
      <Wrapper>
        <CarouselWrapper
          style={{ transform: `translateX(-${(index * 100) / 3}%)` }}
        >
          {images &&
            images.map((image, idx) => (
              <CarouselContent key={idx} image={image} />
            ))}
        </CarouselWrapper>
      </Wrapper>
      <Leftbutton onClick={handleLeft}>
        <i className="fas fa-chevron-left" />
      </Leftbutton>
      <Button onClick={handleRight}>
        <i className="fas fa-chevron-right" />
      </Button>
    </>
  );
}

export default Carousel;

const Wrapper = styled.div`
  /* overflow: hidden; */
`;

const CarouselWrapper = styled.div`
  display: flex;
  width: 300%;
  transition: all 500ms ease-out;
`;

const Button = styled.button`
  position: absolute;
  top: 18%;
  right: 0;
  padding: 0 10rem;

  i {
    color: ${props => props.theme.black};
    font-size: 5rem;
  }

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 1079px) {
    padding: 0 2rem;
  }
`;

const Leftbutton = styled(Button)`
  left: 0;
`;
