import React, { useState } from 'react';
import '../Quiz/Quiz.css';
import { Link } from 'react-router-dom';

const CoffeeQuiz = () => {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnswerChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   const prompt = `
  //    Please recommend a specific coffee type based on the user's preferences.

  // 1. Taste: ${answers.question1}
  // 2. Roast level: ${answers.question2}
  // 3. Brewing method: ${answers.question3}
  // 4. Caffeine sensitivity: ${answers.question4}
  // 5. Adventure level: ${answers.question5}

  // Please recommend a specific coffee type (like "Ethiopian light roast" or "Colombian dark roast") and explain why it matches their taste.
  // `;

//   try {
//     const response = await window.puter.ai.chat(prompt);
//     setResult(response.message.content);
//   } catch (error) {
//     console.error('Error:', error);
//     setResult('Something went wrong. Please try again.');
//   }

//   setLoading(false);
// };
  // With static data
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Call a function that maps the answers to the static recommendations
    const recommendation = getCoffeeRecommendation(
      answers.question1,
      answers.question2,
      answers.question3,
      answers.question4,
      answers.question5
    );

    setResult(recommendation);

    setLoading(false);
  };

  function getCoffeeRecommendation(
    question1,
    question2,
    question3,
    question4,
    question5
  ) {
    if (question1 === 'Fruity and bright' && question2 === 'Light roast') {
      return {
        coffee: 'Ethiopian Yirgacheffe Light Roast',
        description: `
          🍋 **Flavor Profile:** Bright, fruity notes with a crisp citrus zing and delicate floral aromas. Think lemon zest and jasmine.

          🌍 **Origin:** Grown in the highlands of Yirgacheffe, Ethiopia — a region famous for its heirloom Arabica beans and meticulous harvesting.

          🔥 **Roast Level:** Light – preserves the vibrant acidity and nuanced layers of fruit and florals.

          🛠️ **Brewing Suggestions:** Best enjoyed using a **pour-over** or **drip coffee** to fully appreciate its clarity and complexity.

          💡 **Perfect for:** Adventurous drinkers who love lively, elegant cups.
        `,
      };
    }

    if (
      question1 === 'Smooth and well-balanced' &&
      question2 === 'Medium roast'
    ) {
      return {
        coffee: 'Colombian Medium Roast',
        description: `
          🍫 **Flavor Profile:** A balanced and mellow cup with notes of caramel, milk chocolate, and a hint of citrus. Smooth mouthfeel with medium acidity.

          🌍 **Origin:** High-altitude farms in Colombia, known for producing consistently exceptional beans with rich flavor depth.

          🔥 **Roast Level:** Medium – brings out sweetness while keeping the acidity in check.

          🛠️ **Brewing Suggestions:** Great for **drip coffee**, **French press**, or even **espresso** lovers who want something smooth.

          💡 **Perfect for:** Daily drinkers who want comfort in every cup.
        `,
      };
    }

    if (question1 === 'Bold and rich' && question2 === 'Dark roast') {
      return {
        coffee: 'Sumatra Dark Roast',
        description: `
          🌋 **Flavor Profile:** Bold and earthy with deep, syrupy body. Expect notes of dark chocolate, tobacco, and spice.

          🌍 **Origin:** Grown on the Indonesian island of Sumatra, where wet hulling gives it a distinct, rustic character.

          🔥 **Roast Level:** Dark – enhances the boldness and smokiness.

          🛠️ **Brewing Suggestions:** Works wonderfully in a **French press** or **espresso machine** for a robust experience.

          💡 **Perfect for:** Fans of strong, rich coffee with attitude.
        `,
      };
    }

    if (question1 === 'Earthy and smoky' && question2 === 'Dark roast') {
      return {
        coffee: 'Guatemalan Antigua Dark Roast',
        description: `
          🔥 **Flavor Profile:** Smoky and earthy with rich molasses, cocoa, and spice. A bold, grounding cup.

          🌍 **Origin:** Antigua, Guatemala – where volcanic soil and high altitudes give beans complexity and strength.

          🔥 **Roast Level:** Dark – intensifies deep and bold characteristics.

          🛠️ **Brewing Suggestions:** Ideal for **drip coffee** or **French press** to capture its full body.

          💡 **Perfect for:** Those who love smoky, bold coffee that lingers beautifully.
        `,
      };
    }

    if (question4 === 'Very sensitive') {
      return {
        coffee: 'Decaf Mexican Coffee',
        description: `
          🌰 **Flavor Profile:** Smooth and mellow with nutty chocolate notes and a gentle acidity. No harshness, just comfort.

          🌍 **Origin:** Grown in the Chiapas region of Mexico, known for eco-conscious decaf processing.

          🔥 **Roast Level:** Medium – keeps the delicate flavors intact without bitterness.

          🛠️ **Brewing Suggestions:** Great for **any method** – from drip to French press to espresso.

          💡 **Perfect for:** Anyone who wants delicious coffee without the caffeine buzz.
        `,
      };
    }

    if (question5 === 'I want to try something new and adventurous') {
      return {
        coffee: 'Panama Geisha Light Roast',
        description: `
          🌸 **Flavor Profile:** Complex and elegant with floral jasmine notes, bergamot, and juicy tropical fruit. A luxurious experience.

          🌍 **Origin:** Boquete, Panama – home to the world’s most prized Geisha beans grown at extreme altitudes.

          🔥 **Roast Level:** Light – designed to showcase its natural brightness and complexity.

          🛠️ **Brewing Suggestions:** Best enjoyed as **pour-over** to preserve every delicate nuance.

          💡 **Perfect for:** Coffee explorers and those who enjoy rare, refined flavor journeys.
        `,
      };
    }

    // ✨ Use question3 if it’s something like "Cold brew"
    if (question3 === 'Cold brew') {
      return {
        coffee: 'Brazilian Cold Brew Blend',
        description: `
          ❄️ **Flavor Profile:** Smooth, low-acid with rich chocolate, roasted nuts, and a hint of sweetness. Incredibly refreshing cold.

          🌍 **Origin:** A blend of Brazilian beans selected for their sweetness and body.

          🔥 **Roast Level:** Medium-dark – roasted to complement long extraction times used in cold brewing.

          🛠️ **Brewing Suggestions:** Steep in cold water for 12–18 hours for a mellow, bold concentrate.

          💡 **Perfect for:** Iced coffee fans or those who need a strong but smooth caffeine hit without bitterness.
        `,
      };
    }

    // 🌟 Default fallback if no conditions match
    return {
      coffee: 'House Blend Medium Roast',
      description: `
        ☕ **Flavor Profile:** Medium-bodied with notes of creamy milk chocolate, toasted almonds, and a touch of dried fruit. Balanced and comforting.

        🌍 **Origin:** A classic blend of Colombian, Brazilian, and Honduran beans, grown at high elevations for full flavor.

        🔥 **Roast Level:** Medium – roasted for sweetness, balance, and daily drinkability.

        🛠️ **Brewing Suggestions:** Perfect for **drip machines**, **pour-over**, or **French press**. Versatile and consistent.

        📖 **Coffee Story:** Created for those who appreciate a reliable and delicious cup every day. Whether you're just waking up or sharing with friends, this blend is always a good idea.
      `,
    };
  }

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
          <h2>Your Coffee Recommendation:</h2>
          <h3>{result.coffee}</h3> 
          <p className="coffee-rec">{result.description}</p>
        </div>
      )}

      {loading && <p>Loading...</p>}

      <div className="quiz-link">
        <Link to="/shop/all-coffees">Back to Shop</Link>
      </div>
    </div>
  );
};

export default CoffeeQuiz;
