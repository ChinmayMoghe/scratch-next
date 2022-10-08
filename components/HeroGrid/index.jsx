import { useDispatch } from "react-redux";
import { setCharacter } from "redux/reducers/characters/reducer";
import HeroCard from "../HeroCard";
import style from "./style.module.css";

const HeroGrid = ({ list }) => {
  const dispatch = useDispatch();

  return (
    <div className={style.img_grid}>
      {list?.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
};

export default HeroGrid;
