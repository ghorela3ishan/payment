import {
  BalanceText,
  Currency,
  InfoRow,
  CurrNumber,
  Btn,
  CurrWrapper,
  Main,
} from "./styles";
import Box from "../../../public/assets/box.svg";
import Tabs from "../Tabs";
import { useState } from "react";
import DebitCardsSection from "../DebitCardsSection";

const TAB_ITEMS = [
  { label: "My debit cards", id: 1 },
  { label: "All company cards", id: 2 },
];

const InfoPanel = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <Main>
      <BalanceText>Available balance</BalanceText>
      <InfoRow>
        <CurrWrapper>
          <Currency>S$</Currency>
          <CurrNumber>3000</CurrNumber>
        </CurrWrapper>
        <Btn>
          <Box /> <span>New Card</span>
        </Btn>
      </InfoRow>
      <Tabs
        items={TAB_ITEMS}
        activeLabelId={activeTab}
        handleClick={handleTabClick}
      >
        <DebitCardsSection />
      </Tabs>
    </Main>
  );
};

export default InfoPanel;
