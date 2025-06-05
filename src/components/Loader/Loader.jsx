import { BeatLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <BeatLoader size={35} color="var(--white-text-color)" />
    </div>
  );
};

export default Loader;
