import React from "react";
import Slider from "../../components/Slider/Slider";
import Card from "../../components/Card/Card";
import Category from "../../components/Category/Category";

import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";

import { Button, Container, ProductsContainer, Title } from "./Home.style";

function Home({ categories, products, banners, stateHandler }) {
     function changePage(e){
       e.preventDefault(e);
       stateHandler("products");
    }
  return (
    <Container>
      <Slider banners={banners} />
      <Title>Categories</Title>
      <ProductsContainer>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </ProductsContainer>
      <Title>All products</Title>
      <ProductsContainer>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ProductsContainer>
      <ProductsContainer>
         <Button onClick={changePage}>View all Products</Button>
      </ProductsContainer>
    </Container>
  );
}

export default Home;
