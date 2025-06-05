import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const Searchbox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div className={s.searchBox}>
      <p className={s.searchTitle}>Find contacts by name</p>
      <label>
        <input
          className={s.searchInput}
          type="text"
          name="text"
          value={value}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};
export default Searchbox;
