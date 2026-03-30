import { Container } from "../styles/Home";
import AppLogo from "../assets/icons/Logo.png";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <Container>
      <img className="app-logo" src={AppLogo} alt="" />
      <h1 className="home-text">
        {t(
          "Welcome to Qwiz! Select a category on the left side bar to get started!",
        )}
      </h1>
    </Container>
  );
}
