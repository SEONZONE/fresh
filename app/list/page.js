"use client";
import Image from "next/image";
import { useState } from "react";

export default function list() {
  let products = ["토마토", "파스타", "코코넛"];
  let [수량, 수량변경] = useState([0, 0, 0]);

  return (
    <div>
      <h2>Products</h2>
      {products.map((a, i) => (
        <div className="food" key={i}>
          <img src={`/food${i}.png`} className="food-img" alt={a} />
          <h4>상품: {a}</h4>
          <span>{수량[i]}</span>
          <button onClick=
          {() => {
            수량변경((prev) => {
              const copy = [...prev];
              copy[i]++;
              return copy;
            });
          }}>+</button>
          <button onClick=
          {() => {
            수량변경((prev) => {
              const copy = [...prev];
              copy[i] == 0 ? 0 : copy[i]--;
              return copy;
            });
          }}>-</button>
        </div>
      ))}
    </div>
  );
}
