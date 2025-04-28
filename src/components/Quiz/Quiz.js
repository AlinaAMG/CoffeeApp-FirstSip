import React, { useState } from 'react';
import "../Quiz/Quiz.css";
import coffeeImage from "./img/coffeebean.png";

const CoffeeQuiz = () => {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
  });

  const [result, setResult] = useState(null);

  const handleAnswerChange = (e) => {
    const { name, value } = e.target;
    setAnswers({
      ...answers,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const score = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
    };

    Object.values(answers).forEach((answer) => {
      score[answer]++;
    });

    const maxAnswer = Object.keys(score).reduce((a, b) => (score[a] > score[b] ? a : b));
    setResult(maxAnswer);
  };

  const renderResult = () => {
 
    switch (result) {
      case 'A':
        return (
          <div>
            <h3>Recommendation: Ethiopian or Kenyan Coffee</h3>
            <p>Bright, fruity, and floral flavors with a light roast. Enjoy the tangy and vibrant cup!</p>
          </div>
        );
      case 'B':
        return (
          <div>
            <h3>Recommendation: Colombian or Guatemalan Coffee</h3>
            <p>Well-balanced flavors with chocolate, caramel, and a touch of nuttiness in a medium roast.</p>
          </div>
        );
      case 'C':
        return (
          <div>
            <h3>Recommendation: Brazilian or Sumatra Coffee</h3>
            <p>Bold, chocolatey, and earthy flavors with a dark roast. A full-bodied experience!</p>
          </div>
        );
      case 'D':
        return (
          <div>
            <h3>Recommendation: Panama or Costa Rican Coffee</h3>
            <p>Bright and refreshing flavors with fruity notes and a medium roast.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
    <div className="coffee-quiz">
      <h2>Find Your Perfect Coffee</h2>
      <form onSubmit={handleSubmit}>
        {/* Question 1 */}
        <div>
          <h3>1. How do you like your coffee to taste?</h3>
          <label>
            <input type="radio" name="question1" value="A" onChange={handleAnswerChange} /> Fruity and bright
          </label>
          <label>
            <input type="radio" name="question1" value="B" onChange={handleAnswerChange} /> Smooth and well-balanced
          </label>
          <label>
            <input type="radio" name="question1" value="C" onChange={handleAnswerChange} /> Bold and rich
          </label>
          <label>
            <input type="radio" name="question1" value="D" onChange={handleAnswerChange} /> Earthy and smoky
          </label>
        </div>

        {/* Question 2 */}
        <div>
          <h3>2. What roast level do you typically prefer?</h3>
          <label>
            <input type="radio" name="question2" value="A" onChange={handleAnswerChange} /> Light roast
          </label>
          <label>
            <input type="radio" name="question2" value="B" onChange={handleAnswerChange} /> Medium roast
          </label>
          <label>
            <input type="radio" name="question2" value="C" onChange={handleAnswerChange} /> Dark roast
          </label>
          <label>
            <input type="radio" name="question2" value="D" onChange={handleAnswerChange} /> Open to all
          </label>
        </div>

        {/* Question 3 */}
        <div>
          <h3>3. How do you feel about coffee acidity?</h3>
          <label>
            <input type="radio" name="question3" value="A" onChange={handleAnswerChange} /> I love a tangy, bright cup
          </label>
          <label>
            <input type="radio" name="question3" value="B" onChange={handleAnswerChange} /> Smooth with mild acidity
          </label>
          <label>
            <input type="radio" name="question3" value="C" onChange={handleAnswerChange} /> Low acidity and richer taste
          </label>
          <label>
            <input type="radio" name="question3" value="D" onChange={handleAnswerChange} /> Open to all acidity levels
          </label>
        </div>

        {/* Question 4 */}
        <div>
          <h3>4. What kind of coffee experience are you looking for?</h3>
          <label>
            <input type="radio" name="question4" value="A" onChange={handleAnswerChange} /> Lively and refreshing
          </label>
          <label>
            <input type="radio" name="question4" value="B" onChange={handleAnswerChange} /> Well-rounded and smooth
          </label>
          <label>
            <input type="radio" name="question4" value="C" onChange={handleAnswerChange} /> Strong and bold
          </label>
          <label>
            <input type="radio" name="question4" value="D" onChange={handleAnswerChange} /> Complex and rich
          </label>
        </div>

        {/* Question 5 */}
        <div>
          <h3>5. What’s your preferred texture for your coffee?</h3>
          <label>
            <input type="radio" name="question5" value="A" onChange={handleAnswerChange} /> Light and smooth
          </label>
          <label>
            <input type="radio" name="question5" value="B" onChange={handleAnswerChange} /> Medium-bodied and balanced
          </label>
          <label>
            <input type="radio" name="question5" value="C" onChange={handleAnswerChange} /> Full-bodied and satisfying
          </label>
          <label>
            <input type="radio" name="question5" value="D" onChange={handleAnswerChange} /> Rich and velvety
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {result && <div className="quiz-result">{renderResult()}</div>}
     
    </div>
     <div className="coffee-quiz-image">
     <img src={coffeeImage} alt="Coffee Beans" />
      </div>
      </div>
      
  );
};

export default CoffeeQuiz;
