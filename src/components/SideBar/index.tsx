import Logo from "../../../public/assets/Logo.svg";
import Home from "../../../public/assets/Home.svg";
import Account from "../../../public/assets/Account.svg";
import Card from "../../../public/assets/Card.svg";
import Credit from "../../../public/assets/Credit.svg";
import Paymnents from "../../../public/assets/Payments.svg";
import { NavItems, NavBar, SubTitle, NavItem } from "./styles";
import Link from "next/link";

const SIDE_NAV_ITEMS = [
  {
    label: "Home",
    Icon: Home,
    path: "/",
  },
  {
    label: "Cards",
    Icon: Card,
    path: "/",
  },
  {
    label: "Payments",
    Icon: Paymnents,
    path: "/",
  },
  {
    label: "Credit",
    Icon: Credit,
    path: "/",
  },
  {
    label: "Settings",
    Icon: Account,
    path: "/",
  },
];

const SideBar = () => {
  return (
    <NavBar>
      <Logo />
      <SubTitle>
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </SubTitle>
      <NavItems>
        {SIDE_NAV_ITEMS.map((item) => {
          const { label, Icon } = item;
          return (
            <Link href="/" key={label}>
              <NavItem>
                <Icon />
                <span>{label}</span>
              </NavItem>
            </Link>
          );
        })}
      </NavItems>
    </NavBar>
  );
};

export default SideBar;
