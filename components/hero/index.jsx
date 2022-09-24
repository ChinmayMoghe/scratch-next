import Image from "next/image";
import style from "./style.module.css";

const Hero = ({ list }) => {
  return (
    <div className={style.img_grid}>
      {list?.map((hero) => (
        <Image
          priority={hero.id}
          key={hero.id}
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          width="300px"
          height="300px"
          alt={hero.name}
        />
      ))}
    </div>
  );
};

export default Hero;
