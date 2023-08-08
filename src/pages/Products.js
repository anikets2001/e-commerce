import React from "react";
import styled from "styled-components";
import ProductLists from '../Components/ProductLists';
import FilterSection from '../Components/FilterSection';
import Sort from '../Components/Sort';

const Products = () => {
  return (
    <Wrapper className="container grid grid-filter-column">
      <div>
        <FilterSection />
      </div>

      <section className="product-view--sort">
        <div className="sort-filter">
          <Sort/>
        </div>
        <div className="main-product">
          <ProductLists />
        </div>
      </section>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  height:100vh;
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;



export default Products;







