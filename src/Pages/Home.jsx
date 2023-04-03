import React, { useEffect } from "react";
import useFetchData from "../Hooks/useFetchData";
import { MediaCard, PageLayout } from "../components";
import { Row, Col } from "react-bootstrap";
import useInfiniteScroll from "../Hooks/useInfiniteScroll";
import Spinner from "../Utilities/Spinner";


export default function Home() {
  const { error, data, setPage,newData} = useFetchData("trending/movie/week");
  const [isFetching, SetisFetching] = useInfiniteScroll(fetchMore);


  function fetchMore() {
    setTimeout(() => {
      setPage((prev) => prev + 1);
      SetisFetching(false);
    }, 5000);
  }


  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <PageLayout heading={"Trending Movies"} error={error}>
      <Row className="gy-2">
        {[...newData,...data].map((movie) => (
          <Col xs={6} md={3} xl={2} key={movie.id}>
            <MediaCard {...movie} key={movie.id} />
          </Col>
        ))}
      </Row>
      {isFetching &&<Spinner/>}
    </PageLayout>
  );
}
