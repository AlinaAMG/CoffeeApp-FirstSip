const coffees = [
    {
      name: "Ethiopian Yirgacheffe",
      description: "Floral and citrusy Single Origin coffee from Ethiopia.",
      price: 14.99,
      imageUrl: "",
      rating: 4.9,
      bestSeller: true,
    category: "Single Origin",
    longDescription: "Ethiopian Yirgacheffe is one of the most prized coffees in the world, known for its distinct floral and citrusy flavors. Grown in the highlands of Ethiopia’s Yirgacheffe region, this coffee is hand-picked and carefully processed to preserve its unique characteristics. The beans have a bright, tangy acidity, often with notes of lemon, bergamot, and jasmine, making it a perfect choice for those who enjoy vibrant and complex coffee.This Single Origin coffee is crafted from heirloom varieties of Arabica beans, which thrive in the rich volcanic soil and high altitudes of Ethiopia. The result is a cup that offers a clean, crisp taste with a medium body and a smooth, lingering finish. The Yirgacheffe coffee's flavor profile is delicate yet flavorful, with subtle hints of floral sweetness balanced by a refreshing citrus kick.",
      notes:"Floral, lemon, jasmine, honey, berry."
    },
    {
      name: "Colombian Supremo Organic",
      description: "Smooth and rich Organic coffee grown in Colombia's mountains.",
      price: 13.49,
      imageUrl: "",
      rating: 4.8,
      bestSeller: true,
      category: "Organic",
      longDescription: "Colombian Supremo Organic is a premium coffee that embodies the rich, smooth flavors of Colombia’s mountainous regions. Grown at high altitudes in the lush, fertile soils of Colombia’s coffee-growing regions, this organic coffee is known for its balanced flavor profile and full-bodied taste. The Supremo beans are carefully harvested from mature trees, ensuring that each cup offers a rich and consistent brew.This coffee has a natural sweetness with hints of caramel, chocolate, and mild nutty undertones. It’s known for its smooth and mellow character, with a medium to full body and a subtle acidity that doesn’t overpower the overall flavor. Whether enjoyed as a morning pick-me-up or a late-afternoon indulgence, Colombian Supremo Organic offers a satisfying, well-rounded cup that appeals to both casual drinkers and coffee aficionados.",
      notes:"Nutty, chocolate, caramel, dried fruit."
    },
    {
      name: "Guatemala Antigua",
      description: "Sweet, chocolatey Single Origin coffee with a hint of spice.",
      price: 15.29,
      imageUrl: "",
      rating: 4.7,
      bestSeller: true,
      category: "Single Origin",
      longDescription: "Guatemala Antigua is a truly exceptional coffee that offers a perfect balance of sweetness, complexity, and depth. Grown in the highlands of Guatemala’s Antigua region, this single origin coffee is known for its rich flavor profile and distinctive character. The beans are cultivated at high altitudes, where the cool climate and fertile volcanic soils contribute to the development of their vibrant and unique taste.With its signature sweetness and a delightful chocolatey flavor, Guatemala Antigua is further enhanced by subtle hints of spice, such as cinnamon and nutmeg. The result is a smooth, well-rounded cup with a medium body and a clean, crisp finish. The coffee’s bright acidity and complex flavors make it perfect for coffee enthusiasts looking to explore new and refined tastes.",
      notes:"Mild, chocolate, nutty, soft, clean."
    },
    {
      name: "Kenya AA Premium Blend",
      description: "A powerful blend with fruity and wine-like flavors.",
      price: 16.49,
      imageUrl: "https://example.com/kenya-aa-premium-blend.jpg",
      rating: 4.8,
      bestSeller: true,
      category: "Premium Blends",
      longDescription: "Kenya AA Premium Blend is a bold and vibrant coffee that captures the essence of one of Africa’s finest coffee-growing regions. Known for its fruity and wine-like characteristics, this premium blend brings together the best beans sourced from Kenya’s high-altitude farms. The 'AA' grade signifies the top-quality beans, which are handpicked at the peak of ripeness to ensure a superior coffee experience.This exceptional blend is celebrated for its intense and complex flavor profile, which boasts bright, juicy notes of blackcurrant, citrus, and tropical fruits. The wine-like acidity adds an elegant layer of complexity, making it a coffee that is both rich and refreshing. It is complemented by a smooth, full-bodied finish that leaves a delightful aftertaste, making it perfect for those who appreciate a dynamic, yet well-balanced cup.Kenya AA Premium Blend is best enjoyed as a pour-over or drip coffee, where its intricate flavors can truly shine. It also stands up well to espresso, delivering a vibrant shot with layers of fruity sweetness and a crisp, clean finish. Whether you’re an experienced coffee enthusiast or a newcomer looking to explore the world of specialty coffee, this blend offers a unique and satisfying experience that will elevate your coffee routine.",
      notes:"Black currant, citrus, tropical fruit, wine-like."
    },
    {
      name: "Sumatra Mandheling Organic",
      description: "Earthy and full-bodied Organic coffee from Sumatra.",
      price: 14.79,
      imageUrl: "",
      rating: 4.7,
      bestSeller: true,
      category: "Organic",
      longDescription: "Sumatra Mandheling Organic coffee is a deep, earthy, and full-bodied brew that showcases the rich flavors of one of the world’s most celebrated coffee regions. Grown in the lush highlands of Sumatra, Indonesia, this organic coffee is known for its distinctive, bold flavor profile, which offers a perfect balance of earthiness, spice, and a touch of sweetness.The beans used in Sumatra Mandheling are carefully cultivated using traditional methods, without the use of synthetic pesticides or fertilizers. This results in a coffee that not only boasts an exceptional flavor but also supports sustainable farming practices. The medium to full body of this coffee provides a smooth and velvety mouthfeel, with a complexity that lingers long after each sip.The flavor profile of Sumatra Mandheling Organic is uniquely earthy and herbal, with subtle undertones of dark chocolate, cedar, and a touch of sweet tobacco. The coffee also has a low acidity, which makes it easy to enjoy without any sharp or bitter notes. The finish is smooth and satisfying, with a slight lingering spice that gives the coffee its signature depth.",
      notes:"Sweet, citrus, floral, honey, bright."
      
    },
    {
      name: "Jamaican Blue Mountain",
      description: "World-famous Single Origin coffee, mild flavor with a creamy finish.",
      price: 49.99,
      imageUrl: "",
      rating: 5.0,
      bestSeller: true,
      category: "Single Origin",
      longDescription: "Jamaican Blue Mountain coffee is widely regarded as one of the finest coffees in the world. Grown in the serene, mist-covered mountains of Jamaica, this premium Single Origin coffee offers a truly exceptional flavor profile that coffee connoisseurs around the globe rave about. With its mild flavor and creamy finish, Jamaican Blue Mountain is a coffee that provides an incredibly smooth, rich, and balanced cup that is unmatched by any other.The beans are handpicked from the rich volcanic soil of the Blue Mountains, ensuring that only the finest, most carefully selected coffee cherries are used. The altitude and ideal climate of the region contribute to the coffee's unique flavor, which is both mellow and sophisticated. The result is a cup of coffee that is incredibly smooth, with a velvety texture and subtle notes of floral sweetness, citrus, and a hint of nuttiness.One of the most appealing qualities of Jamaican Blue Mountain coffee is its low acidity, making it a perfect choice for those who prefer a gentler, more refined coffee experience. The finish is creamy and clean, leaving a lingering aftertaste that is both satisfying and memorable.This coffee is perfect for those who appreciate a premium, luxury coffee that is mild, yet complex, with a silky smoothness that is perfect for any occasion. Whether brewed as a pour-over, French press, or espresso, Jamaican Blue Mountain brings out the full richness of its flavor in every cup.",
      notes:"Mild, creamy, floral, nutty, and perfectly balanced."
    },
    {
      name: "House Premium Blend",
      description: "A perfectly balanced blend of premium Arabica beans.",
      price: 12.99,
      imageUrl: "",
      rating: 4.6,
      bestSeller: true,
      category: "Premium Blends",
      longDescription: "The House Premium Blend is a meticulously crafted coffee that brings together the finest Arabica beans for a rich and perfectly balanced flavor. This blend offers a harmonious combination of smooth, mellow notes and a touch of bright acidity, making it the ideal choice for coffee lovers who appreciate complexity without overwhelming boldness.Sourced from the top coffee-growing regions, the premium Arabica beans in this blend are carefully selected for their smooth texture, full-bodied richness, and aromatic profile. The result is a well-rounded cup with notes of caramel sweetness, toasted nuts, and a hint of citrus, balanced by a gentle and satisfying finish.Whether you're enjoying it in the morning to kickstart your day or savoring it as an afternoon pick-me-up, House Premium Blend offers versatility and depth in every sip. Its medium roast profile allows the natural flavors of the coffee to shine through, making it an excellent choice for brewing methods like drip coffee, pour-over, or French press.Ideal for those who enjoy a smooth, flavorful cup of coffee with a touch of elegance, House Premium Blend is a great addition to any coffee collection. Its inviting aroma and balanced taste make it a go-to option for both casual coffee drinkers and connoisseurs alike.",
      notes:"Tangy, berry, jasmine, crisp, clean."
  },
  {
    name: "Kenya Nyeri AA",
    description: "Bright and fruity Single Origin coffee with floral notes.",
    price: 18.49,
    imageUrl: "",
    rating: 4.8,
    bestSeller: true,
    category: "Single Origin",
    description: "Kenya Nyeri AA is a premium Single Origin coffee celebrated for its bright, lively flavor profile and complex aromatic notes. Sourced from the renowned Nyeri region in Kenya, this coffee boasts an impressive combination of fruity, floral, and citrusy undertones that make it stand out among other coffee varieties.The AA grade indicates the top-tier quality of the beans, which are meticulously handpicked and carefully processed to preserve their distinct characteristics. With its vibrant acidity and smooth body, Kenya Nyeri AA is an excellent choice for those who enjoy a coffee with bright, refreshing notes and a smooth, clean finish.The flavor profile is an enticing mix of tangy red fruits, such as raspberry and black currant, complemented by delicate floral hints of jasmine and lavender. These flavor notes are balanced by a crisp, wine-like finish that leaves a refreshing aftertaste with each sip.Ideal for pour-over, French press, or espresso brewing, Kenya Nyeri AA is perfect for those seeking a coffee that delivers an unforgettable, complex experience. Its distinctive flavor and high quality make it a must-try for coffee enthusiasts looking to explore the rich coffee culture of Kenya.Whether enjoyed on its own or paired with a light breakfast, Kenya Nyeri AA is a delightful coffee that offers a refreshing and satisfying cup.",
    notes:"Cocoa, orange, spice, smoky, bold."
  },
  {
    name: "Mexican Organic Chiapas",
    description: "Earthy, smooth coffee with a hint of cocoa and vanilla.",
    price: 14.99,
    imageUrl: "",
    rating: 4.7,
    bestSeller: true,
    category: "Organic",
    longDescription: "Mexican Organic Chiapas is a rich and earthy coffee sourced from the lush highlands of the Chiapas region in southern Mexico. Known for its smooth and well-balanced flavor profile, this coffee offers a perfect harmony of earthy, cocoa, and vanilla notes, making it an ideal choice for those who enjoy a full-bodied and aromatic cup.Grown in rich volcanic soil and cultivated with organic farming methods, this coffee has a distinctive depth that reflects the care and attention given to each bean. The earthy undertones are complemented by subtle hints of cocoa, giving the coffee a warm, comforting flavor, while the delicate vanilla notes add a soft, sweet finish.Mexican Organic Chiapas is also known for its smooth, medium body and balanced acidity, making it an excellent choice for a variety of brewing methods, including drip, pour-over, French press, and espresso. The coffee is versatile enough to enjoy on its own or as a base for lattes and cappuccinos.This coffee is certified organic, ensuring that no harmful chemicals or pesticides are used during its cultivation. As a result, you can enjoy not only a delicious cup of coffee but also support sustainable and eco-friendly farming practices.Whether you're starting your day with a rich, flavorful brew or looking for a coffee to unwind with in the evening, Mexican Organic Chiapas offers a satisfying, smooth, and comforting experience with every sip.",
    notes:"Dark chocolate, roasted nuts, smoky."
  },
  {
    name: "Tanzanian Peaberry Premium Blend",
    description: "A premium blend with bright acidity and fruity flavors.",
    price: 19.49,
    imageUrl: "",
    rating: 4.8,
    bestSeller: true,
    category: "Premium Blends",
    longDescription: "Tanzanian Peaberry Premium Blend is a vibrant and lively coffee that brings together the unique flavors of Tanzania's renowned peaberry beans. Known for their rounded, bold flavor and distinctive shape, peaberries are a natural mutation of coffee cherries that result in a single, round bean inside the cherry instead of the usual two. This rare and highly sought-after variety creates a cup of coffee with exceptional brightness and complexity.This premium blend features bright acidity that dances on your palate, delivering lively, fruity flavors with subtle hints of citrus and berry. The coffee's natural sweetness is balanced by a clean, refreshing finish, making it perfect for those who enjoy a bright, flavorful brew that doesn't overwhelm the senses. The beans are carefully selected and expertly blended to bring out the best of Tanzania's signature peaberry characteristics.Grown at high altitudes in the fertile volcanic soils of the East African region, Tanzanian Peaberry Premium Blend is known for its excellent body and crisp, fruity notes that are perfectly balanced with its medium acidity. This makes it a versatile coffee, great for enjoying as a morning pick-me-up, a refreshing afternoon treat, or even as a base for cold brew.The coffee is full of character, with complex fruity undertones that make each sip a delightful exploration of its origins. Its bright, clean taste pairs well with a variety of brewing methods, from traditional drip coffee to pour-over and French press. Whether enjoyed black or with a splash of milk, Tanzanian Peaberry Premium Blend is sure to satisfy your craving for a premium, flavorful cup of coffee.",
    notes:"Toast, caramel, fruity, smooth."

  },
  {
    name: "Ecuadorian Organic",
    description: "Mild and sweet with notes of chocolate and nuts.",
    price: 15.59,
    imageUrl: "",
    rating: 4.7,
    bestSeller: true,
    category: "Organic",
    notes:"Bright, citrus, honey, balanced, clean."
  },
  {
    name: "Panama Geisha",
    description: "Geisha coffee is known for its complex flavor profile, often fruity and floral with hints of jasmine, bergamot, and tropical fruit.",
    price: 85.00,
    imageUrl: "",
    rating: 5.0,
    bestSeller: true,
    category: "Single Origin",
    longDescription: "Panama Geisha is a world-renowned coffee that stands at the pinnacle of specialty coffee. Known for its exceptional complexity and unrivaled flavor profile, this single origin coffee is beloved by coffee connoisseurs and experts around the globe. Grown in the highlands of Panama, Geisha coffee is produced in small quantities, making it one of the most exclusive and sought-after coffees in the world.The flavor profile of Panama Geisha is a delicate symphony of fruity and floral notes that captivate the senses with every sip. Its aromatic bouquet includes hints of jasmine, bergamot, and tropical fruit, such as ripe peaches and citrus, making it a coffee that transports you to a lush, vibrant paradise. The combination of floral and fruity undertones, paired with a silky smooth mouthfeel, creates a truly refined cup that is as complex as it is refreshing.The unique flavor characteristics of Panama Geisha are the result of its meticulous cultivation and careful processing methods. The beans are handpicked at peak ripeness and undergo an intensive washing and drying process to preserve their delicate flavors. The result is a cup that offers incredible clarity, balance, and a clean, crisp finish.",
    notes:"Nutty, chocolate, caramel, smooth, sweet."
  },
  {
    name: "Ethiopian Sidamo",
    description: "A coffee known for its bright acidity, floral aroma, and fruity flavors, including hints of lemon, bergamot, and jasmine.",
    price: 21.99,
    imageUrl: "",
    rating: 4.9,
    bestSeller: true,
    category: "Single Origin",
    longDescription: "Ethiopian Sidamo is one of the most celebrated coffees in the world, known for its exceptional brightness and vibrant acidity. Grown in the Sidamo region of Ethiopia, this single origin coffee is a true representation of the rich coffee culture that thrives in the birthplace of coffee. Sidamo coffee beans are carefully cultivated at high altitudes, where the cool temperatures and rich soil impart unique flavor characteristics that are unmistakable in every cup.This coffee is a symphony of delicate floral and fruity notes, offering a sensory experience that is both invigorating and refreshing. The floral aroma is accompanied by bright, citrusy acidity, with distinct hints of lemon and bergamot that add complexity and depth. As the coffee cools, subtle notes of jasmine emerge, creating a fragrant and aromatic profile that is both elegant and captivating.The flavor profile of Ethiopian Sidamo is incredibly lively, with a light to medium body that allows the fruity and floral notes to shine. Whether brewed as a pour-over, French press, or Aeropress, Sidamo delivers a cup that is crisp, clean, and bursting with bright flavors. The combination of bright acidity and sweet fruitiness makes it an ideal coffee for those who appreciate a lively, vibrant cup that offers both complexity and clarity.Ethiopian Sidamo is perfect for those who seek a coffee with a dynamic and refreshing taste, ideal for any time of day. Its elegant flavor profile makes it an excellent choice for both casual coffee drinkers and coffee enthusiasts looking to experience one of the best coffees Ethiopia has to offer.",
    notes:"Mild, nutty, floral, creamy, light."
  },
  {
    name: "Hawaiian Kona",
    description: "Grown in the volcanic soil of Hawaii, Kona coffee is smooth and rich, with a nutty, chocolatey flavor profile.",
    price: 39.99,
    imageUrl: "",
    rating: 4.8,
    bestSeller: true,
    category: "Single Origin",
    notes: "Dark chocolate, smoky, rich, bold.",
    longDescription:"Hawaiian Kona Coffee is one of the most famous and highly regarded coffees in the world, known for its rich flavor profile and smooth, aromatic qualities. Grown on the slopes of the Mauna Loa volcano in Hawaii, Kona coffee is cultivated in a unique environment with ideal soil, climate, and altitude for coffee production. This region's volcanic soil is rich in nutrients, and the coffee trees benefit from the warm, sunny days and cool nights, creating the perfect growing conditions for high-quality coffee beans.Hawaiian Kona coffee is produced using traditional, sustainable farming methods. The beans are hand-picked at the peak of ripeness, ensuring that only the best beans are selected. After harvesting, the beans are processed using the washed method, which helps to preserve their bright, clean flavor. The beans are then carefully dried, roasted, and packaged to maintain their high quality"
    
  },
  {
    name: "Kopi Luwak (Civet Coffee)",
    description: "One of the rarest and most expensive coffees in the world, made from beans that have been eaten and then excreted by civet cats, giving it a distinct flavor profile.",
    price: 150.00,
    imageUrl: "",
    rating: 5.0,
    bestSeller: false,
    category: "Premium Blends",
    longDescription: "Kopi Luwak is one of the rarest and most unique coffees in the world, often referred to as 'civet coffee' because of its unusual production process. The beans are eaten and then excreted by the civet, a small mammal found in Southeast Asia. This process is said to contribute to its distinctive flavor profile.The unique fermentation process is thought to reduce the acidity and bitterness in the coffee, leading to a milder, smoother cup. The beans also undergo natural processing, which can result in a cleaner, more refined flavor than traditionally processed coffees.Kopi Luwak is often considered a luxury coffee, and because it’s rare and labor-intensive to produce, it typically carries a high price tag. This coffee is a favorite among those who seek a truly exotic and premium coffee experience.",
    notes:"A soft nutty flavor, often likened to almonds or hazelnuts."
   
  },
  {
    name: "Yemen Mocca",
    description: "Known for its intense flavor and natural sweetness, Yemen Mocca is a coffee with a rich, dark chocolatey base and a wine-like finish.",
    price: 45.00,
    imageUrl: "",
    rating: 4.9,
    bestSeller: false,
    category: "Single Origin",
    notes:"Mild, creamy, floral, nutty, balanced."
  }
  ];
  
  module.exports=coffees