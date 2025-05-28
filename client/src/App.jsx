import { Route, Routes } from "react-router-dom"
import { AuthPage, HomePage, NotFoundPage, TransactionPage } from "./pages"
import { Layout } from "./components"
import PublicRoute from "./routes/PublicRoute"
import PrivateRoute from "./routes/PrivateRoute"

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<HomePage />} />

          <Route path='/transactions' element={<TransactionPage />} />
        </Route>

        <Route
          path='/auth/:type'
          element={
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          }
        />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
