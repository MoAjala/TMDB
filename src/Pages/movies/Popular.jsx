import React from "react";
import { MediaCard, PageLayout } from "../../components";
import useFetchData from "../../Hooks/useFetchData";
import Spinner from "../../Utilities/Spinner";
import { Row,Col } from "react-bootstrap";
import useInfiniteScroll from "../../Hooks/useInfiniteScroll";

export default function Popular() {
  const { error, data,newData,setPage } = useFetchData("movie/popular");
  const [isFetching, SetisFetching] = useInfiniteScroll(fetchMore);


  function fetchMore() {
    setTimeout(() => {
      setPage((prev) => prev + 1);
      SetisFetching(false);
    }, 3000);
  }
  if (!data) return <Spinner />;
  return (
    <PageLayout heading="Popular" error={error}>
    <Row className="gy-2">
      
      {[...newData,...data].map((movie) => (
         <Col xs={6} md={3} xl={2} key={movie.id}>
        <MediaCard {...movie} />
        </Col>
      ))}
    </Row>
    {isFetching &&<Spinner/>}
    </PageLayout>
  );
}
