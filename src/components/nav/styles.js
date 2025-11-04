import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 100vw;
  padding: 1rem;
  height: auto;
  transition: height 0.3s ease-in-out;
`;

export const ContainerNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerMenu = styled.div`
  display: none;
  opacity: 1;
  transition: all 0.3s ease-in-out;
  max-height: 500px;
  overflow: hidden;

  &[style*="display: none"] {
    opacity: 0;
    max-height: 0;
  }

  li {
    list-style: none;
    color: var(--textSecundários);
    font-weight: 500;
    margin: 1rem 0;
    text-align: center;
  }
`;

export const Logo = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ea5f9d;
`;

export const MenuIcon = styled.img`
  width: 3rem;
  height: 3rem;
`;
