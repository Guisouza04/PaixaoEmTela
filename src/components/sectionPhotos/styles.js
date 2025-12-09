import styled from "styled-components";

export const CarrosselContainer = styled.section`
  width: 100%;
  overflow: hidden;
  background-color: #f7f8fa;
  padding: 1.5rem 0 3rem 0;

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

export const CarrosselPhotos = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    gap: 1.5rem;
    padding: 0 2rem;
  }
`;

export const Portrait = styled.div`
  flex: 0 0 85%;
  scroll-snap-align: center;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  /* Let the image determine its own height on mobile (fixes iPhone flattening) */

  @media (min-width: 768px) {
    flex: 0 0 45%;
  }

  @media (min-width: 1024px) {
    flex: 0 0 30%;
  }
`;

export const Photos = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  display: block;
  user-select: none;
  pointer-events: none;
  -webkit-user-drag: none;
`;
