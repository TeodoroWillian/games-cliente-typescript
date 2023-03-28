import { Add } from "../../assets/icons/add";
import { HTMLAttributes } from "react";
import * as S from "./style";
import EditGame from "../../components/EditGame";

type ManageProductsType = HTMLAttributes<HTMLDivElement>;

type ManageProductsProps = {} & ManageProductsType;

const ManageGames = ({ ...props }: ManageProductsProps) => {
  return (
    <S.ManageGames {...props}>
      <S.ManageGamesTitle>Gerenciar Jogos</S.ManageGamesTitle>
      <S.ManageGamesSub>
        <b>Jogos</b>
      </S.ManageGamesSub>
      <S.ManageGamesContent>
        <S.ManageGamesContentAdd>
          <Add />
          <span>Adicionar Jogo</span>
        </S.ManageGamesContentAdd>
        <S.AddCard>
          <S.EditForm type="url" placeholder="imagem URL" />
          <S.EditForm type="text" placeholder="Título" />
          <S.EditForm type="text" placeholder="Descrição" />
          <S.EditForm type="number" placeholder="ImdbScore" />
          <S.EditForm type="number" placeholder="Ano de Lançamento" />
          <S.EditForm type="url" placeholder="Trailer URL" />
          <S.EditForm type="url" placeholder="GamePlay URL" />
        </S.AddCard>
       <EditGame />
      </S.ManageGamesContent>
      <S.ManageGamesActions>
        <S.ManageGamesActionsCancel>Cancelar</S.ManageGamesActionsCancel>
        <S.ManageGamesActionsSave>Salvar Mudanças</S.ManageGamesActionsSave>
      </S.ManageGamesActions>
    </S.ManageGames>
  );
};

export default ManageGames;
