import React from "react";
import Spinner from "../../Utilities/Spinner";
import {  PageLayout } from "../../components";
import useFetchData from "../../Hooks/useFetchData";
import { Row, Col } from "react-bootstrap";
import { Personcard } from "../../components";
import useInfiniteScroll from "../../Hooks/useInfiniteScroll";

export default function Person() {
  const { error, data,setPage,newData } = useFetchData("person/popular");
  const [isFetching, SetisFetching] = useInfiniteScroll(fetchMore);


  function fetchMore() {
    setTimeout(() => {
      setPage((prev) => prev + 1);
      SetisFetching(false);
    }, 5000);
  }
  if (!data) return <Spinner />;
  return (
    <PageLayout heading="Trending People" error={error}>
      <Row className="gy-2">
        {[...newData,...data].map((person) => (
          <Col xs={6} md={3} xl={2} key={person.id}>
            <Personcard {...person} />
          </Col>
        ))}
      </Row>
      {isFetching &&<Spinner/>}
    </PageLayout>
  );
}
