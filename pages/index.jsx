import Hero from "@/components/hero";
import Pagination from "@/components/Pagination";
import BaseLayout from "layouts/base";
import { useState, useEffect } from "react";
import { useGetCharactersQuery } from "redux/service/service";

export default function MarvelHeros() {
  const [page, setPage] = useState(1);
  const offset = 20;
  const { data, error, isLoading } = useGetCharactersQuery((page - 1) * offset);

  return (
    <div>
      <Hero list={data?.results} />

      {data && (
        <Pagination
          currentPage={page}
          pageSize={data?.limit}
          totalCount={data?.total}
          onPageChange={setPage}
        />
      )}
    </div>
  );
}

MarvelHeros.getLayout = function (page) {
  return <BaseLayout>{page}</BaseLayout>;
};
