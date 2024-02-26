import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = (props) => {
    const totalTask = props.totalTask
    return (
        <div className={"mb-4"}>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Task Management</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Total Task : {totalTask} </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header