import {Routes, Route} from 'react-router-dom'
import { Header, Home, Footer } from './components';
import { ProductDetail } from './components/ProductDetail/ProductDetail';
import ProductList from './components/ProductList/ProductList';
import { SearchResults } from './components/SearchResults/SearchsResults';
import { ROUTES } from './utils/constants';

function App() {
   return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTES.base} element={<Home />} />
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.productList} element={<ProductList />} />
        <Route path={`${ROUTES.productDetail}/:id`} element={<ProductDetail />} />
        <Route path={`${ROUTES.searchResults}`} element={<SearchResults />} />
      </Routes>
      <Footer text='Ecommerce created during Wizeline’s Academy React Bootcamp' />
    </>
  );
}

export default App;
