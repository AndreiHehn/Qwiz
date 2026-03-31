import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const Container = styled.aside<Props>`
  height: 100dvh;
  width: ${(props) => (props.isOpen ? "220px" : "60px")};
  background-color: var(--sidebar-color);
  transition: 0.5s ease-in-out;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;

  .sidebar-logo {
    margin-top: 5px;
    margin-bottom: 20px;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  .sidebar-categories {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    gap: 10px;
  }

  .categories-title {
    color: #fff;
    font-size: 22px;
    text-align: center;
    border-bottom: 2px solid #fff;
  }

  .sidebar-footer {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    position: absolute;
    bottom: 10px;
  }
`;
