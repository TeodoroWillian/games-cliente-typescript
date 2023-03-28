import { Add } from "../../assets/icons/add";
import { HTMLAttributes } from "react";
import * as S from "./style";
import EditUser from "../../components/EditUser";

type ManageUsersType = HTMLAttributes<HTMLDivElement>;

type ManageUsersProps = {} & ManageUsersType;

const ManageUsers = ({ ...props }: ManageUsersProps) => {
  return (
    <S.ManageUsers {...props}>
      <S.ManageUsersTitle>Gerenciar Usuários</S.ManageUsersTitle>
      <S.ManageUsersSub>
        <b>Usuários</b>
      </S.ManageUsersSub>
      <S.ManageUsersContent>
        <S.ManageUsersContentAdd>
          <Add />
          <span>Adicionar Usuários</span>
        </S.ManageUsersContentAdd>
        <S.ManageUsersContentAdd>
          <S.EditForm type="text" placeholder="Nome" />
          <S.EditForm type="email" placeholder="E-mail" />
          <S.EditForm type="password" placeholder="Senha" />
          <S.EditForm type="password" placeholder="Confirmar Senha" />
          <S.EditForm type="number" placeholder="CPF" />
          <S.EditForm type="number" placeholder="Ano de Lançamento" />
        </S.ManageUsersContentAdd>
       <EditUser />
      </S.ManageUsersContent>
      <S.ManageUsersActions>
        <S.ManageUsersActionsCancel>Cancelar</S.ManageUsersActionsCancel>
        <S.ManageUsersActionsSave>Salvar Mudanças</S.ManageUsersActionsSave>
      </S.ManageUsersActions>
    </S.ManageUsers>
  );
};

export default ManageUsers;
