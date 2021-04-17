# 사전과제 링크입니다

- https://dok6n.github.io/wingeat/

## checkbox 수정

장바구니 상품 체크 해제 -> 상품 삭제 -> 다음 상품의 체크는 해제 되어 버리는데 <br>
item의 checked 속성값은 true 그대로인 상황 <br>

```js
const handleChange = e => {
    const itemData = JSON.parse(e.target.value);
    const itemPrice = parseInt(itemData.price);
    dispatch(actions.checkbox(itemPrice, itemData, e.target.checked));
  };

return (

...

<ItemInfo>
    <input type='checkbox' name='items' value={JSON.stringify(item)} onChange={handleChange} defaultChecked={item.checked} />
    <ItemName>{item.itemName}</ItemName>
</ItemInfo>

...

)
```

수정 후

```js
return (

  ...

  <carts.ItemInfo onClick={() => {
    return dispatch(actions.checkbox(item.price, item, !item.checked));
}}>
  {item.checked?
    <FontAwesomeIcon icon={faCheckCircle}/>
    : <FontAwesomeIcon icon={faCircle} />}
  <carts.ItemName>{item.itemName}</carts.ItemName>
</carts.ItemInfo>

...

)
```

- item.checked에 맞는 checkbox icon을 출력
