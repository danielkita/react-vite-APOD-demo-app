import styled from "styled-components";

export const Loader = styled.div`
  &,
  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  & {
    font-size: 10px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(64, 169, 255, 0.5);
    border-right: 1.1em solid rgba(64, 169, 255, 0.5);
    border-bottom: 1.1em solid rgba(64, 169, 255, 0.5);
    border-left: 1.1em solid #ffffff;
    transform: translateZ(0);
    animation: load8 1.1s infinite linear;
  }

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
