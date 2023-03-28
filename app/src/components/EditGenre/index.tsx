import { Pencil } from "../../assets/icons/pencil";
import * as S from "./style";

const EditGenre = () => {
  return (
    <S.EditGenre>
      <>
        <S.EditGenreDetails>
          <S.EditGenreDetailsName>Número da mesa</S.EditGenreDetailsName>
        </S.EditGenreDetails>
        <S.EditGenreAction>
          <Pencil /> Editar
        </S.EditGenreAction>
      </>
      <>
        <label htmlFor="genreId">Nome do gênero</label>
        <S.EditForm 
        id="genreId"
        type='text'
        placeholder="Ação"
        />
        <S.Deletar>Deletar Gênero</S.Deletar>
      </>
    </S.EditGenre>
  );
};

export default EditGenre;
