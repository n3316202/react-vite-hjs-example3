import React, { createContext, useContext, useState } from 'react'

const HelloContext = createContext('안녕하세요')

const ContextUsedPage = () => {
  const [value, setValue] = useState(true)

  return (
    <>
      <HelloContext.Provider value={value ? 'good' : 'bad'}>
        <GrandParent />
        <button onClick={() => setValue(!value)}>Click Me!</button>
      </HelloContext.Provider>
    </>
  )
}

function GrandParent() {
  return <Parent />
}

function Parent() {
  return <Child />
}

function Child() {
  const text = useContext(HelloContext) //해당 켄텍스트의 value 값을 가져옴
  return <div>컨텍스트에서 받아온 데이타:{text}</div>
}

// function Child() {
//   return <HelloContext.Consumer>{(value) => <div>안녕하세요: {value}</div>}</HelloContext.Consumer>
// }

export default ContextUsedPage
