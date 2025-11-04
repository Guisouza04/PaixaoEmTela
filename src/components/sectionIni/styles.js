import styled from "styled-components";

export const Container = styled.section`
  gap: 1rem;
`;

export const BoxText = styled.div`
  width: 90%;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  p {
    font-size: 1rem;
    font-family: "Bitcount Grid Single", cursive;
    font-style: normal;
    font-weight: 500;
    text-align: center;
    color: var(--textPrimários);
  }
`;
