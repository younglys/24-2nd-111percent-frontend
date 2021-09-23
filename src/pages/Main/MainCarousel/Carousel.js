import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Carousel = ({ product, bgColorId }) => {
  const colorData = ['#3A5E9D', '#628F92', '#A3B9D3', '#834C4C', '#8B9C5A'];

  const bgColorPick = id => {
    const color = colorData[id % colorData.length];
    return color;
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

  return (
    <Product key={product.id} bgColor={bgColorPick(bgColorId)}>
      <DealDescription>
        <ProductTitle>{product.name}</ProductTitle>
        <DealRate>
          {product.return_rate.toFixed(2)}
          <Percentage>%</Percentage>
        </DealRate>
        <DealInfo>
          <ProductGrade>{product.grade}</ProductGrade>
          <DealEarningAmount>
            {product.duration}개월
            <DealEarningAmount>/</DealEarningAmount>
            {handleCurrency(product.target_amount)}
            <Won>원</Won>
          </DealEarningAmount>
          <Link to="/">
            <Button>상품 보러가기</Button>
          </Link>
        </DealInfo>
      </DealDescription>
      <ImgWrapper>
        <ProductImg src={product.image} />
      </ImgWrapper>
    </Product>
  );
};

const Product = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${props => props.bgColor};
`;

const DealDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
`;

const ProductTitle = styled.h1`
  font-size: 3em;
  font-weight: 700;
  letter-spacing: -0.05em;
`;

const DealRate = styled.span`
  font-size: 7em;
  margin-top: 15px;
`;

const Percentage = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
`;

const DealInfo = styled.span`
  margin-top: 1.6rem;
`;

const ProductGrade = styled.span`
  font-size: 0.6em;
  border: 1px solid #fff;
  border-radius: 3px;
  margin-right: 0.3em;
`;

const DealEarningAmount = styled.span`
  font-size: 1.4rem;
  margin: 0 5px;
`;

const Won = styled.span`
  font-size: 1.4rem;
  margin-left: -0.2em;
`;

const Button = styled.div`
  width: 100px;
  padding: 15px 0;
  border-radius: 5px;
  color: ${props => props.theme.gray};
  background-color: #fff;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  margin-top: 3em;
  box-shadow: 0 3px 8px ${props => props.theme.gray};
`;

const ImgWrapper = styled.div`
  width: 32em;
  height: 32em;
  margin: 3em;
  position: relative;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  box-shadow: 8px 5px 20px #505050;
`;

export default Carousel;
