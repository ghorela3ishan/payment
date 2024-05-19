export type TItem = {
  id: number;
  title: string;
  date: string;
  type: "CREDIT" | "DEBIT";
  amount: string;
  desc: string;
  category: "SHOPPING" | "ENTERTAINMENT" | "TRAVEL";
};
