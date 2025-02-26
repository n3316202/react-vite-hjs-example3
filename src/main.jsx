import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './route/Router.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

// 기존방식
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <BrowserRouter> // 최상단 root에서 BrowserRouter로 감싸기
//       <App />
//   </BrowserRouter>
// )