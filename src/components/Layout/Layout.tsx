import { FC } from "react";
import { LayoutBox } from "./styles";

interface LayoutProps {
  children: any;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <LayoutBox>{children}</LayoutBox>;
};

export default Layout;
