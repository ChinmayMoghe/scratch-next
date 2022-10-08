import HeroGrid from "@/components/HeroGrid";
import Pagination from "@/components/Pagination";
import Tesseract from "@/components/Tesseract";
import BaseLayout from "layouts/base/base";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "redux/reducers/characters/reducer";
import { getOffset, getPage } from "redux/reducers/characters/selectors";
import { useGetCharactersQuery } from "redux/service/service";

import style from "./style.module.css";

export default function MarvelHeros() {
  const dispatch = useDispatch();
  const page = useSelector(getPage);
  const offset = useSelector(getOffset);
  const { data, error, isLoading } = useGetCharactersQuery((page - 1) * offset);

  const onPageChange = (page) => dispatch(setPage(page));

  return (
    <>
      <Head>
        <title>MARVEL</title>
      </Head>
      <div>
        {isLoading && (
          <div className={style.loader_container}>
            <Tesseract />
          </div>
        )}
        {data && (
          <>
            <HeroGrid list={data?.results} />
            <Pagination
              currentPage={page}
              pageSize={data?.limit}
              totalCount={data?.total}
              onPageChange={onPageChange}
            />
          </>
        )}
      </div>
    </>
  );
}

MarvelHeros.getLayout = function (page) {
  return <BaseLayout>{page}</BaseLayout>;
};
