import React from 'react';
import "./CoffeeBlog.css";
import  brewing  from "./img/coffee.png";
import  premium  from "./img/premium.png";
import  frenchimg  from "./img/french-press.png";
import singleOriginImg from "./img/single-origin.png";
import aeropressImg from "./img/aeropress.png";
const CoffeeBlog = () => {
    const posts = [
      {
        title: "The Art of Brewing the Perfect Espresso",
        date: "May 01, 2025",
        excerpt: "Espresso is the foundation of many coffee drinks. Learn how to brew the perfect shot for your morning ritual, and explore tips on timing, pressure, and grind size.",
        content: `Espresso is the foundation of many coffee drinks. Whether you prefer an Americano, Cappuccino, or Latte, the quality of the espresso shot is paramount. Brewing the perfect espresso requires the right equipment, grind size, and technique. In this guide, we explore how to master your espresso shot for a smooth, rich experience.`,
        image: brewing
      },
      {
        title: "Why Single Origin Coffee is Worth the Hype",
        date: "April 20, 2025",
        excerpt: "Single origin coffee offers a unique experience by showcasing the flavors of coffee beans from specific regions. Discover why it’s worth trying.",
        content: `Single origin coffee refers to beans sourced from a specific region, farm, or estate, highlighting the unique flavors influenced by soil, altitude, and climate. Unlike blends, single origin coffee allows you to truly appreciate the distinctive characteristics of the beans. Learn why coffee connoisseurs prefer single origin, and how you can get the most out of your cup.`,
        image: singleOriginImg
      },
      {
        title: "Discover the Best Premium Coffee Blends",
        date: "April 20, 2025",
        excerpt: "Premium coffee blends offer a unique and rich flavor profile by combining beans from different regions. Explore our favorites and learn what makes them special.",
        content: `Premium coffee blends are crafted using the finest coffee beans sourced from different regions. These beans are combined to highlight complementary flavors, creating a balanced and complex cup of coffee. Whether you love bold, full-bodied espresso or prefer a smooth, fruity brew, premium blends have something for every palate. In this post, we dive into the world of premium coffee blends and introduce you to some of our favorite options. From dark roasts to light fruity notes, there’s a premium blend to suit every coffee lover's taste.`,
        image: premium
      },
      {
        title: "How to Brew Coffee with a French Press",
        date: "April 18, 2025",
        excerpt: "The French Press is one of the most popular methods for brewing rich, full-bodied coffee. Here’s a step-by-step guide to perfecting the brew.",
        content: `Brewing coffee with a French press is easy and satisfying.

        1. **Boil water** and let it cool slightly (to about 95°C).
        2. **Add coarsely ground coffee** (about 1g per 15ml of water) to the French press.
        3. **Pour hot water** over the grounds, saturating them evenly.
        4. **Stir gently**, then place the lid on with the plunger pulled up.
        5. **Let it steep for 4 minutes**.
        6. **Slowly press down** the plunger.
        7. **Serve immediately** and enjoy the full flavor!
        
        Tip: Use a burr grinder for the best grind consistency.`,
        image:frenchimg
        },
        {
            title: "Brew Like a Pro with the AeroPress",
            date: "May 07, 2025",
            excerpt: "The AeroPress is beloved for its speed and versatility. Discover how to use it for a smooth, rich cup every time.",
            content: `
          The AeroPress is one of the most versatile and portable coffee makers around. It's perfect for both beginners and seasoned brewers who want a clean, full-flavored cup of coffee.
          
          **You'll need:**
          - 17g of medium-fine ground coffee
          - 250ml hot water (around 85–90°C)
          - AeroPress
          - Stirrer or spoon
          - Timer
          
          **Steps:**
          1. Insert a paper filter into the AeroPress cap and rinse it with hot water.
          2. Assemble the AeroPress and place it on a sturdy mug (normal method).
          3. Add the ground coffee.
          4. Start your timer and pour in the hot water up to the top (around 250ml).
          5. Stir the coffee for about 10 seconds.
          6. Attach the plunger and gently press down over 20–30 seconds.
          7. Enjoy your freshly brewed cup!
          
          **Pro Tip:** Try the inverted method for a stronger, espresso-like result.
          
          Whether you’re at home or on the go, the AeroPress delivers café-quality coffee in under 2 minutes!
          `,
             image:aeropressImg ,
            category: "Brewing Methods"
          }
    ];
  
    return (
      <div className="coffee-blog-container">
        <h1 className="blog-title">Coffee Blog</h1>
        <div className="blog-posts">
          {posts.map((post, index) => (
            <div key={index} className="blog-post">
              <div className="post-image-container">
                <img src={post.image} alt={post.title}   className="post-image" />
              </div>
              <div className="post-content">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-date">{post.date}</p>
                <p className="post-excerpt">{post.excerpt}</p>
                <p className="post-description">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CoffeeBlog;
  