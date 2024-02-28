import { ColorChange } from "./ColorChange"
import { TaskList } from "./TaskList"
import './App.css'
export const App = () => {

    const tasks = [{
        id: 1,
        text: "Subir tarea",
        completed:true
    }, {
        id: 2,
        text: "Hacer ejercicio",
        completed: false
    }, {
        id: 3,
        text: "Hacer Compras",
        completed: true
    }, {
        id: 4,
        text: "Hacer la comida",
        completed: true
    }, {
        id: 5,
        text: "Lavar los platos",
        completed: false
    }]

    return (
        <div>
            <div>
                <h5>ColorChange</h5>
                < ColorChange color="green" />
            </div>
            <h5 class="styloTask">TaskList</h5>
            < TaskList tasks={tasks} />
        </div>
    )
}