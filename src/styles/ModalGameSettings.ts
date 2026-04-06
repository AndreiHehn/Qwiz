import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;

  .difficulty-selection,
  .game-lenght-selection {
    display: flex;
    justify-content: space-around;
  }

  .section-separator {
    margin-top: 20px;

    .section-title {
      color: var(--text-primary);
      font-size: 16px;
      font-weight: 600;
    }

    .section-line {
      width: 100%;
      height: 0;
      border: none;
      border-top: 2px solid var(--text-primary);
      margin-bottom: 10px;
    }
  }
  .footer-buttons {
    display: flex;
    justify-content: end;
    margin-top: 10px;
    gap: 10px;
  }
`;
