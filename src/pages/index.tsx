import tw from "twin.macro";
import styled from "styled-components";
import { MainLayout } from "@/layouts";
import { Todo } from "@/features";

const Title = styled.div`
  ${tw`text-3xl font-bold underline`}
`;

export default function HomePage() {
  return (
    <>
      <MainLayout>
        <Title>666</Title>
        <Todo />
      </MainLayout>
    </>
  );
}
