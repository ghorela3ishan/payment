import { ActionItem, Actions } from "./styles";
import Deactivate from "../../../../../public/assets/actions/Deactivate.svg";
import Freeze from "../../../../../public/assets/actions/Freez.svg";
import GPay from "../../../../../public/assets/actions/GPay.svg";
import Replace from "../../../../../public/assets/actions/Replace.svg";
import Spendlimit from "../../../../../public/assets/actions/Spendlimit.svg";

const ACTIONS = [
  {
    label: "Freeze card",
    Svg: Freeze,
    id: 1,
  },
  {
    label: "Set spend limit",
    Svg: Spendlimit,
    id: 1,
  },
  {
    label: "Add to GPay",
    Svg: GPay,
    id: 1,
  },
  {
    label: "Replace card",
    Svg: Replace,
    id: 1,
  },
  {
    label: "Cancel card",
    Svg: Deactivate,
    id: 1,
  },
];

const ActionPanel = () => {
  const handleItemClick = (id: number) => {};
  return (
    <Actions>
      {ACTIONS.map((item) => {
        const { id, label, Svg } = item;
        return (
          <ActionItem key={id} onClick={() => handleItemClick(id)}>
            <Svg />
            <span>{label}</span>
          </ActionItem>
        );
      })}
    </Actions>
  );
};

export default ActionPanel;
