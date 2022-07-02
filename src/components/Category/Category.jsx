import React from "react";
import { Container, Image, Tittle, TitleContainer } from "./Category.style";

const Category = ({ category }) => {
  const { data } = category;

  return (
    <Container key={category.id}>
      <Image alt={data.main_image.alt} src={data.main_image.url} />
      <TitleContainer>
        <Tittle>{data.name}</Tittle>
      </TitleContainer>
    </Container>
  );
};

export default Category;
