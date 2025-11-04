import styled, { keyframes } from "styled-components";

const heartBeat = keyframes`
  0% {
    transform: rotate(-45deg) scale(1.07);
  }
  80% {
    transform: rotate(-45deg) scale(1.0);
  }
  100% {
    transform: rotate(-45deg) scale(0.8);
  }
`;

const floatUp = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(-45deg);
  }
  100% {
    opacity: 0;
    transform: translateY(-500px) scale(0.5) rotate(-45deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
`;

export const HeartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 5rem;
`;

export const Heart = styled.div`
  height: 6rem;
  width: 6rem;
  background-color: #f20044;
  position: relative;
  transform: rotate(-45deg);
  box-shadow: -1rem 1rem 9rem #f20044;
  animation: ${heartBeat} 1s linear infinite alternate;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(-45deg) scale(1.15);
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 6rem;
    width: 6rem;
    background-color: #f20044;
    border-radius: 50%;
  }

  &::before {
    top: -50%;
    left: 0;
  }

  &::after {
    left: 50%;
    top: 0;
  }
`;

export const FloatingHeartElement = styled.div`
  position: fixed;
  width: 2rem;
  height: 2rem;
  background-color: #f20044;
  transform: rotate(-45deg);
  border-radius: 0;
  animation: ${floatUp} 2.5s ease-out forwards;
  pointer-events: none;
  z-index: 999;
  left: ${(props) => props.$left}vw;
  top: ${(props) => props.$top}vh;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 2rem;
    height: 2rem;
    background-color: #f20044;
    border-radius: 50%;
  }

  &::before {
    top: -50%;
    left: 0;
  }

  &::after {
    left: 50%;
    top: 0;
  }
`;
