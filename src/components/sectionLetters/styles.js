import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 1rem;
  padding-bottom: 2rem;
`;

export const LetterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 100%;

  img {
    width: 50px;
  }
`;

export const LetterTitleBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
`;

export const LetterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  max-height: ${(props) => (props.open ? "1000px" : "0px")};
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: opacity 300ms ease, max-height 300ms ease;

  img {
    width: 100%;
    height: auto;
  }
`;

export const LetterTitle = styled.h2`
  font-family: sans-serif;
  font-size: 1.2rem;
  color: var(--textPrimários);
`;

export const LetterSignature = styled.p`
  font-family: "Pacifico", cursive;
  font-size: 1.2rem;
`;
