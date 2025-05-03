import React, { useState } from 'react';
import "../Quiz/Quiz.css";


import axios from "axios";


const CoffeeQuiz = () => {
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnswerChange = (e) => {
    const { name, value } = e.target;
    setAnswers({
      ...answers,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:4001/api/coffee-recommendation", {
        prompt: JSON.stringify(answers),
      });

      setResult(response.data.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching recommendation:", error);
      setResult("Something went wrong. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">Find Your Perfect Coffee</h2>
      <form onSubmit={handleSubmit} className="quiz-form">
        <div className="question">
          <h3>How do you like your coffee to taste?</h3>
          <label>
            <input
              type="radio"
              name="question1"
              value="A"
              onChange={handleAnswerChange}
            />{" "}
            Fruity and bright
          </label>
          <label>
            <input
              type="radio"
              name="question1"
              value="B"
              onChange={handleAnswerChange}
            />{" "}
            Smooth and well-balanced
          </label>
          <label>
            <input
              type="radio"
              name="question1"
              value="C"
              onChange={handleAnswerChange}
            />{" "}
            Bold and rich
          </label>
          <label>
            <input
              type="radio"
              name="question1"
              value="D"
              onChange={handleAnswerChange}
            />{" "}
            Earthy and smoky
          </label>
        </div>

        {/* Repeat this structure for questions 2-5 */}

        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>

      {result && (
        <div className="result">
          <h3>Recommendation:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default CoffeeQuiz;
