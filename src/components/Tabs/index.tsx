import { Container, TabItem, TabItems, Content } from "./styles";
import { TTabs } from "./types";

const Tabs = ({ items, activeLabelId, handleClick, children }: TTabs) => {
  return (
    <Container>
      <TabItems>
        {items.map((item) => {
          const { label, id } = item;
          return (
            <TabItem
              onClick={() => handleClick(id as number)}
              $isActive={activeLabelId === id}
              key={label}
            >
              {label}
            </TabItem>
          );
        })}
      </TabItems>
      <Content>{children}</Content>
    </Container>
  );
};

export default Tabs;
