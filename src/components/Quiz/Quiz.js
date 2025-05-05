import React, { useState } from 'react';
import '../Quiz/Quiz.css';
import { Link } from "react-router-dom";

const CoffeeQuiz = () => {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
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

    const prompt = `
   I am helping a user find the perfect coffee. Based on the following preferences:

1. Taste: ${answers.question1}
2. Roast level: ${answers.question2}
3. Brewing method: ${answers.question3}
4. Caffeine sensitivity: ${answers.question4}
5. Adventure level: ${answers.question5}

Please recommend a specific coffee type (like "Ethiopian light roast" or "Colombian dark roast") and explain why it matches their taste.
`;

    try {
      const response = await window.puter.ai.chat(prompt);
      setResult(response.message.content);
    } catch (error) {
      console.error('Error:', error);
      setResult('Something went wrong. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">Find Your Perfect Coffee</h2>
      <form onSubmit={handleSubmit} className="quiz-form">
        {/* Question 1 */}
        <div className="question">
          <h3>1. How do you like your coffee to taste?</h3>
          <div className="radio-links">
            <label>
              <input
                type="radio"
                name="question1"
                value="Fruity and bright"
                onChange={handleAnswerChange}
              />{' '}
              Fruity and bright
            </label>
            <label>
              <input
                type="radio"
                name="question1"
                value="Smooth and well-balanced"
                onChange={handleAnswerChange}
              />{' '}
              Smooth and well-balanced
            </label>
            <label>
              <input
                type="radio"
                name="question1"
                value="Bold and rich"
                onChange={handleAnswerChange}
              />{' '}
              Bold and rich
            </label>
            <label>
              <input
                type="radio"
                name="question1"
                value="Earthy and smoky"
                onChange={handleAnswerChange}
              />{' '}
              Earthy and smoky
            </label>
          </div>
        </div>

        {/* Question 2 */}
        <div className="question">
          <h3>2. Which roast level do you prefer?</h3>
          <div className="radio-links">
            <label>
              <input
                type="radio"
                name="question2"
                value="Light roast"
                onChange={handleAnswerChange}
              />{' '}
              Light roast
            </label>
            <label>
              <input
                type="radio"
                name="question2"
                value="Medium roast"
                onChange={handleAnswerChange}
              />{' '}
              Medium roast
            </label>
            <label>
              <input
                type="radio"
                name="question2"
                value="Dark roast"
                onChange={handleAnswerChange}
              />{' '}
              Dark roast
            </label>
          </div>
        </div>

        {/* Question 3 */}
        <div className="question">
          <h3>3. How do you brew your coffee?</h3>
          <div className="radio-links">
            <label>
              <input
                type="radio"
                name="question3"
                value="Espresso machine"
                onChange={handleAnswerChange}
              />{' '}
              Espresso machine
            </label>
            <label>
              <input
                type="radio"
                name="question3"
                value="French press"
                onChange={handleAnswerChange}
              />{' '}
              French press
            </label>
            <label>
              <input
                type="radio"
                name="question3"
                value="Pour-over"
                onChange={handleAnswerChange}
              />{' '}
              Pour-over
            </label>
            <label>
              <input
                type="radio"
                name="question3"
                value="Drip coffee maker"
                onChange={handleAnswerChange}
              />{' '}
              Drip coffee maker
            </label>
          </div>
        </div>

        {/* Question 4 */}
        <div className="question">
          <h3>4. How sensitive are you to caffeine?</h3>
          <div className="radio-links">
            <label>
              <input
                type="radio"
                name="question4"
                value="Very sensitive"
                onChange={handleAnswerChange}
              />{' '}
              Very sensitive
            </label>

            <label>
              <input
                type="radio"
                name="question4"
                value="Somewhat sensitive"
                onChange={handleAnswerChange}
              />{' '}
              Somewhat sensitive
            </label>

            <label>
              <input
                type="radio"
                name="question4"
                value="Not sensitive at all"
                onChange={handleAnswerChange}
              />{' '}
              Not sensitive at all
            </label>
          </div>
        </div>

        {/* Question 5 */}
        <div className="question">
          <h3>
            5. Do you want to try something adventurous or stick with classic?
          </h3>
          <div className="radio-links">
            <label>
              <input
                type="radio"
                name="question5"
                value="I want to try something new and adventurous"
                onChange={handleAnswerChange}
              />{' '}
              Adventurous
            </label>
            <label>
              <input
                type="radio"
                name="question5"
                value="I prefer classic and safe options"
                onChange={handleAnswerChange}
              />{' '}
              Classic
            </label>
          </div>
        </div>

        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? 'Loading...' : 'Submit'}
        </button>
        
      </form>

      {result && (
        <div className="result">
          <h3>Recommended Coffee:</h3>
          <p>{result}</p>
          
        </div>
      )}
      <div className="quiz-link">
        <Link  to="/shop/all-coffees">Back to Shop</Link>
        </div>
    </div>
  );
};

export default CoffeeQuiz;
