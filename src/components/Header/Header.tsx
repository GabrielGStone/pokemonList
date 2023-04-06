import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { NavigationButton } from "./styles";

interface HeaderProps {
  isHome?: boolean;
}

const Header: FC<HeaderProps> = ({ isHome }) => {
  const navigate = useNavigate();

  return (
    <>
      {isHome ? (
        <NavigationButton onClick={() => navigate("/list")}>
          go to list {"->"}
        </NavigationButton>
      ) : (
        <NavigationButton onClick={() => navigate("/")}>
          go to home {"<-"}
        </NavigationButton>
      )}
    </>
  );
};

export default Header;
