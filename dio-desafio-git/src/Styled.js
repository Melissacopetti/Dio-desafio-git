import styled from "styled-components";

export const Body = styled.div`
  background-color: #eedae5;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  padding: 0;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  opacity: 0.6;
  font-size: 3rem;
  color: #fc0fc0;
  font-family: 'Clicker Script', cursive;
  font-weight:900;
  z-index: 0;
`;
