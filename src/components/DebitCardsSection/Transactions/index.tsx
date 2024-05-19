import Accordion from "@/components/Accordion";
import { useState } from "react";
import { TransactionWrapper } from "./styles";
import Item from "./TransactionItem";
import { TItem } from "./TransactionItem/types";

const Transactions = () => {
  const [activeAcc, setActiveAcc] = useState(0);
  const handleAccClick = (id: number) => {
    if (activeAcc && activeAcc === id) {
      setActiveAcc(0);
      return;
    }
    setActiveAcc(id);
  };

  const data: TItem[] = [
    {
      id: 1,
      title: "Hamleys",
      date: "20 May 2020",
      type: "CREDIT",
      amount: "+ S$ 150",
      desc: "Refund on debit card",
      category: "SHOPPING",
    },
    {
      id: 2,
      title: "Hamleys",
      date: "20 May 2020",
      type: "DEBIT",
      amount: "- S$ 150",
      desc: "Charged to debit card",
      category: "TRAVEL",
    },
    {
      id: 3,
      title: "Hamleys",
      date: "20 May 2020",
      type: "CREDIT",
      amount: "- S$ 150",
      desc: "Charged to debit card",
      category: "ENTERTAINMENT",
    },
    {
      id: 4,
      title: "Hamleys",
      date: "20 May 2020",
      type: "CREDIT",
      amount: " S$ 150",
      desc: "Charged to debit card",
      category: "SHOPPING",
    },
  ];

  return (
    <TransactionWrapper>
      <Accordion
        heading="Card Details"
        isOpen={activeAcc === 1}
        handleClick={() => handleAccClick(1)}
      >
        Card Details
      </Accordion>
      <Accordion
        heading="Recent transactions"
        isOpen={activeAcc === 2}
        handleClick={() => handleAccClick(2)}
        footerText="View all card transactions"
      >
        <>
          {data.map((item: TItem) => (
            <Item {...item} key={item.id} />
          ))}
        </>
      </Accordion>
    </TransactionWrapper>
  );
};
export default Transactions;
