import Image from "next/image"

export default function list() {
  let products = ["토마토", "파스타", "코코넛"];

  return (
    <div>
      <h2>Products</h2>
      {
        products.map((a,i)=>(
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" alt={a}/>
            <h4>상품: {a}</h4>
          </div>
        ))
      }
    </div>
  );
}
