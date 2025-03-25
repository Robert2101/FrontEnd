import React from "react";

const Question = ({ index, question, selectedAnswer, handleAnswerSelect }) => {
    return (
        <div className="question">
            <h3>{index + 1}. {question.question}</h3>
            <div className="options">
                {question.options.map((option, i) => (
                    <button 
                        key={i} 
                        className={selectedAnswer === option ? "selected" : ""}
                        onClick={() => handleAnswerSelect(index, option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;