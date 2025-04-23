import { Route, Routes } from "react-router-dom"
import { HomePage, NotFoundPage, TransactionPage } from "./pages"
import { Layout } from "./components"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path='/transactions' element={<TransactionPage />} />

        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
