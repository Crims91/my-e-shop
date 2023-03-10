import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../productCard/ProductCard";

import { CategoriesContext } from "../../../contexts/CategoriesContext";

import { CategoryContainer, CategoryTitle } from "./Category.styles";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
