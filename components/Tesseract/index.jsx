import style from "./style.module.css";
import cx from "classnames";
const Tesseract = () => {
  return (
    <div className={style.tesseract}>
      <div className={cx(style.face, style.face_1)}></div>
      <div className={cx(style.face, style.face_2)}></div>
      <div className={cx(style.face, style.face_3)}></div>
      <div className={cx(style.face, style.face_4)}></div>
      <div className={cx(style.face, style.face_5)} />
      <div className={cx(style.face, style.face_6)} />
    </div>
  );
};

export default Tesseract;
