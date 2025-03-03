import Link from "next/link"
export default function Home() {
  let name = 'PARK SEONG JONG'
  let age = '30'
  let link = 'http://localhost:3000'
  return (
    <div>
      <h4 className="red">애플 후레쉬</h4>
      <p> by dev : { name }</p>
      <p>age : { age } </p>
      <a href={link}> 상품목록 </a>
    </div>
  )
}
