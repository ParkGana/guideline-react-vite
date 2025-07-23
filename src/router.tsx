import { Navigate, Route, Routes, useLocation, useNavigationType } from 'react-router-dom';
import HomePage from './pages/Home';
import AuthenticatedRoute from './routes/authenticatedRoute';
import NonAuthenticatedRoute from './routes/nonAuthenticatedRoute';
import SignInPage from './pages/SignIn';
import TailwindPage from './pages/Tailwind';
import TodoPage from './pages/Todo';
import StyledPage from './pages/Styled';
import PokemonPage from './pages/Pokemon';
import PostPage from './pages/Post';
import CounterPage from './pages/Counter';
import ProductPage from './pages/Product';
import ProductDetailPage from './pages/ProductDetail';
import ProductModal from './components/product/ProductModal';

const Router = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  const state = location.state as { backgroundLocation?: Location };
  const isModal = state?.backgroundLocation && navigationType !== 'POP';

  return (
    <>
      <Routes location={isModal ? state.backgroundLocation : location}>
        <Route path="/tailwind" element={<TailwindPage />} />
        <Route path="/styled" element={<StyledPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/pokemon" element={<PokemonPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/counter" element={<CounterPage />} />

        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />

        {/* 로그인 되어있는 경우에만 접속 가능한 경로들 */}
        <Route element={<AuthenticatedRoute />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* 로그인 되어있지 않은 경우에만 접속 가능한 경로들 */}
        <Route element={<NonAuthenticatedRoute />}>
          <Route path="/signin" element={<SignInPage />} />
        </Route>

        {/* 등록되지 않은 경로로 접속할 경우 / 경로로 redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {isModal && (
        <Routes>
          <Route path="/product/:productId" element={<ProductModal />} />
        </Routes>
      )}
    </>
  );
};

export default Router;
