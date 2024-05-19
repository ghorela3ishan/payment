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
    path: "/cards",
  },
  {
    label: "Payments",
    Icon: Paymnents,
    path: "/payments",
  },
  {
    label: "Credit",
    Icon: Credit,
    path: "/credit",
  },
  {
    label: "Settings",
    Icon: Account,
    path: "/settings",
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
          const { label, Icon, path } = item;
          return (
            <Link href={path} key={label}>
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
