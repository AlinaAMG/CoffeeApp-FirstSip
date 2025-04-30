import React, { useState } from 'react';
import './OurOrigins.css';

function OurOrigins() {
  const coffeeOrigins = [
    {
      name: 'Blue Mountain',
      description:
        "Jamaican Blue Mountain coffee is often regarded as one of the best coffees in the world. Grown in the Blue Mountains of Jamaica, this coffee has a unique flavor profile that sets it apart from other beans. Known for its smooth, mellow taste, it has a well-balanced acidity and a rich, silky body. The flavor is clean and sweet with subtle notes of nuts, caramel, and a hint of floral undertones. With a mild acidity and smooth aftertaste, it's perfect for those who appreciate a premium, low-acid cup of coffee.Blue Mountain Coffee is hand-picked and grown in one of the highest altitudes in the Caribbean, which contributes to its unique flavor and limited availability. It's a perfect choice for those looking to indulge in a luxurious coffee experience. Due to its high quality, it's often considered a symbol of prestige in the coffee world.Its rarity and hand-picked quality make it a symbol of prestige, perfect for those seeking a refined, low-acid coffee with an unforgettable aftertaste.",
      slug: 'blue-mountain',
      backgroundImage:
        'https://images.unsplash.com/photo-1518057111178-44a106bad636?q=80&w=2136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: '#005EB8',
    },
    {
      name: 'Ethiopian Yirgacheffe',
      description:
        'Ethiopian Yirgacheffe is one of the most celebrated and distinctive coffees in the world, renowned for its vibrant, aromatic profile and complex flavor notes. Grown in the Yirgacheffe region of southern Ethiopia, this coffee is often considered the epitome of African coffee.With a light to medium body, it boasts bright acidity and a rich, floral aroma that hints at jasmine and bergamot. The flavor profile is a delicate balance of citrus, often described as lemon or orange zest, with subtle undertones of sweet tea and a touch of honey. The clean and crisp finish lingers with refreshing notes of bergamot and a mild sweetness, making each sip a captivating experience.It’s an exceptional choice for those who enjoy nuanced coffees with elegant floral highlights and a naturally sweet finish',
      slug: 'ethiopian-Yirgacheffe',
        color: '	#A0522D',
      backgroundImage:"https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: 'Colombian Supremo',
      description:
        'Colombian Supremo is a coffee that exemplifies the smooth, well-balanced, and rich flavors for which Colombian coffee is renowned. Grown in the high-altitude regions of Colombia, this coffee is made from the finest Arabica beans, handpicked at peak ripeness to ensure the highest quality.With a medium body and bright acidity, Colombian Supremo offers a delightful flavor profile characterized by nutty and chocolatey undertones, complemented by subtle hints of caramel and a mild, fruity sweetness. With medium body and bright, vibrant acidity, this coffee offers a harmonious blend of chocolate, roasted nuts, mild citrus, and soft caramel.Its smooth finish makes it an excellent choice for coffee lovers who prefer a mellow, easy-drinking cup with a touch of complexity.',
      slug: 'colombian-supremo',
        color: '	#D2B48C',
      backgroundImage:"https://images.unsplash.com/photo-1582409284161-5bf7c520dce9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
      name: 'Sumatra Mandheling',
      description:
        'Sumatra Mandheling is a bold, full-bodied coffee known for its distinctive earthy flavors and rich, dark notes. Grown on the Indonesian island of Sumatra, this coffee is processed using the wet-hulling method, a unique technique that imparts a signature flavor profile with deep, complex characteristics.With a low acidity, Sumatra Mandheling is smooth and syrupy, making it a perfect choice for those who enjoy a coffee with more robust and earthy flavors. It features a rich combination of dark chocolate, spice, and a hint of tobacco, complemented by subtle undertones of dried fruit and earthy woodiness. Its lingering finish is rich and slightly smoky, making it a favorite among those who love dark roasts with earthy undertones and complexity.',
        slug: 'sumatra-mandheling',
        backgroundImage: "https://images.unsplash.com/photo-1606791405792-1004f1718d0c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
      color:"#4B3621"
    },
    {
      name: 'Organic Peru',
      description:
        'Organic Peru is a smooth and flavorful coffee known for its well-balanced profile and natural sweetness. Grown in the high-altitude regions of the Andes Mountains in Peru, this coffee is produced using sustainable and organic farming practices, which enhances its rich, clean taste.This coffee features a medium body with notes of caramel, chocolate, and a gentle nuttiness, creating a comforting and harmonious cup. The acidity is mild, offering a smooth and round finish. As you sip, you may notice hints of almonds and soft fruity undertones, making it a delightful choice for coffee drinkers who appreciate a naturally sweet and well-rounded brew.',
      slug: 'organic-peru',
        color: '	#B5C99A',
      backgroundImage:"https://images.pexels.com/photos/7299671/pexels-photo-7299671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: 'Brazil Santos',
      description:
        "Brazil Santos is a smooth and well-rounded coffee, hailing from the renowned coffee-growing regions of Brazil. Known for its mild flavor and low acidity, this coffee is an excellent choice for those who enjoy a balanced and approachable cup.With a medium body, Brazil Santos offers gentle nutty and sweet notes, reminiscent of toasted almonds and brown sugar. The flavor profile is subtle, with hints of chocolate and a soft, smooth finish. This coffee's clean taste makes it versatile and easy to drink, whether you're enjoying it black or with milk.Perfect for everyday brewing methods like drip coffee, French press, or espresso, Brazil Santos is a reliable and enjoyable option for those who appreciate a coffee that's smooth, sweet, and not too overwhelming.",

      slug: 'brazil-santos',
        color: "#009739",
      backgroundImage:"https://babajavacoffee.com/wp-content/uploads/BabaJavaBlogFeaturedImage59.png"
    },
    {
      name: 'Guatemala Antigua',
      description:
        'Guatemala Antigua is a premium coffee that captures the essence of the rich volcanic soil from the Antigua region in Guatemala. Known for its full-bodied flavor and exceptional balance, it offers a delightful coffee experience for those who appreciate a complex yet approachable cup.With vibrant acidity and rich, deep flavor notes, Guatemala Antigua features a harmonious blend of chocolate, caramel, and a subtle hint of spice. Its bright, citrusy notes provide a refreshing lift, while the smooth finish makes it a pleasure to drink from start to finish.This coffee is known for its well-balanced flavor profile, where you’ll find a perfect harmony of sweetness, acidity, and body. Guatemala Antigua has a medium to full body with a bright, citrusy acidity that is not overwhelming but rather refreshing and elegant. The flavor profile includes notes of dark chocolate, caramel, and a hint of spices like cinnamon or nutmeg. These are often complemented by subtle fruity accents, such as orange or red apple.',
      slug: 'guatemala-antigua',
        color: '#3E6B48',
      backgroundImage:"https://www.aboutcoffee.org/wp-content/uploads/2024/10/man-harvesting-coffee-from-plant-on-hillside-in-mountains-masthead-1440x720.jpg"
    },
    {
      name: 'Costa Rica Tarrazu',
      description:
        'Costa Rica Tarrazu is one of the most renowned coffees from Costa Rica, celebrated for its bright acidity and smooth, well-balanced flavor. Grown in the high-altitude region of Tarrazu, this coffee benefits from the fertile volcanic soils and the perfect climate, resulting in a cup that is both vibrant and flavorful.With tasting notes of citrus, honey, and a hint of berry, Costa Rica Tarrazu offers a clean and refreshing profile. Its bright, zesty acidity is complemented by a smooth, mellow body that makes it a perfect choice for those who enjoy a crisp yet rich coffee experience. The coffee’s finish is light and crisp, leaving a pleasant aftertaste.',
       slug: 'costa-rica-tarrazu',
      color: '#D4A373',
      backgroundImage:"https://www.agrivi.com/wp-content/uploads/2017/01/world_map_coffee_varieties.jpeg"
    },
    {
      name: 'Kenya AA',
      description:
        "Kenya AA is one of the most sought-after coffees in the world, known for its bold, vibrant, and full-bodied flavor profile. Grown at high altitudes in the rich volcanic soils of Kenya’s central highlands, the 'AA' grade refers to the large size and high quality of the beans, which are handpicked and carefully processed.This coffee has a distinct, bright acidity that is complemented by deep, fruity flavors, with notes of black currant, berry, and citrus. Its flavor complexity is balanced by a smooth, silky body, and a lingering, clean finish. The rich, wine-like quality of Kenya AA makes it an exceptional choice for coffee enthusiasts who enjoy a coffee that’s both bold and nuanced.Kenya AA is famous for its clean and crisp finish, which leaves a pleasant aftertaste that lingers long after you’ve finished your cup. The beans are handpicked, ensuring that only the best beans are selected for processing, further elevating the overall quality of the coffee.This coffee is also known for its intensity and complexity, offering a multi-layered experience for those who love rich and nuanced coffee.",
        slug: 'kenya-AA',
        color: ' #B22222',
      backgroundImage:"https://www.homegrounds.co/wp-content/uploads/2022/07/CI_BestCoffeeFarmsInTheWorld.jpeg"
    },
    {
      name: 'Organic Rwanda',
      description:
        'Organic Rwanda offers a beautifully balanced cup of coffee with a unique, clean taste that reflects the rich, fertile soil of the Rwandan highlands. Known for its smooth, mild body, this coffee is a delightful combination of fruity and floral notes, with hints of citrus and a touch of dark chocolate.Grown using sustainable and organic farming practices, Organic Rwanda coffee is harvested by small-scale farmers in the lush, volcanic regions of Rwanda. The beans are carefully handpicked and processed, ensuring only the highest quality coffee reaches your cup.',
      slug: 'organic-rwanda',
        color: '#4B9CD3',
      backgroundImage:"https://media.istockphoto.com/id/880720550/photo/coffee-cup-coffee-beans.jpg?s=612x612&w=0&k=20&c=Hys1kwquSclobkzG_vUpPg2k9p2xzAsVY8-YaxzstBo="
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleOrigin = (index) => {
    // Toggle between open and close
    setOpenIndex(openIndex === index ? null : index);
  };

 

  return (
    <div className="our-origins">
          <h1 className="section-title">Our Coffee Origins</h1>
          <p className="section-slogan">Discover the unique flavors of coffee from around the world, each with a story to tell.</p>
      <div className="coffee-list">
        {coffeeOrigins.map((origin, index) => (
          <div
            key={origin.slug}
            className={`coffee-card ${openIndex === index ? 'open' : ''}`}
            style={{ backgroundColor: origin.color }}
            onClick={() => toggleOrigin(index)}
          >
            <h2 className="coffee-title">{origin.name}</h2>
            <div
              className="coffee-image"
              style={{
                backgroundImage: `url(${origin.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            {openIndex === index && (
              <div className="coffee-details">
                <p className="coffee-description">{origin.description}</p>
                <button className="order-button">Order Your Coffee</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurOrigins;