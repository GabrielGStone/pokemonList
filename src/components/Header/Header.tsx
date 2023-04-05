import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  isHome?: boolean;
}

const Header: FC<HeaderProps> = ({ isHome }) => {
  const navigate = useNavigate();

  return (
    <>
      {isHome ? (
        <button onClick={() => navigate("/list")}>list</button>
      ) : (
        <button onClick={() => navigate("/")}>home</button>
      )}
    </>
  );
};

export default Header;
