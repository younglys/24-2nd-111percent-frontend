import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header/Header';
import DetailMain from './DetailMain/DetailMain';
import Disclaimer from './Disclaimer';
import styled from 'styled-components';
import fetchData from '../../service/data-fetch';

function Detail() {
  // network
  const data = new fetchData();
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    data.itemDetail(id).then(item => setItem(item));
  }, []);

  return (
    <Wrapper>
      {item && <Header investment={item} />}
      {item && <DetailMain investment={item} paramID={id} />}
      <Disclaimer />
    </Wrapper>
  );
}

export default Detail;

const Wrapper = styled.div`
  overflow: hidden;
`;
