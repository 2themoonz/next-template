/* eslint-disable react/jsx-no-undef */
import { useRouter } from "next/router";
import { Container, NavLink, NavTitle, NavWrapper, Wrapper } from "./styles";

/* eslint-disable-next-line */
export interface HeaderProps {}

export const GRAY = "#6E6D7A";
export const PINK = "#EA4B89";
export function Header(props: HeaderProps) {
  const router = useRouter();

  const onClick = () => {
    // eslint-disable-next-line no-empty
    if (window.location.pathname !== "/") {
    }
  };

  return (
    <Container>
      <Wrapper>
        <NavTitle onClick={onClick}>next-template</NavTitle>

        <NavWrapper>
          <NavLink href="#">Menu-1</NavLink>
          <NavLink href="#">Login</NavLink>
        </NavWrapper>
      </Wrapper>
    </Container>
  );
}

export default Header;
