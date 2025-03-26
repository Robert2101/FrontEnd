import "./css/Quiz.css";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import quizData from "../questions";
import QuestionList from "../Components/QuestionList.jsx";
import QuizResultChart from "../Components/QuizResultChart.jsx"; // Import Pie Chart

const Quiz = () => {
    const { category } = useParams();
    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [timer, setTimer] = useState(null);
    const [timeLeft, setTimeLeft] = useState(0);
    const [quizStarted, setQuizStarted] = useState(false);
    const [selectedTime, setSelectedTime] = useState(300);

    useEffect(() => {
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
        setQuizStarted(false);
        if (timer) clearInterval(timer);
    };

    const startQuiz = () => {
        setShowResult(false);
        setQuizStarted(true);
        setSelectedAnswers({});
        setTimeLeft(selectedTime);

        const countdown = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(countdown);
                    handleSubmit();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        setTimer(countdown);
    };

    const progress = (Object.keys(selectedAnswers).length / questions.length) * 100;

    return (
        <div className={`quiz-page ${category?.toLowerCase() || ""}`}>
            <div className="quiz-container">
                <h2>{category?.toUpperCase()} Quiz</h2>

                {!quizStarted && !showResult && (
                    <div className="timer-selection">
                        <label>Select Timer Duration:</label>
                        <select onChange={(e) => setSelectedTime(Number(e.target.value))} value={selectedTime}>
                            <option value={60}>1 min</option>
                            <option value={180}>3 min</option>
                            <option value={300}>5 min</option>
                            <option value={600}>10 min</option>
                        </select>
                        <button className="start-btn" onClick={startQuiz}>Start Timer</button>
                    </div>
                )}

                {quizStarted && !showResult && (
                    <div className="timer-display">
                        <h3>Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</h3>
                    </div>
                )}

                {quizStarted && !showResult && (
                    <>
                        <div className="progress-bar-container">
                            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                        </div>
                        <QuestionList 
                            questions={questions} 
                            selectedAnswers={selectedAnswers} 
                            handleAnswerSelect={handleAnswerSelect} 
                        />
                        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                    </>
                )}

                {showResult && (
                    <div className="result">
                        <h3>Your Score: {score} / {questions.length}</h3>
                        <QuizResultChart score={score} total={questions.length} /> {/* Added Pie Chart */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;