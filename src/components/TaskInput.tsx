
import { useState } from "react";
import type { SubmitEvent } from "react";
import { makeStyles } from "tss-react/mui";

interface TaskInputProps {
    onAddTask: (task: string) => void;
}

function TaskInput({ onAddTask }: TaskInputProps) {
    const { classes } = useStyles();
    const [task, setTask] = useState<string>("");

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (task.trim() === "") return;

        onAddTask(task.trim());
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <input
                type="text"
                className={classes.input}
                placeholder="What needs to be done?"
                value={task}
                onChange={(event) => setTask(event.target.value)}
            />

            <button
                type="submit"
                className={classes.addButton}
                disabled={task.trim() === ""}
            >
                Add Task
            </button>
        </form>
    );
}

export default TaskInput;

const useStyles = makeStyles()({
    form: {
        display: "flex",
        gap: 12,
        width: "100%",
    },
    input: {
        flex: 1,
        minWidth: 0,
        padding: "12px 14px",
        border: "1px solid #D0D5DD",
        borderRadius: 8,
        outline: "none",
        fontSize: 14,
        color: "#344054",
        "&:focus": {
            borderColor: "#3157A4",
            boxShadow: "0 0 0 3px rgba(49, 87, 164, 0.1)",
        },
        "&::placeholder": {
            color: "#98A2B3",
        },
    },
    addButton: {
        border: "none",
        borderRadius: 8,
        padding: "11px 18px",
        backgroundColor: "#3157A4",
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: 600,
        cursor: "pointer",
        whiteSpace: "nowrap",
        "&:hover": {
            backgroundColor: "#254681",
        },
        "&:disabled": {
            opacity: 0.45,
            cursor: "not-allowed",
        },
    },
});
