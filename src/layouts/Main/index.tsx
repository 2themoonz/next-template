import { Container, Main } from "./styles";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ReactNode } from "react";

export interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout = (props: IMainLayoutProps) => {
  const { children } = props;

  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default MainLayout;
