
import ErrorPage from "../components/Error";
import NavBar from "../components/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HistoryView from "../pages/history";
import store from './store'
import { Provider } from 'react-redux'
import HomeView from "../pages/home";
import ClientView from "../pages/clients";
import PendingView from "../pages/pending";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes >
          <Route path={'/'} element={<HomeView />} />
          <Route path={'/client'} element={<ClientView />} />
          <Route path={'/history'} element={<HistoryView />} />
          <Route path={'/pending'} element={<PendingView />} />
          <Route path={'*'} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
