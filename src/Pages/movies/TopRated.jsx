import React from "react";
import  Spinner  from "../../Utilities/Spinner";
import { MediaCard, PageLayout } from "../../components";
import useFetchData  from "../../Hooks/useFetchData";
import { Row,Col } from "react-bootstrap";
import useInfiniteScroll from "../../Hooks/useInfiniteScroll";

export default function TopRated() {
  const { error,setPage,newData, data } = useFetchData("movie/top_rated");
  const [isFetching, SetisFetching] = useInfiniteScroll(fetchMore);


  function fetchMore() {
    setTimeout(() => {
      setPage((prev) => prev + 1);
      SetisFetching(false);
    }, 3000);
  }
  if (!data) return <Spinner />;
  return (
    <PageLayout heading="Top Rated" error={error}>
     <Row className="gy-2">
      
        {[...data,...newData].map((movie) => (
           <Col xs={6} md={3} xl={2} key={movie.id}>
          <MediaCard {...movie} />
          </Col>
        ))}
      </Row>
      {isFetching && <Spinner/>}
    </PageLayout>
  );
}
