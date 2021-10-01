import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from './Carousel';

const MainCarousel = ({ items }) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <SlideContainer>
      <CarouselWrapper>
        <StyledSlider {...settings}>
          {items.slice(0, 7).map(product => (
            <Carousel
              key={product.id}
              product={product}
              bgColorId={product.id}
            />
          ))}
        </StyledSlider>
      </CarouselWrapper>
    </SlideContainer>
  );
};

const SlideContainer = styled.section`
  position: relative;
  height: 460px;
  top: 60px;
`;

const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledSlider = styled(Slider)`
  .slick-next {
    right: 70px;
  }

  .slick-prev {
    left: 70px;
    z-index: 1;
  }
`;

export default MainCarousel;
