import Shopping from "../../../../../public/assets/transaction/file-storage.svg";
import Flight from "../../../../../public/assets/transaction/flights.svg";
import Entt from "../../../../../public/assets/transaction/megaphone.svg";
import Next from "../../../../../public/assets/next.svg";
import Wallet from "../../../../../public/assets/business-and-finance.svg";

import {
  Container,
  ItemMeta,
  Icon,
  Amount,
  Title,
  DateInfo,
  Desc,
  Info,
  WalletWrapper,
  DescWrapper,
} from "./styles";
import { TItem } from "./types";

const getIconInfo = (category: string) => {
  let IconSvg;
  let color;
  switch (category) {
    case "SHOPPING":
      IconSvg = Shopping;
      color = "#009DFF1A";
      break;
    case "ENTERTAINMENT":
      IconSvg = Entt;
      color = "#F251951A";
      break;
    case "TRAVEL":
      IconSvg = Flight;
      color = "#00D6B51A";
      break;
  }

  return { IconSvg, color };
};

const Item = ({ title, date, type, amount, desc, category }: TItem) => {
  const { IconSvg, color } = getIconInfo(category);
  return (
    <Container>
      <ItemMeta>
        <Icon $color={color as string}>
          <IconSvg />
        </Icon>
        <Info>
          <Title>{title}</Title>
          <DateInfo>{date}</DateInfo>
          <DescWrapper>
            <WalletWrapper>
              <Wallet />
            </WalletWrapper>
            <Desc>{desc}</Desc>
          </DescWrapper>
        </Info>
      </ItemMeta>
      <Amount>
        <span>{amount}</span>
        <span>
          <Next />
        </span>
      </Amount>
    </Container>
  );
};
export default Item;
