//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics  


export class Produce {
  constructor (name, season, img, info) {
    this.name = name;
    this.season = season;
    this.img = img;
    this.info = info;
  }
}

//Vegetables
let asparagus = new Produce('asparagus', 'asparagus.jpeg','Asparagus comes in green, white, purple and wild varities. Look for the thinnest stalks possible; these are the most tender. Steer clear of limp and wilted asparagus.');
let broccoli = new Produce('broccoli', 'broccoli.jpeg', 'Broccoli florets should be tightly closed and deep green, with a purplish tinge; avoid limp or yellowing broccoli. Stems should be free of mold or signs of bruising.');
let cabbage = new Produce('cabbage', 'cabbage.jpeg', 'Red and green cabbage should have a firm, tight head and feel heavy for their size, with no black or soft spots. Savoy and Napa cabbage are generally a bit looser');
let kale = new Produce('kale', 'kale.jpeg', 'When shopping for kale, stay clear of wilted or browning leaves. Leaves and stalks should be firm and dry instead of wilted and mushy.');
let lettuce = new Produce('lettuce', 'lettuce.jpeg', 'There are many varieties of lettuce, from loose-leaf to those bought as a head. For all varieties, look for leaves that are intact and not wilting.');
let nopal = new Produce('nopal', 'nopal.jpeg', 'Nopales are the leaves of the prickly pear cactus. Harvesting young pads makes for a much easier time removing spines, although some vendors sell them with the spines already removed.');
let onion = new Produce('onion', 'onion.jpeg', 'When purchasing dried onions, avoid brown or mushy spots and choose onions that feel heavy for their size without any signs of sprouting.');
let olive = new Produce('olive', 'olive.jpeg', 'Olives come in a variety of colors and may come whole or with the pit alread removed. Fresh, cured olives should be kept in the refrigerator to extend their life for a few weeks.');
let radish = new Produce('radish', 'radish.jpeg', 'Most radishes are sold with the tops attached: look for vibrant greens and firm roots. Do not forget you can saute the tops or use them in pesto!');
let tomato = new Produce('tomato', 'tomato.jpeg', 'Tomatoes come in a dizzying array of colors and shapes, so rather than relying on color alone, look for tomatoes that are heavy and fragrant. Some scarring is normal on heirloom varieties, but avoid tomatoes with freshly torn skin.');

//Fruits
let apple = new Produce('apple', 'apple.jpeg', 'Worldwide, there are more than 7,500 known varieties, 100 of which are grown commercially in the US. They all differ in shape, size, color, texture, aroma and flavor.');
let blueberry = new Produce('blueberry', 'blueberry.jpeg', 'Look for firm, dry, plump blueberries with smooth skin and no shriveled or moldy bits. Pass on greenish or red ones, they are underripe.'); 
let cantaloupe = new Produce('cantaloupe', 'cantaloupe.jpeg', 'Look for a canteoupe with no nicks in the rind or mold on the blossom end. If it is perfectly ripe, the end should smell nice. Avoid melons with soft spots.');
let cherry = new Produce('cherry', 'cherries.jpeg', 'Cherries can be sweet (even the sour ones), delicious, and eaten raw or cooked. Look for cherries that are firm and have no bruises or browning.');
let grape = new Produce('grape', 'grapes.jpeg', 'Look for fresh grapes with no brown spots, mold or large numbers of shriveled grapes on the cluster. Keep grapes as dry as possible in the refrigerator.');
let nectarine = new Produce('nectarine', 'nectarine.jpeg', 'A variety of peach with fuzzless skin, be sure to choose a fruit that has a strong perfume and is free of blemishes and bruises.');
let strawberry = new Produce('strawberry', 'strawberries.jpeg', 'Bigger is not always better when it comes to strawberries: look for berries that are glossy, fragrant and deeply colored all the way up to the stem.'); 
let watermelon = new Produce('watermelon', 'watermelon.jpeg', 'When choosing a watermelon, look for darker green melons that feel heavy and sound hollow when tapped.');
let orange = new Produce('orange', 'orange.jpeg', 'Oranges that are still green and too hard are not yet ripe. Instead, choose an orange that has medium firmness and feels juicy when lightly squeezed.');
let pineapple = new Produce('pineapple', 'pineapple.jpeg', 'To check for ripeness, inspect the base of a pineapple and take a big whiff. Its perfume should be sweet, not fermented. Pass on any fruit that has moldy spots or leaves that are dried out.');

