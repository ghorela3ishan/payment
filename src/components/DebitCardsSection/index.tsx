import Cards from "./Cards";
import Transactions from "./Transactions";
import { Container } from "./styles";

const DebitCardsSection = () => {
  return (
    <Container>
      <Cards />
      <Transactions />
    </Container>
  );
};
export default DebitCardsSection;
