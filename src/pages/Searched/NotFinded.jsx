import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  height: 80vh;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
`;

const NotFinded = () => {
  return (
    <Container>
      <img
        src="https://res.cloudinary.com/hilnmyskv/image/upload/q_auto,f_auto/v1669660172/Algolia_com_Blog_assets/Featured_images/ux/3-examples-to-help-you-transform-the-no-results-search-results-page/mjotvg3ry6gxcyuwfxhb.jpg"
        alt=""
      />
    </Container>
  );
};

export default NotFinded;
