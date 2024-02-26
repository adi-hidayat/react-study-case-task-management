import React from "react"
import {Row, Alert, Button} from "react-bootstrap";

const ListTasks = (props) => {
    const tasks = props.tasks
    const tasksElement = [];
    if (tasks.length > 0) {
        for (let i = 0; i<tasks.length; i++) {
            tasksElement.push(
                <Alert key={tasks[i].id}>
                    {tasks[i].title} - {tasks[i].date}
                    <Button onClick={() => props.onDelete(tasks[i].id)} className={"btn-warning float-end"}>Delete</Button>
                    <Button onClick={() => props.onEdit(tasks[i].id)} className={"float-end mx-2"}>Edit</Button>
                </Alert>
            )
        }
    }

    return (
        <Row>
            {tasksElement}
        </Row>
    )
}

export default ListTasks