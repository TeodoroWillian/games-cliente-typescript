import { Pencil } from "../../assets/icons/pencil";
import * as S from "./style";

const EditUser = () => {
  return (
    <S.EditUser>
      <>
        <S.EditUserDetails>
          <S.EditUserDetailsImageWrap>
            <S.EditUserDetailsImage src="" alt="Foto de ..." />
            <S.EditUserDetailsTitle>Nome</S.EditUserDetailsTitle>
            <S.EditUserDetailsText>
              <b>Usuário:</b> {/*usuário*/}
            </S.EditUserDetailsText>
          </S.EditUserDetailsImageWrap>
        </S.EditUserDetails>
        <S.EditUserAction>
          <Pencil /> Editar
        </S.EditUserAction>
      </>
      <S.EditFormGroup>
        <S.EditForm type="text" placeholder="Nome" />
        <S.EditForm type="email" placeholder="E-mail" />
        <S.EditForm type="password" placeholder="Senh" />
        <S.EditForm type="password" placeholder="Confirmar Senha" />
        <S.EditForm type="number" placeholder="CPF" />
        <S.Delete>Deletar</S.Delete>
      </S.EditFormGroup>
    </S.EditUser>
  );
};

export default EditUser;
