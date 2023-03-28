import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../types/routes";
import BoxLogin from "../../components/BoxLogin/index";
import * as S from "../Login/style";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(RoutePath.HOME)
  }

  return (
    <S.Login>
      <S.LoginContent>
        <BoxLogin 
        onSubmitData={handleSubmit}
        errorMessage={errorMessage}
        />
      </S.LoginContent>
    </S.Login>
  );
};

export default Login;
