import React, { useState, useEffect } from 'react';
import Item from './Item';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const style = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'flexStart',
  width: '80vw',
  margin: '0 auto',
  marginTop: '50px',
}

const List = () => {
  const [itemState, setItemState] = useState([]);
  const [count, setCount] = useState(2);

  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get(
        'https://node.wingeat.com/test-api/items?page=1'
      );
      setItemState(response.data);
    };
    getItems();
  }, []);

  // 스크롤시 다음 api데이터 받아서 state들 update
  const fetchMoreData = async () => {
    if(count > 7) return;
    
    const res = await axios.get(
      `https://node.wingeat.com/test-api/items?page=${count}`
    );
    setTimeout(() => {
      const newData = itemState.concat(res.data)
      const newCount = count + 1;
      setItemState(newData);
      setCount(newCount);
    }, 500);
  };

  return (
    <InfiniteScroll
      dataLength={itemState.length}
      next={fetchMoreData}
      hasMore={true}
      style={style}
      loader={''}
    >
      {itemState.map((item, index) => (
      <Item data={item} key={index}></Item>
      ))}
    </InfiniteScroll>
  );
};

export default List;
