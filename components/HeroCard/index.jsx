import Image from "next/image";
import StyledLink from "../StyledLink";
import style from "./style.module.css";

const HeroCard = ({ hero }) => {
  const { urls } = hero;
  const { url } = urls.find((url) => url.type === "detail");
  return (
    <div className={style.card} title={hero.description}>
      <Image
        priority={hero.id}
        src={`${hero.thumbnail.path}/portrait_fantastic.${hero.thumbnail.extension}`}
        width="168px"
        height="252px"
        alt={hero.name}
      />
      <p className={style.hero_name}>
        <StyledLink style={{ color: "white" }} href={url} target="_blank">
          {hero.name}
        </StyledLink>
      </p>
    </div>
  );
};

export default HeroCard;
