import { Route, Routes } from "react-router-dom"
import { AuthPage, HomePage, NotFoundPage, TransactionPage } from "./pages"
import { Layout } from "./components"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path='/transactions' element={<TransactionPage />} />
        </Route>

          <Route path='login' element={<AuthPage isLogin={true} />} />
          <Route path='register' element={<AuthPage isLogin={false} />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
