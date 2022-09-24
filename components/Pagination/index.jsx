import cx from "classnames";
import { DOTS, usePagination } from "@hooks/usePagination";
import Svg from "../Svg/Svg";
import style from "./style.module.css";
const Pagination = ({
  onPageChange,
  totalCount,
  currentPage,
  pageSize,
  siblingCount = 1,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  const onNextPage = () => {
    onPageChange(currentPage + 1);
  };
  const onPrevPage = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <ul className={style.pagination}>
      <li>
        <button
          disabled={currentPage === 1}
          onClick={onPrevPage}
          className={cx(style.page_pill)}
        >
          <Svg name="left-arrow" />
        </button>
      </li>
      {paginationRange.map((pageNumber, idx) => {
        if (pageNumber === DOTS) {
          return (
            <li className={cx(style.page_pill)} key={idx}>
              {pageNumber}
            </li>
          );
        } else {
          return (
            <li key={idx}>
              <button
                className={cx(style.page_pill, {
                  [style.current_page]: pageNumber === currentPage,
                })}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          );
        }
      })}
      <li>
        <button onClick={onNextPage} className={cx(style.page_pill)}>
          <Svg name="right-arrow" />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
