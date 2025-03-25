import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category, title, description }) => {
    const navigate = useNavigate();

    return (
        <div className={`category-card ${category}`} onClick={() => navigate(`/quiz/${category}`)}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default CategoryCard;