//Legumes
let adzuki = new Produce('adzuki', 'adzuki-beans.jpeg', 'The bean is usually found dried. In East Asain cuisine, it is commonly sweetened by boiling with sugar and made into a past before eating.');
let blackEyedPeas = new Produce('black-eyed peas', 'black-eyed-peas.jpeg', 'When it comes to fresh shell beans, look for pods that are plump and bumpy, you should be able to feel the fat seeds inside.');
let chickpeas = new Produce('cheakpeas', 'chickpeas.jpeg', 'Also known as garbanzo beans, the fresh green pods (and seeds inside) are edible, but most are harvested dried. Chickpea leaves are also edible.');
let greenBeans = new Produce('green beans', 'green-beans.jpeg', 'Fresh green beans should have a snappy crispness when bent in half. They should be free of blemishes and mold and the pod should not be hard or dried out.');
let limaBeans = new Produce('lima beans', 'lima-beans.jpeg', 'Lima beans are a type of shell bean and can be purchased either fresh in the pod or dried. If buying fresh, look for plump and bumpy pods.');
let shellBeans = new Produce('shellbeans', 'shell-bean.jpeg', 'Fresh shell beans cook much quicker than their dried out counterparts. Look for pods that have pronounced, evenly sized bumps and avoid those with noticeable empty spots.');
let peas = new Produce('peas', 'peas.jpeg', 'Peas are a type of legume and come in a variety of sizes and colors including green, yellow and purple. Look for pods that are plump and bright green.');
let snapPeas = new Produce('snappeas', 'snap-peas.jpeg', 'Snap peas are excellent raw or cooked. When shopping, look for those with full pods that are vibrant in color, avoiding any with mushy spots.');
let peanuts = new Produce('peanuts', 'peanuts.jpeg', 'Peanuts can often be purchased in their distinctive, textured shell either dry roasted or roasted in oil. Be sure to store peanuts in a cool, dry place and discard any peanuts that show signs of mold.');
let snowPeas = new Produce('snowpeas', 'snow-peas.jpeg', 'Good snow peas will be bright green with thin, flexible pods. Snow peas are mildly flavored and can be served raw or cooked.');

export let produceArrObject = [asparagus, broccoli, cabbage, kale, lettuce, nopal, onion, olive, radish, tomato, apple, blueberry, cantaloupe, cherry, grape, nectarine, strawberry, watermelon, orange, pineapple, adzuki, blackEyedPeas, chickpeas, greenBeans, limaBeans, shellBeans, peas, snapPeas, peanuts, snowPeas];

export let northEastFall = [broccoli, cabbage, kale, lettuce, apple, grape, onion, radish];

export let northEastWinter = ['There is no fresh produce for this season... yet!'];

export let northEastSpring = [asparagus, broccoli, cabbage, kale, lettuce, cherry, radish, strawberry, peas, blackEyedPeas, snowPeas];

export let northEastSummer = [asparagus, cabbage, kale, lettuce, apple, blueberry, cantaloupe, cherry, grape, greenBeans, onion, radish, tomato, nectarine, strawberry, watermelon, peas, blackEyedPeas, snowPeas];

export let northWestFall = [apple, grape, onion, cabbage, kale, lettuce, cantaloupe, radish, tomato, chickpeas];

export let northWestSpring= [asparagus, cabbage, kale, lettuce, radish, strawberry, snapPeas];

export let northWestWinter = [cabbage, kale, lettuce, chickpeas, snapPeas];

export let northWestSummer = [asparagus, broccoli, cabbage, kale, lettuce, apple, blueberry, cantaloupe, cherry, grape, onion, radish, tomato, strawberry, watermelon, adzuki, snowPeas];

export let southWestFall = [broccoli, kale, lettuce, apple, greenBeans, radish, tomato, nopal, chickpeas, peanuts, limaBeans];

export let southWestWinter = [broccoli, cabbage, kale, lettuce, radish, strawberry, orange, chickpeas];

export let southWestSpring = [asparagus, broccoli, cabbage, kale, lettuce, onion, radish, tomato, nectarine, strawberry, orange, peas, blackEyedPeas, snowPeas];

export let southWestSummer = [apple, blueberry, cantaloupe, grape, greenBeans, onion, tomato, nectarine, watermelon, nopal, blackEyedPeas, limaBeans];

export let midWestFall = [broccoli, cabbage, kale, lettuce, apple, onion, radish, tomato, chickpeas, shellBeans];

export let midWestWinter = [chickpeas, snapPeas];

export let midWestSpring = [snapPeas, asparagus, lettuce, radish, blackEyedPeas];

export let midWestSummer = [shellBeans, asparagus, broccoli, cabbage, kale, lettuce, apple, blueberry, cantaloupe, cherry, grape, onion, radish, tomato, strawberry, watermelon, blackEyedPeas, adzuki];

export let southFall = [cabbage, kale, lettuce, apple, grape, tomato, peanuts, chickpeas];

export let southWinter = [apple, kale, lettuce, orange];

export let southSpring = [snowPeas, asparagus, broccoli, cabbage, lettuce, blueberry, greenBeans, tomato, strawberry, orange, blackEyedPeas];

export let southSummer = [snowPeas, asparagus, apple, blueberry, cantaloupe, grape, greenBeans, tomato, watermelon, orange, peas];
