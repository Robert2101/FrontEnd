import "./css/Quiz.css";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import quizData from "../questions"; // Importing local questions
import QuestionList from "../Components/QuestionList.jsx";

const Quiz = () => {
    const { category } = useParams();
    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        // ✅ Load questions from questions.jsx instead of AI
        setQuestions(quizData[category] || []);
    }, [category]);

    const handleAnswerSelect = useCallback((questionIndex, selectedOption) => {
        setSelectedAnswers(prev => ({ ...prev, [questionIndex]: selectedOption }));
    }, []);

    const score = useMemo(() => {
        return questions.reduce((acc, q, index) => acc + (selectedAnswers[index] === q.answer ? 1 : 0), 0);
    }, [selectedAnswers, questions]);

    const handleSubmit = () => {
        setShowResult(true);
    };

    const progress = (Object.keys(selectedAnswers).length / questions.length) * 100;

    return (
        <div className={`quiz-page ${category?.toLowerCase() || ""}`}>
            <div className="quiz-container">
                <h2>{category?.toUpperCase()} Quiz</h2>

                <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>

                {showResult ? (
                    <div className="result">
                        <h3>Your Score: {score} / {questions.length}</h3>
                    </div>
                ) : (
                    <>
                        <QuestionList 
                            questions={questions} 
                            selectedAnswers={selectedAnswers} 
                            handleAnswerSelect={handleAnswerSelect} 
                        />
                        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Quiz;