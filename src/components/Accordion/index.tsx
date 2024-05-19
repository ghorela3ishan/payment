import { useState } from "react";
import {
  Wrapper,
  Header,
  AccordionContent,
  Transaction,
  Icon,
  Btn,
  Footer,
} from "./styles";
import DownArr from "../../../public/assets/actions/down-arrow.svg";
import { TAccordion } from "./types";

const Accordion = ({
  heading,
  children,
  handleClick,
  isOpen,
  footerCta,
  footerText,
}: TAccordion) => {
  return (
    <Wrapper className={isOpen ? "open" : "closed"}>
      <Header onClick={handleClick}>
        <p>{heading}</p>
        <Btn $isActive={isOpen}>
          <DownArr />
        </Btn>
      </Header>
      {isOpen && (
        <AccordionContent>
          {children}
          <Footer href={footerCta}>{footerText}</Footer>
        </AccordionContent>
      )}
    </Wrapper>
  );
};

export default Accordion;
