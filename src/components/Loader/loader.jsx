import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 1000000000;
  display: grid;
  place-items: center;
`;

const Container = styled.div`
  width: 150px;
  height: 150px;
  /* background-color: #fff; */
  display: grid;
  place-items: center;

  /* transform: translate(-50px, -50px); */
  .loader {
    height: 100px;
    width: 100px;
    /* max-height: 480px;
    min-width: 480px; */
  }
`;

const Loader = () => {
  return (
    <Wrapper>
      <Container>
        <svg
          width={200}
          height={200}
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="loader"
        >
          <defs>
            <path
              id="move-path"
              d="M102.546 83.5C109.859 70.8333 128.141 70.8333 135.454 83.5L157.971 122.5C165.284 135.167 156.143 151 141.517 151H96.4833C81.8571 151 72.7158 135.167 80.0289 122.5L102.546 83.5Z"
              fill="#D9D9D9"
            />
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation={5}
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -32"
              />
            </filter>
          </defs>
          <g filter="url(#goo)">
            <circle cx={119} cy={74} r={20} stroke="#005036" strokeWidth={8} />
            <circle cx={79} cy={141} r={20} stroke="#005036" strokeWidth={8} />
            <circle cx={157} cy={141} r={20} stroke="#005036" strokeWidth={8} />
            <circle cx={0} cy={0} r={14} fill="#005036">
              <animateMotion
                path="M102.546 83.5C109.859 70.8333 128.141 70.8333 135.454 83.5L157.971 122.5C165.284 135.167 156.143 151 141.517 151H96.4833C81.8571 151 72.7158 135.167 80.0289 122.5L102.546 83.5Z"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </svg>
      </Container>
    </Wrapper>
  );
};

export default Loader;
