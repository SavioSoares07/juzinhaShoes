import { Container, DescriptionContainer, TitleContainer } from "./style";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

export function FAQ({ title, description }) {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <div onClick={() => setActive(!active)}>
        <TitleContainer>
          <p>{title}</p>

          {active ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </TitleContainer>
      </div>

      {/* Render description container only if active is true */}
      {active && (
        <DescriptionContainer>
          <p>{description}</p>
        </DescriptionContainer>
      )}
    </Container>
  );
}
