import { BrowserRouter, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/HomePage'
import HelloPage from './pages/HelloPage'
import ProfilePage from './pages/ProfilePage'
import BoardPage from './pages/BoardPage'

// 1.기본 라이팅 방법
// function App2() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<HomePage />} />
//           <Route path='/profile' element={<ProfilePage />} />
//           <Route path='/board' element={<BoardPage />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

function About() {
  const navigate = useNavigate()

  return (
    <div>
      <button
        onClick={() => {
          navigate('/profile')
        }}
      >
        프로필 페이지로 이동하기
      </button>

      <button
        onClick={() => {
          navigate(-1)
        }}
      >
        이전페이지 이동
      </button>

      <h2>여기는 About 페이지입니다.</h2>
      <p>대충 쇼핑몰 페이지라는 뜻</p>
      {/* 서브 페이지가 보여질 위치를 Outlet으로 지정해준다. */}
      {/* <Outlet /> */}
      <Routes>
        <Route path='/location' element={<Location />}></Route>
      </Routes>
    </div>
  )
}

function Location() {
  return <h1>로케이션 컴포넌트</h1>
}
//2. 중첩 라우팅
//https://velog.io/@reasonz/2022.07.14-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9A%B0%ED%84%B0-%EC%A4%91%EC%B2%A9-%EB%9D%BC%EC%9A%B0%ED%8C%85-nested-routes-outlet
// /about/
// 서브 페이지의 path는 / 를 생략하고 작성하면 된다
//Outlet 없이 서브 페이지 라우팅
function App2() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/about/*' element={<About />}>
            <Route path='location' element={<Location />}></Route>
          </Route>
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/board/:id' element={<BoardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

//3. useNavigate 사용
{
  /* <button onClick={() => { navigate('/about'); }}>
  어바웃 페이지로 이동하기
</button> */
}

{
  /* <button onClick={() => { navigate(-1); }} >
이전 페이지로 이동하기
</button> */
}

//4. 파라미터 처리 하기
// url의 파라미터 값을 가져오기 위해 useParams()
// board/1 + get
//(✳✳ url :http://localhost:3000/board/21 인 경우)
// 👀 <Route path="board/:id" element={<BoardPage />} /> 👀
// const params = useParams();
// console.log(params);
// --console--
// {id : 21}
export default App2
