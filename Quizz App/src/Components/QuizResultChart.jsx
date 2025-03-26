import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register required Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const QuizResultChart = ({ score, total }) => {
    const incorrect = total - score;

    const data = {
        labels: ["Correct Answers", "Incorrect Answers"],
        datasets: [
            {
                data: [score, incorrect],
                backgroundColor: ["#4CAF50", "#FF5733"],
                hoverBackgroundColor: ["#45a049", "#ff2e00"]
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false
    };

    return (
        <div style={{ width: "300px", height: "300px", margin: "auto" }}>
            <Pie data={data} options={options} />
        </div>
    );
};

export default QuizResultChart;