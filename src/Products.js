import React from "react";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#ffffff",
    btn: "#ffffff",
  },
  media: {
    mobile: "768px", 
  },
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

const Products = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <div>Products</div>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Products;
