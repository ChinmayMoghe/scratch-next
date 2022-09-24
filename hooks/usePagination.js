import { useMemo } from "react";

const range = (start, end) => {
  let length = end - start + 1;
  /*
        Create an array of certain length and set the elements within it from
      start value to end value.
    */
  return Array.from({ length }, (_, idx) => idx + start);
};

export const DOTS = "...";
export const usePagination = ({
  totalCount,
  pageSize,
  sibilingCount = 1,
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    //totalCount = 10 pageSize=2 totalPageCount=5
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // total page numbers = siblings count(1) + (first page(1) + last page(1) +currentPage(1)+ 2 * DOTS)
    // totalPageNumbers = 6
    const totalPageNumbers = sibilingCount + 5;

    //CASE 1: total page count is smaller to display dots, so no dots only range
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
    const leftSiblingIndex = Math.max(currentPage - sibilingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + sibilingCount,
      totalPageCount
    );
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    // CASE 2 : only show dots on right side
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * sibilingCount;
      let leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }

    //CASE 3: only display dots on left side
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * sibilingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    //CASE 4: display dots on both sides of current page
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, sibilingCount, currentPage]);
  return paginationRange;
};
