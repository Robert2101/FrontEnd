import React from "react";
import Question from "./Question";

const QuestionList = ({ questions, selectedAnswers, handleAnswerSelect }) => {
    return (
        <div className="question-box">
            {questions.map((q, index) => (
                <Question 
                    key={index}
                    index={index}
                    question={q}
                    selectedAnswer={selectedAnswers[index]}
                    handleAnswerSelect={handleAnswerSelect}
                />
            ))}
        </div>
    );
};

export default QuestionList;