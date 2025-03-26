import "./css/Profile.css";
import React, { useState, useEffect } from "react";

const Profile = () => {
    const [quizHistory, setQuizHistory] = useState([]);

    useEffect(() => {
        const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
        setQuizHistory(history);
    }, []);

    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            <h3>Quiz History</h3>
            {quizHistory.length === 0 ? (
                <p>No quizzes attempted yet.</p>
            ) : (
                <ul>
                    {quizHistory.map((quiz, index) => (
                        <li key={index}>
                            <strong>Category:</strong> {quiz.category} <br />
                            <strong>Score:</strong> {quiz.score}/{quiz.total} <br />
                            <strong>Progress:</strong> {quiz.progress}% completed <br />
                            <strong>Date:</strong> {quiz.date}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Profile;