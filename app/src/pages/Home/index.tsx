import Menu from "../../components/Menu/index";
import { DateTime } from "luxon";
import { Search } from "../../assets/icons/search";
import * as S from "../Home/style";
import { RoutePath } from "../../types/routes";
import { navigationItems } from "../../data/navigation";
import GameItemList from "../../components/GameItemList";
import GameItem from "../../components/GameItem";
import GameDetails from "../../components/GameDetails";
import Overlay from "../../components/Overlay";
import { useNavigate } from "react-router-dom";
import { games } from "../../mocks/games";
import { GameResponse } from "types/Game";

const Home = () => {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });

  const navigate = useNavigate();
  const handleNavigation = (path: RoutePath) => navigate(path);

  const handleSelection = (game:GameResponse) => {}

  return (
    <S.Home>
      <Menu
        active={RoutePath.HOME}
        navItems={navigationItems}
        onNavigate={handleNavigation}
        onLogout={() => navigate(RoutePath.LOGIN)}
      />
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>Games</S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>
                {dateDescription}
              </S.HomeHeaderDetailsDate>
            </div>
            <S.HomeHeaderDetailsSearch>
              <Search />
              <input type="text" placeholder="Procure pelo nome" />
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeGameTitle>
            <b>Jogos</b>
          </S.HomeGameTitle>
          <S.HomeGameList>
            <GameItemList>
              {Boolean(games.length) &&
                games.map((game, index) => (
                  <GameItem 
                  game={game} 
                  key={`gameItem-${index}`}
                  onSelect={handleSelection} />
                ))}
            </GameItemList>
          </S.HomeGameList>
        </div>
      </S.HomeContent>
      <aside>
        <GameDetails 
        game={games}
        />
      </aside>
      {/* <Overlay>

      </Overlay> */}
    </S.Home>
  );
};

export default Home;
