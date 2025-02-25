import React from 'react'

//const Hello = (props) => {
const Hello = ({ name, age, color }) => {
  // props ={
  //   name:"홍길동",
  //    age:"29",
  //     color:"red"
  // }
  return (
    //prettier-ignore
    <div style={{ color: color}}>
      안녕하세요:{name} <br/>
      색상:{color}<br/>
      나이:{age}<br/>
    </div>
  )
}

export default Hello
