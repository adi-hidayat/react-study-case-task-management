import React from "react";
import {createRoot, render} from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tasks from "./pages/Tasks";

const containerApp = document.getElementById('root')
const root = createRoot(containerApp)

root.render(
    <Tasks/>
)