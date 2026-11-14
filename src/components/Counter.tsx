
import { useState } from "react";
import { makeStyles } from "tss-react/mui";

function Counter() {
    const { classes } = useStyles();
    const [count, setCount] = useState<number>(0);

    function increment() {
        setCount((previousCount) => previousCount + 1);
    }

    function decrement() {
        setCount((previousCount) => Math.max(0, previousCount - 1));
    }

    function reset() {
        setCount(0);
    }

    return (
        <div className={classes.card}>
            <div className={classes.header}>
                <div>
                    <h2 className={classes.heading}>Counter</h2>
                    <p className={classes.subtitle}>
                        Practise React state and events.
                    </p>
                </div>

                <span className={classes.badge}>useState</span>
            </div>

            <div className={classes.countContainer}>
                <span className={classes.count}>{count}</span>
                <span className={classes.countLabel}>Current count</span>
            </div>

            <div className={classes.actions}>
                <button
                    className={classes.secondaryButton}
                    onClick={decrement}
                    disabled={count === 0}
                >
                    Decrease
                </button>

                <button
                    className={classes.primaryButton}
                    onClick={increment}
                >
                    Increase
                </button>

                <button
                    className={classes.textButton}
                    onClick={reset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;

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
    },
    countContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "28px 0",
        gap: 6,
    },
    count: {
        fontSize: 48,
        fontWeight: 700,
        color: "#3157A4",
        lineHeight: 1.2,
    },
    countLabel: {
        fontSize: 13,
        color: "#737B8C",
    },
    actions: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap",
    },
    primaryButton: {
        border: "none",
        borderRadius: 8,
        padding: "11px 20px",
        backgroundColor: "#3157A4",
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: 600,
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#254681",
        },
    },
    secondaryButton: {
        border: "1px solid #D0D5DD",
        borderRadius: 8,
        padding: "10px 18px",
        backgroundColor: "#FFFFFF",
        color: "#344054",
        fontSize: 14,
        cursor: "pointer",
        "&:disabled": {
            opacity: 0.45,
            cursor: "not-allowed",
        },
    },
    textButton: {
        border: "none",
        backgroundColor: "transparent",
        color: "#667085",
        padding: 10,
        fontSize: 14,
        cursor: "pointer",
        "&:hover": {
            color: "#3157A4",
        },
    },
});
