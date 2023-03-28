import { Add } from '../../assets/icons/add';
import { HTMLAttributes } from 'react';
import * as S from './style'
import EditGenre from '../../components/EditGenre';

type ManageGenresType = HTMLAttributes<HTMLDivElement>
type ManageGenresProps = {} & ManageGenresType;

const ManageGenres = ({...props}:ManageGenresProps) => {
  return(
    <S.ManageGenres {...props}>
      <S.ManageGenresTitle>Gerenciar Gêneros</S.ManageGenresTitle>
      <S.ManageGenresSub>
        <b>Gêneros</b>
      </S.ManageGenresSub>
      <S.ManageGenresContent>
        <S.ManageGenresContentAdd>
          <Add />
          <span>Adicionar Gênero</span>
        </S.ManageGenresContentAdd>
        <S.ManageGenresContentAdd>
          <label htmlFor="genreId">Nome do Gênero</label>
          <S.EditForm 
          id='genreId'
          type='text'
          placeholder='Ação'
          />
        </S.ManageGenresContentAdd>
        <EditGenre />
      </S.ManageGenresContent>
      <S.ManageGenresActions>
        <S.ManageGenresActionsCancel>Cancelar</S.ManageGenresActionsCancel>
        <S.ManageGenresActionsSave>Salvar Mudanças</S.ManageGenresActionsSave>
      </S.ManageGenresActions>
    </S.ManageGenres>
  )
}

export default ManageGenres;