

import './index.css'

export const TaskList = ({ tasks }) => {
    // console.log('desc', tasks)
    return (
        <> 
            <div className="contentStyle">
                {tasks.map((task) => (
                    <div key={task.id} className={task.completed ? "completed" : ""}>
                        {task.text}
                    </div>
                ))}
            </div>

            

        </>
    )
}