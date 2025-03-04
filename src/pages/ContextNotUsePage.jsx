import React from 'react'

const ContextNotUsePage = () => {
  return (
    <>
      <GrandParent sytle='color:red' value='안녕하세요'></GrandParent>
    </>
  )
}

function GrandParent(props) {
  return <Parent  value={props.value} />
}

function Parent({ value }) {
  return <Child value={value} />
}

function Child({ value }) {
  return <div>Received: {value}</div>
}

export default ContextNotUsePage
