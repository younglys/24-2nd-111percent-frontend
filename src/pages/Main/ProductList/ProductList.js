import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import MainLoanInfo from '../MainLoanInfo/MainLoanInfo';
import fetchData from '../../../service/data-fetch';

class ProductList extends React.Component {
  constructor() {
    super();

    this.state = {
      productList: [],
      initialItems: 0,
      items: 6,
    };
  }

  componentDidMount() {
    this.getData();
    window.addEventListener('scroll', this.infiniteScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.infiniteScroll);
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.items !== prevState.items) {
      this.getData();
    }
  };

  getData = () => {
    const data = new fetchData();
    const { initialItems, items, productList } = this.state;

    data.listView().then(res => {
      const result = res.investments.slice(initialItems, items);
      this.setState({
        productList: [...productList, ...result],
      });
    });
  };

  infiniteScroll = () => {
    const { items } = this.state;

    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );

    let scrollTop = Math.ceil(
      Math.max(document.documentElement.scrollTop, document.body.scrollTop)
    );

    let clientHeight = document.documentElement.clientHeight;
    console.log('1', scrollTop);
    console.log('2', clientHeight);
    console.log('3', scrollHeight);

    // if (scrollTop > clientHeight - 416) {
    //   this.setState({
    //     initialItems: items,
    //     items: items + 6,
    //   });
    // }

    if (scrollTop + clientHeight >= scrollHeight) {
      this.setState({
        initialItems: items,
        items: items + 6,
      });
    }
  };

  render() {
    const { productList } = this.state;

    return (
      <>
        <ProductContainer>
          <Header>모집중 상품</Header>
          <ProductWrapper>
            {productList.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </ProductWrapper>
        </ProductContainer>
        {this.state.productList.length === 20 ? <MainLoanInfo /> : ''}
      </>
    );
  }
}

const ProductContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  margin-top: 6rem;
`;

const Header = styled.p`
  font-size: 1.8em;
  font-weight: 700;
  color: ${props => props.theme.black};
  margin-bottom: 20px;
`;

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px 50px;
`;

export default ProductList;
