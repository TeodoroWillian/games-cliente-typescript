import * as S from "./style";
import logo from "../../assets/imgs/Logo.svg";
import ButtonLarge from "../ButtonLarge/index";
import { HTMLAttributes, useState } from "react";

type BoxLoginType = HTMLAttributes<HTMLDivElement>;
export type BoxLoginProps = {
  onSubmitData: (data: { email: string; password: string }) => void;
  errorMessage: string;
} & BoxLoginType;

const BoxLogin = ({ onSubmitData, errorMessage }: BoxLoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (): void => {
    const data = { email, password };
    onSubmitData(data);
  };

  return (
    <S.BoxLogin>
      <S.BoxLoginLogo>
        <S.BoxLoginLogoText>
          <span>Jogos</span>
        </S.BoxLoginLogoText>
        <S.BoxLoginLogoImage src={logo} alt="Logo" />
      </S.BoxLoginLogo>
      <S.BoxLoginForm>
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <ButtonLarge value="Entrar" type="button" 
        onClick={handleSubmit}
        />
      </S.BoxLoginForm>
      {Boolean(errorMessage.length) && <S.BoxLoginError>{errorMessage}</S.BoxLoginError>}
    </S.BoxLogin>
  );
};

export default BoxLogin;
