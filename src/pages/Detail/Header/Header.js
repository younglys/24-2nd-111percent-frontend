import React from 'react';
import Carousel from './Carousel';
import Title from './Title/Title';

function Header(props) {
  return (
    <header>
      <Carousel images={props.investment.image_list} />
      <Title investment={props.investment} />
    </header>
  );
}

export default Header;
