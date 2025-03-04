import {age,name} from './data.js'
let 장바구니 = ['Tomatoes','Pasta']
export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem items={장바구니[0]}/>
      <CartItem items={장바구니[1]}/>
      <Banner content="현대카드"/>
      <Banner content="삼성카드"/>
      <Btn color="red"/>
      <Btn color="blue"/>
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.items}</p>
      <p>$40</p>
      <p>1개</p>
      <p>나이: {age}</p>
      <p>이름: {name}</p>
    </div>
  );
}

function Banner(props){
  return (
    <h5> {props.content} 결제 행사중</h5>
  )
}

function Btn(props){
  return <button style={{ background : `${props.color}` }}>버튼임</button>
}