'use client';
import { Container, Nav, Navbar, NavbarBrand, NavbarToggle, NavLink } from "react-bootstrap";

export default function BarraNavegacao() {
    return(
        <>
 <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavbarBrand href="#home">Produtos</NavbarBrand>
          <Nav className="me-auto">
            <NavLink href="#home">Alunos</NavLink>
            
            
          </Nav>
        </Container>
      </Navbar>
        
        </>
    )
}