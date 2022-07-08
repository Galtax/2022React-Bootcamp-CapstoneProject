import React from 'react';
import { Link } from 'react-router-dom'
import { Button, ButtonWrapper } from '../../App.style';
import { ROUTES } from '../../utils/constants';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import { HomeMain } from './Home.styled';
import ProductCategories from './ProductCategories';
import Slider from './Slider';

function Home() {
  return(
    <HomeMain>
      <Slider />
      <ProductCategories />
      <FeaturedProducts />
      <ButtonWrapper>
        <Link to={ROUTES.productList} >
          <Button >
            View all Products
          </Button>
        </Link>
      </ButtonWrapper>
    </HomeMain>
  );
}

export default Home;