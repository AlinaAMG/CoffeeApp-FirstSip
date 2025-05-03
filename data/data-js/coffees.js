const coffees = [
  {
    name: 'Panama Geisha',
    description:
      'Panama Geisha is one of the most prized and rare coffees in the world, known for its complex flavors of tropical fruits, jasmine, bergamot, and honey.',
    longDescription:
     `Panama Geisha is one of the most prized and celebrated coffees in the world, renowned for its exceptional flavor complexity and floral elegance. Originally from Ethiopia, the Geisha variety found its perfect home in the highlands of Panama, particularly in the Boquete region, where ideal altitude and climate conditions allow it to thrive.
     This coffee offers an extraordinary tasting experience, with notes of jasmine, bergamot, tropical fruits like mango and papaya, and a tea-like body. Its bright acidity and smooth mouthfeel make it a favorite among specialty coffee lovers and professional baristas alike

     Grown at elevations above 1,500 meters, Panama Geisha beans are often processed using washed or natural methods, each bringing out different facets of the coffee’s vibrant character. With a reputation for excellence, it consistently earns top scores in international competitions.

    Panama Geisha isn't just a coffee — it's a refined and luxurious sensory journey that rewards those who appreciate subtlety, balance, and complexity in every cup.
.`,
    price: 35.99,
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=3749&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bestSeller: false,
    category: 'Single Origin',
    weightOptions: [250, 1000],
    roastLevel: 'Light',
    region: 'Panama',
    notes: ['Tropical Fruit', 'Jasmine', 'Bergamot', 'Honey', 'Papaya'],
    slug: 'panama-geisha',
    soldOut: false,
    rating: 4.6,
  },
  {
    name: 'Ethiopian Yirgacheffe',
    description:
      'Ethiopian Yirgacheffe is known for its vibrant and complex flavors with bright acidity, offering hints of citrus, floral, and berry-like notes.',
    longDescription:
    `Ethiopian Yirgacheffe is one of the most celebrated and highly sought-after coffees in the world, prized for its vibrant and complex flavor profile. Originating from the Yirgacheffe region in Ethiopia, this coffee is renowned for its distinctive characteristics, making it a favorite among specialty coffee enthusiasts.

    Grown at high altitudes, typically between 1,700 and 2,200 meters above sea level, Yirgacheffe coffee benefits from Ethiopia’s ideal climate, which contributes to its exceptional taste. The beans are predominantly grown by smallholder farmers who use traditional farming methods, allowing the coffee to maintain its unique and natural qualities.
    
    The flavor profile of Ethiopian Yirgacheffe is known for its bright acidity and floral notes, often likened to jasmine, bergamot, and citrus. A delicate sweetness complements the vibrant acidity, making the coffee feel refreshing yet smooth. The coffee may also have hints of tropical fruits, such as mango or lemon zest, adding to its complexity. The aftertaste is clean and crisp, leaving a delightful lingering sweetness.
    
    Yirgacheffe coffee is often processed using the washed (wet) method, which highlights the clean, bright flavors and enhances its clarity. The beans are carefully harvested and processed by the local farmers, who meticulously wash the coffee cherries to remove any impurities. This attention to detail is reflected in the exceptional quality of the coffee.`,
    price: 29.99,
    imageUrl:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlfGVufDB8fDB8fHww',
    bestSeller: true,
    category: 'Premium Blends',
    weightOptions: [250, 1000],
    roastLevel: 'Medium',
    region: 'Ethiopia',
    notes: ['Citrus', 'Floral', 'Berry', 'Lemon', 'Orange'],
    slug: 'ethiopian-yirgacheffe',
    soldOut: false,
    rating: 4.5,
  },

  {
    name: 'Sumatra Mandheling',
    description:
      `Sumatra Mandheling coffee is known for its earthy, full-bodied flavor profile with low acidity and notes of chocolate, spice, and tobacco.',
    longDescription:
    Sumatra Mandheling is a distinctive and beloved coffee from the Indonesian island of Sumatra. Known for its bold, earthy flavors and full-bodied profile, Mandheling coffee has become a staple in the world of specialty coffee, appreciated for its depth and complexity.

    Grown in the rich volcanic soils of the island's highlands, Mandheling coffee beans are typically harvested at elevations ranging from 1,200 to 1,500 meters above sea level. The beans are handpicked by smallholder farmers who use traditional methods to cultivate and process the coffee, contributing to its unique flavor characteristics.
    
    The hallmark of Sumatra Mandheling is its intense, earthy flavor profile. It offers a deep, full-bodied experience with rich notes of dark chocolate, earthy spices, and a hint of herbal undertones. The coffee is known for its low acidity, which adds to its smooth, syrupy mouthfeel. As you sip, you may also detect subtle hints of dried fruit, tobacco, and a touch of brown sugar sweetness, providing a perfect balance of flavors.
    
    Mandheling coffee is often processed using the wet-hulling method, a traditional technique unique to Sumatra. This process involves removing the outer skin of the coffee cherry before the beans are fully dried, resulting in a cup that is rich and rustic in flavor. The wet-hulling method also contributes to the coffee's characteristic earthy, spicy, and slightly savory notes, distinguishing it from other coffee varieties.`,
    price: 22.99,
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/5d9f5cfe66c0ff4ce192f1a2/d32676e0-bd1a-46dd-b16c-da27e1b4c1eb/My+project-1+%2820%29.png',
    bestSeller: true,
    category: 'Single Origin',
    weightOptions: [250, 1000],
    roastLevel: 'Dark',
    region: 'Sumatra',
    notes: ['Earthy', 'Chocolate', 'Spicy', 'Tobacco', 'Smoky'],
    slug: 'sumatra-mandheling',
    soldOut: false,
    rating: 4.3,
  },
  {
    name: 'Guatemalan Antigua',
    description:
      'Guatemalan Antigua is a coffee known for its rich, full-bodied flavor, balanced acidity, and notes of chocolate, orange, and floral undertones.',
    longDescription:
    `Guatemalan Antigua is one of the most prestigious coffees in the world, known for its bright acidity, full-bodied flavor, and exceptional balance. Grown in the Antigua region of Guatemala, this coffee is celebrated for its complexity and rich taste profile, making it a favorite among coffee enthusiasts and connoisseurs alike.

    Located in the central highlands of Guatemala, Antigua is a volcanic region with rich, fertile soils, ideal for coffee cultivation. The coffee plants thrive at altitudes ranging from 1,500 to 2,000 meters, where the cooler temperatures and consistent rainfall create the perfect environment for producing high-quality beans. The beans are carefully handpicked by local farmers, many of whom have been cultivating coffee for generations, ensuring a traditional and meticulous approach to coffee farming.
    
    The flavor profile of Guatemalan Antigua is distinctive and dynamic. The coffee is known for its bright and lively acidity, often described as citrus-like or similar to green apple. This is balanced by a full body and a smooth, velvety mouthfeel. As you sip, you'll find flavors of chocolate, caramel, and hints of floral undertones, along with a mild spiciness that adds depth and complexity to the cup. There's also a subtle smokiness and a touch of nutty sweetness that lingers in the aftertaste, making each sip an enjoyable experience.`,
    price: 25.99,
    imageUrl:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D',
    bestSeller: false,
    category: 'Organic',
    weightOptions: [250, 1000],
    roastLevel: 'Medium',
    region: 'Guatemala',
    notes: ['Cocoa', 'Orange', 'Floral', 'Citrus', 'Sweet'],
    slug: 'guatemalan-antigua',
    soldOut: false,
    rating: 4.6,
  },
  {
    name: 'Brazilian Santos',
    description:
      'Brazilian Santos is a smooth, medium-bodied coffee known for its mild flavor with chocolate, nutty, and caramel undertones.',
    longDescription:
    `Brazilian Santos is one of the most popular and widely consumed coffees globally, known for its smooth, mild flavor and low acidity. Originating from the Santos region in Brazil, this coffee is highly regarded for its well-balanced taste, making it a staple in many coffee blends and a favorite choice for espresso lovers.

    The Santos region, located in the southeastern part of Brazil, is one of the country's most important coffee-growing areas. The region's unique climate, characterized by warm temperatures and moderate rainfall, combined with its fertile soil, creates the perfect environment for growing coffee beans. Brazilian Santos is primarily produced from Arabica beans, which are known for their smoothness and ability to develop a wide range of flavors.
    
    The flavor profile of Brazilian Santos is soft and approachable, with a medium body and a mellow, nutty sweetness that makes it an excellent choice for those who prefer a gentler cup of coffee. The coffee typically has a mild acidity, often described as round or smooth, which gives it a balanced and easy-drinking character. Notes of chocolate, hazelnut, and almond are common, with a subtle sweetness that lingers in the aftertaste. Some variations of Brazilian Santos may also exhibit a hint of caramel or toffee, adding richness to its flavor profile.`,
    price: 18.99,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2783/4082/files/health-benefits-of-coffee-black-creek-coffee-blog.jpg?v=1620240785',
    bestSeller: true,
    category: 'Organic',
    weightOptions: [250, 500],
    roastLevel: 'Medium',
    region: 'Brazil',
    notes: ['Chocolate', 'Nutty', 'Caramel', 'Mild', 'Smooth'],
    slug: 'brazilian-santos',
    soldOut: false,
    rating: 4.9,
  },
  {
    name: 'Colombian Supremo',
    description:
      'Colombian Supremo is a coffee known for its balanced taste, mild acidity, and smooth body, with flavors of caramel, chocolate, and nuttiness.',
    longDescription:
    `Colombian Supremo is one of the most renowned and beloved coffees in the world, celebrated for its rich flavor profile, bright acidity, and full-bodied taste. Grown in the high-altitude regions of Colombia, particularly in the central and northern mountain ranges, Colombian Supremo coffee is known for its smoothness, balanced flavors, and complexity, making it a favorite among coffee enthusiasts and professionals alike.

    The "Supremo" grade is one of the highest quality designations for Colombian coffee, referring to the size of the beans. Supremo beans are larger and more uniform in size compared to other grades, which contributes to a more consistent roasting process and an enhanced flavor profile.
    
    The coffee is often grown at elevations ranging from 1,200 to 2,000 meters above sea level, where the cooler temperatures and rich volcanic soil create optimal conditions for coffee cultivation. The region's unique climate, with its distinct wet and dry seasons, allows the coffee cherries to mature slowly, which helps bring out the depth and complexity of the flavors.
    
    Colombian Supremo typically has a medium to full body with a bright, lively acidity that balances perfectly with its rich flavors. The flavor profile is characterized by a combination of fruity, floral, and nutty notes, often with hints of red fruit such as apple or cherry, as well as subtle undertones of caramel, chocolate, and toasted almonds. The coffee's acidity is smooth and vibrant, providing a crisp and refreshing finish.
    
    One of the standout features of Colombian Supremo is its versatility. It can be enjoyed as a single-origin coffee brewed using various methods, including drip coffee, French press, espresso, and pour-over. The coffee's bright acidity and well-rounded body make it an excellent choice for a morning cup or for use in more complex espresso blends.`,
    price: 23.99,
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1675237625867-faddf7f858b7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxjb2ZmZWV8ZW58MHx8MHx8fDA%3D',
    bestSeller: false,
    category: 'Organic',
    weightOptions: [250, 1000],
    roastLevel: 'Medium',
    region: 'Colombia',
    notes: ['Caramel', 'Chocolate', 'Nutty', 'Smooth', 'Balanced'],
    slug: 'colombian-supremo',
    soldOut: false,
    rating: 4.8,
  },
  {
    name: 'Costa Rican Tarrazú',
    description:
      'Costa Rican Tarrazú is a bright and flavorful coffee known for its crisp acidity and sweet, fruity notes with a hint of honey.',
    longDescription:
    `Costa Rican Tarrazú is one of the finest coffees in the world, recognized for its vibrant acidity, smooth body, and complex flavors. Originating from the Tarrazú region in Costa Rica, this coffee is grown in the high-altitude volcanic soil of the Central Valley, where the climate and altitude create ideal conditions for cultivating premium Arabica beans. Known for its rich flavor and outstanding quality, Costa Rican Tarrazú is a staple for coffee connoisseurs around the globe.

    The Tarrazú region, often referred to as "The Valley of the Sun," boasts ideal conditions for coffee cultivation. The fertile volcanic soil, combined with a combination of tropical weather and altitude ranging from 1,200 to 1,800 meters above sea level, helps produce a coffee bean that is rich in flavor and aromatic qualities. The region is known for its excellent coffee-growing practices, and many small, family-owned farms take pride in handpicking the cherries, ensuring only the highest quality beans are selected.
    
    Costa Rican Tarrazú coffee is typically processed using the washed (wet) method, which contributes to its clean, bright taste. The cherries are pulped and fermented to remove the outer layers, and the beans are then washed to remove any remaining impurities. This method helps to preserve the natural flavors of the coffee, resulting in a smooth, crisp cup with a bright and tangy acidity.`,
    price: 24.99,
    imageUrl:
      'https://images.unsplash.com/photo-1522726336270-3a0053210f06?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D',
    bestSeller: false,
    category: 'Single Origin',
    weightOptions: [250, 1000],
    roastLevel: 'Light',
    region: 'Costa Rica',
    notes: ['Citrus', 'Honey', 'Sweet', 'Fruity', 'Bright'],
    slug: 'costa-rican-tarrazu',
    soldOut: false,
    rating: 4.1,
  },
  {
    name: 'Kenyan AA',
    description:
      'Kenyan AA is a coffee known for its intense flavor, bright acidity, and complex aromas of berry, citrus, and floral notes.',
    longDescription:
    `Kenyan AA is one of the most highly regarded and sought-after coffee varieties in the world. Grown in the rich, volcanic soil of Kenya's central highlands, specifically at elevations between 1,500 to 2,100 meters above sea level, Kenyan AA is known for its vibrant acidity, full body, and complex flavor profile. The "AA" grade signifies the size and quality of the coffee bean, with the finest beans being selected based on strict standards for size and maturity.

    Kenya’s unique climate and topography, combined with its rich volcanic soil, create an ideal environment for growing coffee. The combination of warm days and cool nights, along with ample rainfall, helps to develop the distinct flavor characteristics that Kenyan AA is famous for. The altitude plays a crucial role in slowing the ripening process of the coffee cherries, allowing the beans to develop a more complex and balanced flavor profile.
    
    The beans are typically processed using the washed (wet) method, which involves removing the outer cherry pulp before fermenting and washing the beans. This method helps to enhance the bright, clean acidity and fruity notes in the final cup. Kenyan AA coffee is also known for its meticulous processing, where the beans are sorted multiple times to ensure only the highest quality are exported.
    
    Kenyan AA coffee has a distinct and highly complex flavor profile. The first thing that strikes you is its vibrant acidity, often described as bright and crisp, with citrusy notes of lemon, orange, or black currant. There are often hints of tropical fruits like pineapple and passion fruit, adding layers of fruitiness that make each sip unique. The coffee also has a full-bodied mouthfeel with a pleasant smoothness, which balances the acidity and creates a rich, well-rounded flavor.
    
    The aftertaste of Kenyan AA coffee is clean and lingering, with a slightly wine-like quality. You may detect subtle undertones of berry, jasmine, or even sweet spices, adding depth and complexity to the cup. This coffee is often regarded as one of the best examples of the Arabica coffee variety, and its complexity makes it a favorite among coffee enthusiasts who appreciate bold and distinctive flavors.`,
    price: 32.99,
    imageUrl:
      'https://images.unsplash.com/photo-1625021659159-f63f546d74a7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D',
    bestSeller: false,
    category: 'Single Origin',
    weightOptions: [250, 1000],
    roastLevel: 'Medium',
    region: 'Kenya',
    notes: ['Berry', 'Citrus', 'Floral', 'Bright', 'Intense'],
    slug: 'kenyan-aa',
    soldOut: false,
    rating: 3.9,
  },
  {
    name: 'Hawaiian Kona',
    description:
      'Hawaiian Kona coffee is known for its smooth, nutty flavor with a slight hint of tropical fruit and a pleasant, mellow aftertaste.',
    longDescription:
    `Hawaiian Kona is one of the most sought-after and unique coffees in the world, grown exclusively on the slopes of the volcanic mountains of Hawaii's Big Island, particularly in the Kona district. The combination of rich volcanic soil, favorable microclimates, and high altitudes creates the perfect environment for producing coffee with a remarkable and distinctive flavor profile.

    The Kona region’s ideal growing conditions—warm temperatures, ample rainfall, and volcanic soil rich in minerals—provide the perfect balance for coffee cultivation. The coffee is typically grown at altitudes ranging from 600 to 1,000 meters, where the cool nights and sunny days allow the coffee cherries to ripen slowly, enhancing the complexity and depth of flavor.
    
    Kona coffee is known for its smooth, well-balanced taste with a medium body and low acidity, making it a favorite among coffee connoisseurs. The beans are hand-picked, a labor-intensive process that ensures only the ripest cherries are harvested. After picking, the beans are processed using the wet method, which involves removing the pulp, fermenting, and washing the beans to enhance their flavor clarity and brightness.
    
    The flavor profile of Hawaiian Kona is both rich and nuanced. The coffee is known for its smooth, buttery texture and subtle sweetness. The first sip often reveals gentle nutty flavors, such as almond or hazelnut, along with mild fruity notes of red apple or cherry. As you continue, hints of chocolate, caramel, and vanilla emerge, giving the coffee a round, comforting flavor. The coffee’s clean finish and balanced acidity make it incredibly easy to drink and highly satisfying.`,
    price: 40.99,
    imageUrl:
      'https://images.unsplash.com/photo-1498709112912-9be3173d30be?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D',
    bestSeller: false,
    category: 'Single Origin',
    weightOptions: [250, 1000],
    roastLevel: 'Medium',
    region: 'Hawaii',
    notes: ['Nutty', 'Chocolate', 'Tropical Fruit', 'Smooth', 'Mellow'],
    slug: 'hawaiian-kona',
    soldOut: false,
    rating: 4.1,
  },

  {
    name: 'Blue Mountain Blend',
    description:
      'This premium blend combines the famous Jamaican Blue Mountain coffee with the smoothness of Central American beans, creating a balanced, smooth cup with mild acidity.',
    longDescription:
    `Blue Mountain Blend is a premium coffee that combines the finest beans from Jamaica’s renowned Blue Mountain region with high-quality beans from other celebrated coffee-growing regions around the world. This unique blend offers an exceptional balance of flavors, making it a favorite among coffee enthusiasts and connoisseurs alike.

    The legendary Jamaican Blue Mountain coffee is the cornerstone of this blend. Grown in the high-altitude, mist-covered mountains of Jamaica, these beans are renowned for their smooth, well-balanced flavor, mild acidity, and gentle sweetness. The cool, humid climate and rich volcanic soil provide the ideal conditions for the beans to develop their distinct flavor profile, which is characterized by a silky body, delicate fruity undertones, and a subtle floral aroma.
    
    To enhance the complexity of Blue Mountain Blend, beans from other premium regions are carefully selected and blended. Typically, these additional beans come from regions such as Latin America, Africa, or Indonesia, each contributing their own unique flavors to the mix. The resulting blend offers a harmonious combination of the smooth and mild flavors of Jamaican Blue Mountain coffee with the depth and richness of other world-class coffees.
    
    When brewed, Blue Mountain Blend delivers a smooth, well-rounded cup with a medium body and a mild acidity. The flavor profile is complex and refined, with a subtle sweetness that is balanced by hints of nuts, caramel, and cocoa. You may also detect light fruity notes, such as ripe citrus or stone fruits, which add brightness and freshness to the cup. The aroma is inviting, with delicate floral and fruity fragrances that enhance the overall sensory experience.
    
    One of the defining features of Blue Mountain Blend is its lack of harsh bitterness. This makes it a perfect choice for those who enjoy a gentle, nuanced cup without the overpowering aftertaste found in many other coffees. The balance between acidity, sweetness, and body creates a coffee that is both satisfying and refreshing, with a clean, smooth finish that lingers pleasantly on the palate.`,
    price: 59.99,
    imageUrl:
      'https://img.freepik.com/premium-photo/coffee-cup-coffee-beans_78677-5886.jpg?w=900',
    bestSeller: true,
    category: 'Premium Blends',
    weightOptions: [250, 1000],
    roastLevel: 'Medium',
    region: 'Jamaica & Central America',
    notes: ['Floral', 'Mild Acidity', 'Smooth', 'Fruity', 'Balanced'],
    slug: 'blue-mountain-blend',
    soldOut: false,
    rating: 4.7,
  },
  {
    name: 'Café de Colombia Blend',
    description:
      'A rich and aromatic blend of Colombian coffee with a touch of Brazilian beans, offering a full-bodied taste with bright acidity and hints of caramel and chocolate.',
    longDescription:
      'This premium blend combines high-quality Colombian coffee, renowned for its rich flavor and balanced acidity, with Brazilian beans that add depth and a mild nuttiness. The result is a cup that is both full-bodied and smooth, with a bright acidity that gives way to flavors of caramel, chocolate, and a slight nutty sweetness. Perfect for those who enjoy a well-rounded, medium-bodied cup of coffee with a satisfying finish.',
    price: 44.99,
    imageUrl:
      'https://images.unsplash.com/photo-1537130508299-46ab547b4be3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D',
    bestSeller: false,
    category: 'Premium Blends',
    weightOptions: [250, 1000],
    roastLevel: 'Medium',
    region: 'Colombia & Brazil',
    notes: ['Caramel', 'Chocolate', 'Nutty', 'Bright Acidity', 'Full-bodied'],
    slug: 'cafe-de-colombia-blend',
    soldOut: false,
    rating: 4.6,
  },
  {
    name: 'Italian Espresso Blend',
    description:
      'A premium espresso blend combining rich Italian beans with a touch of dark-roasted Brazilian coffee, providing a bold, full-bodied espresso with notes of chocolate and caramel.',
    longDescription:
      'This Italian Espresso Blend combines high-quality beans from Italy with dark-roasted Brazilian coffee to create a bold, full-bodied espresso that has deep, rich flavors. The blend offers notes of chocolate, caramel, and a slightly smoky undertone, making it perfect for espresso lovers who enjoy a strong, flavorful cup. Whether enjoyed as a straight shot or in lattes and cappuccinos, this espresso is a true indulgence.',
    price: 49.99,
    imageUrl:
      'https://img.freepik.com/free-photo/close-up-delicious-coffee-after-harvest_23-2151913332.jpg?t=st=1746196724~exp=1746200324~hmac=50dca791b87be32e63825efc68db7e76d7c2c1f154ad3da914971ddb658c8cde&w=996',
    bestSeller: true,
    category: 'Premium Blends',
    weightOptions: [250, 1000],
    roastLevel: 'Dark',
    region: 'Italy & Brazil',
    notes: ['Chocolate', 'Caramel', 'Bold', 'Smoky', 'Rich'],
    slug: 'italian-espresso-blend',
    soldOut: false,
    rating: 4.6,
  },
  {
    name: 'Organic Peru Coffee',
    description:
      'This organic coffee from Peru is known for its smooth, mild flavor with a hint of nutty sweetness and a clean finish.',
    longDescription:
      'Grown in the highlands of Peru, this organic coffee offers a smooth and well-balanced cup. The mild flavor is complemented by hints of toasted nuts and caramel, with a clean, refreshing finish. Perfect for a calm morning brew.',
    imageUrl:
      'https://img.freepik.com/free-photo/cup-hot-coffee-with-cookies-table-lights_181624-45606.jpg?t=st=1746196831~exp=1746200431~hmac=5062fcc7fa45a10eee79d39bc2adc1f4b872e0cd89b3dab44aaef806cce15554&w=1380',
    price: 42.0,
    category: 'Organic',
    region: 'Peru',
    slug: 'organic-peru-coffee',
    rating: 4.3,
    weightOptions: [250, 1000],
    roastLevel: 'Medium',
    notes: ['Nutty', 'Caramel', 'Smooth', 'Clean'],
    soldOut: false,
    bestSeller: true,
  },
  {
    name: 'Organic Ethiopian Sidamo',
    description:
      'A smooth, full-bodied organic coffee with bright acidity and floral undertones. A delightful choice for those who enjoy a lively brew.',
    longDescription:
      'Organic Ethiopian Sidamo offers a unique flavor profile with bright acidity and floral notes of jasmine and bergamot. Its full-bodied taste is balanced with a slight citrusy sweetness, making it a versatile coffee for various brewing methods.',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1672406540165-bbb755ffc221?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxjb2ZmZWV8ZW58MHx8MHx8fDA%3D',
    price: 50.0,
    category: 'Organic',
    region: 'Ethiopia',
    slug: 'organic-ethiopian-sidamo',
    rating: 4.6,
    weightOptions: [250, 1000],
    roastLevel: 'Light',
    notes: ['Floral', 'Citrus', 'Bright', 'Full-bodied'],
    soldOut: false,
    bestSeller: false,
  },
  {
    name: 'Organic Mexican Coffee',
    description:
      'A rich, earthy organic coffee with chocolatey undertones and a smooth finish. Ideal for those who enjoy a medium-bodied coffee.',
    longDescription:
      'This organic coffee from Mexico is known for its rich, earthy flavor with undertones of dark chocolate. The smooth finish and balanced acidity make it an excellent choice for those who prefer a medium-bodied coffee with depth.',
    imageUrl:
      'https://images.unsplash.com/photo-1493925410384-84f842e616fb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxjb2ZmZWV8ZW58MHx8MHx8fDA%3D',
    price: 38.0,
    category: 'Organic',
    region: 'Mexico',
    slug: 'organic-mexican-coffee',
    rating: 4.2,
    weightOptions: [250, 1000],
    roastLevel: 'Medium',
    notes: ['Earthy', 'Chocolate', 'Smooth', 'Balanced'],
    soldOut: false,
    bestSeller: true,
  },
  {
    name: 'Organic Costa Rican Coffee',
    description:
      'This organic Costa Rican coffee features a rich, creamy body with notes of citrus and honey, making for a bright, clean cup.',
    longDescription:
      'Organic Costa Rican coffee is known for its rich, creamy body with vibrant citrus flavors and a touch of honey sweetness. It has a clean, crisp finish and is perfect for those who love a bright cup with a smooth texture.',
    imageUrl:
      'https://images.unsplash.com/photo-1529229089-f5719a804879?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxjb2ZmZWV8ZW58MHx8MHx8fDA%3D',
    price: 45.0,
    category: 'Organic',
    region: 'Costa Rica',
    slug: 'organic-costa-rican-coffee',
    rating: 4.4,
    weightOptions: [250, 1000],
    roastLevel: 'Medium',
    notes: ['Citrus', 'Honey', 'Creamy', 'Bright'],
    soldOut: false,
    bestSeller: true,
  },
  {
    name: 'Organic Indian Monsooned Malabar',
    description:
      'A unique organic coffee known for its smooth, earthy flavor and a distinct, slightly spicy aftertaste. Great for bold coffee lovers.',
    longDescription:
      'Organic Indian Monsooned Malabar is processed using a unique method where the beans are exposed to the monsoon winds, giving the coffee a smooth, earthy flavor. It has a bold body with subtle hints of spice and a complex aftertaste.',
    imageUrl:
      'https://images.unsplash.com/photo-1517476950322-6251d142eddf?w=1000&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxwaG90by1jb3ZmZWV8MjF8fHx8fHwxNjg3NjA3MDA5&ixlib=rb-4.0.3',
    price: 55.0,
    category: 'Organic',
    region: 'India',
    slug: 'organic-indian-monsooned-malabar',
    rating: 4.5,
    weightOptions: [250, 1000],
    roastLevel: 'Dark',
    notes: ['Earthy', 'Spicy', 'Bold', 'Smooth'],
    soldOut: false,
    bestSeller: false,
  },
];

module.exports = coffees;
