import React from "react";
import CategoryCard from "./CategoryCard";

const categoriesData = [
    { category: "c", title: "C", description: "Challenge yourself with C programming questions." },
    { category: "cpp", title: "C++", description: "Test your knowledge in C++ concepts and OOP." },
    { category: "python", title: "Python", description: "Explore Python's syntax, libraries, and logic." },
    { category: "dsa", title: "DSA", description: "Data Structures & Algorithms quiz for problem solvers." },
    { category: "html", title: "HTML", description: "Assess your web development skills with HTML quizzes." },
    { category: "sql", title: "SQL", description: "Test your database management and SQL query skills." },
];

const Categories = () => {
    return (
        <div className="categories">
            {categoriesData.map(({ category, title, description }) => (
                <CategoryCard key={category} category={category} title={title} description={description} />
            ))}
        </div>
    );
};

export default Categories;