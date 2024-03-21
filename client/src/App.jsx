import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import HeaderPage from './components/Header/HeaderPage';
import FooterPage from './components/Footer/FooterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './components/NotFound/NotFound'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import ProductPage from './pages/ProductPage/ProductPage'
import { useLocation } from 'react-router-dom';
import Marquee from './components/Marquee/Marquee';
import ProductDetailsPage from './pages/ProductDetails/ProductDetailsPage';
import Adminpage from './pages/ADMIN/AdminPage/Adminpage';
import AdminProductPage from "./pages/ADMIN/AdminProduct/AdminProductPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";


const Layout = ()=> {
  const location = useLocation()
  const isLoginPage = location.pathname === '/login' ;
  const isRegisterPage = location.pathname === '/register'
  const styleLayout = {
    padding:'0 5%'
  }
  return (
    <>
      {!isLoginPage && !isRegisterPage && (<Marquee />)}
      {!isLoginPage && !isRegisterPage && ( <HeaderPage /> )}
      <div style={styleLayout}>
        <Outlet />
      </div>
      {!isLoginPage && !isRegisterPage && <FooterPage />}
    </>
  )
}
const LayoutAdmin = () => {
  return (
    <Outlet />
  );
}

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'login', element: <LoginPage /> },
        { path: 'register', element: <RegisterPage /> },
        { path: 'product', element: <ProductPage /> },
        { path: 'productDetails', element: <ProductDetailsPage /> },
      ]
    } ,
    {
      path : '/admin',
      element: <LayoutAdmin /> ,
      errorElement : <NotFound />,
      children : [
        { index: true, element: 
        <ProtectedRoute>
          <Adminpage />
        </ProtectedRoute> },
        { path: 'adminProduct', element: <AdminProductPage /> }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
