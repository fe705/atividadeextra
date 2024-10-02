'use client';


import { useEffect, useState } from "react";
import { Row, Col, Card, CardImg } from "react-bootstrap";
import BarraNavegacao from "../components/BarraNavegacao";

export default function page(props) {
  const [users, setUsers] = useState({})

  useEffect(() => {
    buscarUsuario()
  }, [])

  async function buscarUsuario() {
    const result = await axios.get("https://dummyjson.com/products/" + props.params.id)

    const userRecebido = result.data;

    console.log(userRecebido);

    setUsers(userRecebido);
  }

  return (
    <>
      <BarraNavegacao />
      {users.id && (
        <div className="py-4 d-flex justify-content-center align-items-center vh-100">
          <Row>
            <Card style={{ width: '100%' }}>

              <Col md={3}>
                <CardImg src={users.image} />
              </Col>

              <Col md={9}>
                <p><b>Nome: </b>{users.firstName} {users.lastName}</p>
                <p><b>Idade: </b>{users.age} anos</p>
                <p><b>Data de Nascimento: </b>{users.birthDate}</p>
                <p><b>Gênero: </b>{users.gender}</p>
                <p><b>Email: </b>{users.email}</p>
                <p><b>Telefone: </b>{users.phone}</p>
                <p><b>Universidade:</b> {users.university}</p>
              </Col>
            </Card>

          </Row>
        </div>
      )}
    </>
  )
}