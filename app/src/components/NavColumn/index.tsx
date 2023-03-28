import { Sword } from "../../assets/icons/Sword";
import { Info } from "../../assets/icons/info";
import { Users } from "../../assets/icons/users";
import * as S from "./style";
import { RoutePath } from "../../types/routes";
import NavColumnItem from "../../components/NavColumnItem";
import { HTMLAttributes } from "react";


type NavColumnType = HTMLAttributes<HTMLDivElement>;

type NavColumnProps = {
  activeRoute: RoutePath;
} & NavColumnType;

const NavColumn = ({activeRoute}: NavColumnProps) => {
  const items = [
    {
      icon:<Sword />,
      title:"Customize o Gênero do jogo",
      subtitle: "Adicione Gêneros, configure nomes",
      navigation: RoutePath.SETTINGS_GENRE,
    },
    {
      icon:<Info />,
      title:"Gerenciar Jogos",
      subtitle: "Edite os jogos, nome, score, etc",
      navigation: RoutePath.SETTINGS_GAMES,
    },
    {
      icon:<Users />,
      title:"Gerenciar Usuários",
      subtitle: "Gerencia o acesso ao sistema",
      navigation: RoutePath.SETTINGS_USERS,
    }
  ]


  return (
    <S.NavColumn>
      {items.map((i,key) => (
      <NavColumnItem 
      active={i.navigation === activeRoute}
      icon={i.icon}
      title={i.title}
      key={key}
      subtitle={i.subtitle}
      />
      ))}
    </S.NavColumn>
  )
}
export default NavColumn;
