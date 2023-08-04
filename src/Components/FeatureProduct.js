import { useProductContext } from "../Context/ProductContext";
import styled from "styled-components";
import Product from "./Product";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <LoaderWrapper>
      <Loader className="loader-wrapper">
        <span className="loader"></span>
      </Loader>
    </LoaderWrapper>;
  }



  return (
    <Wrapper className="section">
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Feature Services</div>
        <div className="grid grid-three-column">
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const LoaderWrapper = styled.div`
  height:500px;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color: ${({ theme }) => theme.colors.bg};

`;

const Loader = styled.div`

    position:relative;
    width: 80px;
    height: 80px;
  
  .loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 5px solid transparent;
    border-top-color: #007bff; 
    border-right-color: #007bff;
    border-bottom-color: #007bff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
   
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }

  .card {
    background-color: #fff;
    border-radius: 1rem;

    .card-data {
      padding: 0 2rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default FeatureProduct;