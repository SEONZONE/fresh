import {age,name} from './data.js'
import hiComponent from './hi.js'

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem/>
      <hiComponent/>
    </div>
  );
}

function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
      <p>나이: {age}</p>
      <p>이름: {name}</p>
    </div>
  );
}
