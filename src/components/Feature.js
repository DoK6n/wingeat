import React from 'react';
import styled from 'styled-components';
import useAsync from '../useAsync';
import axios from 'axios';
import AliceCarousel from 'react-alice-carousel';

const Width = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

const ItemImg = styled.div`
  background-image: url(${props => props.pc});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
  padding-top: 35%;

  @media ${props => props.theme.mobile} {
    background-image: url(${props => props.mobile});
    padding-top: 63%;
  }
`;

const getImage = async () => {
  const response = await axios.get('https://node.wingeat.com/test-api/features');
  return response.data;
};

const Feature = () => {
  const urlForePart = 'https://image.wingeat.com/';

  const [state] = useAsync(getImage);
  const { loading, data: imgs, error } = state;

  if (loading) return <h1>로딩중..</h1>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!imgs) return null;

  const imgUrl = {
    pc: {
      1: urlForePart + imgs[0].image,
      2: urlForePart + imgs[1].image,
      3: urlForePart + imgs[2].image,
      4: urlForePart + imgs[3].image,
    },
    mobile: {
      1: urlForePart + imgs[0].mobileImage,
      2: urlForePart + imgs[1].mobileImage,
      3: urlForePart + imgs[2].mobileImage,
      4: urlForePart + imgs[3].mobileImage,
    },
  };
  
  const items = [
    <ItemImg pc={imgUrl.pc[1]} mobile={imgUrl.mobile[1]}></ItemImg>,
    <ItemImg pc={imgUrl.pc[2]} mobile={imgUrl.mobile[2]}></ItemImg>,
    <ItemImg pc={imgUrl.pc[3]} mobile={imgUrl.mobile[3]}></ItemImg>,
    <ItemImg pc={imgUrl.pc[4]} mobile={imgUrl.mobile[4]}></ItemImg>,
  ];

  return (
    <Width>
      <AliceCarousel 
        duration={400} 
        startIndex={1} 
        autoPlay={true} 
        infinite={true} 
        fadeOutAnimation={true} 
        autoPlayInterval={2000} 
        items={items}
        >

        </AliceCarousel>
    </Width>
  );
};

export default Feature;
