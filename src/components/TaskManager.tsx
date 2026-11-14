
import { useState } from "react";
import { makeStyles } from "tss-react/mui";
import TaskInput from "./TaskInput";

interface Task {
    id: number;
    name: string;
}

function TaskManager() {
    const { classes } = useStyles();

    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, name: "Learn React" },
        { id: 2, name: "Practise TypeScript" },
    ]);

    function addTask(task: string) {
        setTasks((previousTasks) => {
            const nextId =
                Math.max(0, ...previousTasks.map((task) => task.id)) + 1;

            return [...previousTasks, { id: nextId, name: task }];
        });
    }

    function removeTask(id: number) {
        setTasks((previousTasks) =>
            previousTasks.filter((task) => task.id !== id)
        );
    }

    return (
        <div className={classes.card}>
            <div className={classes.header}>
                <div>
                    <h2 className={classes.heading}>My Tasks</h2>
                    <p className={classes.subtitle}>
                        Keep track of what you need to do.
                    </p>
                </div>

                <span className={classes.badge}>
                    {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
                </span>
            </div>

            <TaskInput onAddTask={addTask} />

            <div className={classes.divider} />

            {tasks.length === 0 ? (
                <div className={classes.emptyState}>
                    <h3>No tasks yet</h3>
                    <p>Add your first task to get started!</p>
                </div>
            ) : (
                <div className={classes.taskList}>
                    {tasks.map((task) => (
                        <div key={task.id} className={classes.taskRow}>
                            <span className={classes.taskName}>
                                {task.name}
                            </span>

                            <button
                                className={classes.removeButton}
                                onClick={() => removeTask(task.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default TaskManager;

const useStyles = makeStyles()({
    card: {
        backgroundColor: "#FFFFFF",
        border: "1px solid #E8EAF0",
        borderRadius: 16,
        padding: 28,
        boxShadow: "0 4px 18px rgba(0, 0, 0, 0.04)",
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        marginBottom: 24,
    },
    heading: {
        fontSize: 20,
        fontWeight: 700,
        color: "#344054",
        margin: 0,
    },
    subtitle: {
        fontSize: 14,
        color: "#737B8C",
        margin: "6px 0 0",
    },
    badge: {
        backgroundColor: "#EEF2FF",
        color: "#3157A4",
        padding: "7px 12px",
        borderRadius: 20,
        fontSize: 13,
        fontWeight: 600,
        whiteSpace: "nowrap",
    },
    divider: {
        height: 1,
        backgroundColor: "#EAECF0",
        margin: "24px 0",
    },
    taskList: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
    },
    taskRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        padding: "14px 16px",
        border: "1px solid #EAECF0",
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
    },
    taskName: {
        color: "#344054",
        fontSize: 14,
        fontWeight: 500,
        overflowWrap: "anywhere",
    },
    removeButton: {
        border: "none",
        backgroundColor: "transparent",
        color: "#D64545",
        cursor: "pointer",
        fontSize: 13,
        fontWeight: 600,
        padding: 6,
        "&:hover": {
            color: "#A82D2D",
        },
    },
    emptyState: {
        textAlign: "center",
        padding: 32,
        backgroundColor: "#F8F9FC",
        borderRadius: 12,
        "& h3": {
            margin: "0 0 8px",
            color: "#344054",
        },
        "& p": {
            margin: 0,
            color: "#737B8C",
            fontSize: 14,
        },
    },
});
