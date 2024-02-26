import React from "react"
import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    CardFooter,
    FormGroup,
    FormLabel,
    FormControl,
    Button,
    Alert
} from "react-bootstrap"

import Header from "../master/Header";
import ListTasks from "./Lists";
class Tasks extends React.Component {
    state = {
        tasks : [],
        formError : false
    }

    storeTask = () => {
        let tasks = this.state.tasks
        let taskId = document.getElementsByName('id')[0].value
        let taskTitle = document.getElementsByName('title')[0].value
        let taskDate = document.getElementsByName('date')[0].value

        if (taskId.length === 0) {
            taskId = this.generateRandomStr(10)
        }

        let filteredTasks = tasks.filter(task => task.id !== taskId)

        let newTask = {
            id : taskId,
            title : taskTitle,
            date : taskDate
        }

        if (newTask.title.length === 0 || newTask.date.length === 0) {
            this.setState({formError:true})
            return false;
        }
    
        const updateTask = [...filteredTasks, newTask];
        this.setState({tasks:updateTask})
        this.setState({formError:false})

        document.getElementsByName('id')[0].value = ''
        document.getElementsByName('title')[0].value = '' 
        document.getElementsByName('date')[0].value = ''
    }

    getTaskById = (taskId) => {
        let task = this.state.tasks.filter(task => task.id === taskId)

        if (task.length > 0) {
            document.getElementsByName('id')[0].value = task[0].id
            document.getElementsByName('title')[0].value = task[0].title
            document.getElementsByName('date')[0].value = task[0].date
        }
    }

    deleteTask = (taskId) => {
        let tasks = this.state.tasks
        let activeTasks = tasks.filter(task => task.id !== taskId)
        this.setState({tasks:activeTasks})
    }

    generateRandomStr = (length)=> {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
    }

    render() {
        return (
            <Container className={"mt-4"}>
                <Header totalTask={this.state.tasks.length}></Header>
                <Row>
                    <Col className={"col-md-5"}>
                        <Card>
                            <CardTitle className={"p-3"}>
                                Task
                            </CardTitle>
                            <CardBody>
                                { this.state.formError && 
                                    <Alert className={"alert-danger"}>
                                        Please complete the input
                                    </Alert>
                                }
                                <FormGroup>
                                    <FormControl type={"hidden"} name={"id"}/>
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>Task</FormLabel>
                                    <FormControl name={"title"}/>
                                </FormGroup>
                                <FormGroup className={"mt-2"}>
                                    <FormLabel>Date</FormLabel>
                                    <FormControl name={"date"} type={"date"}/>
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <Button onClick={this.storeTask} className={"btn btn-success"}>Save</Button>
                                <Button className={"btn btn-warning mx-2"}>Cancel</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col className={"col-md-7"}>
                        <ListTasks onDelete={this.deleteTask} onEdit={this.getTaskById} tasks={this.state.tasks}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Tasks