/*Alunos: Maria Fernanda (23214290117), Aline Nascimento(23214290132), Davi(23214290046)*/


'use client';

  import { useEffect, useState } from "react";
  import BarraNavegacao from "./components/BarraNavegacao";
  import axios from "axios";
  import { Button, Card, CardBody, CardFooter, CardImg, CardSubtitle, CardTitle, Col, Row, Container } from "react-bootstrap";


export default function page() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("https://dummyjson.com/products/").then((response) => {
      setUsers(response.data.users)
    })
  }, [])

  return (
    <>
      <BarraNavegacao />
      <Container className="mt-3">
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">

          
            <Col >
              <Card className="h-100">
                <CardImg variant="top" />
                <CardBody>
                  <CardTitle></CardTitle>
                  <CardSubtitle></CardSubtitle>
                </CardBody>

                <CardFooter className="text-end">
                  <Button >Detalhes</Button>
                </CardFooter>
              </Card>
            </Col>
          
        </Row>
      </Container>
    </>
  )
}