export class VegetablesNZ {
  constructor (vegName, vegSeason =[], vegInfo) {
    this.vegName = vegName;
    this.vegSeason = vegSeason;
    this.vegInfo = vegInfo;
    this.VegArrNZ = [nopal, onion, olive, raddish, tomato];
  }
}

let nopal = new VegetablesNZ('nopal', '', 'Nopales are the leaves of the prickly pear cactus. Harvesting young pads makes for a much easier time removing spines, although some vendors sell them with the spines already removed.');
let onion = new VegetablesNZ('onion', '', 'When purchasing dried onions, avoid brown or mushy spots and choose onions that feel heavy for their size without any signs of sprouting.');
let olive = new VegetablesNZ('olive', '', 'Olives come in a variety of colors and may come whole or with the pit alread removed. Fresh, cured olives should be kept in the refrigerator to extend their life for a few weeks.');
let raddish = new VegetablesNZ('raddish', '', 'Most radishes are sold with the tops attached: look for vibrant greens and firm roots. Do not forget you can saute the tops or use them in pesto!');
let tomato = new VegetablesNZ('tomato', '', 'Tomatoes come in a dizzying array of colors and shapes, so rather than relying on color alone, look for tomatoes that are heavy and fragrant. Some scarring is normal on heirloom varieties, but avoid tomatoes with freshly torn skin.');

// let VegArrNZ = [nopal, onion, olive, raddish, tomato];

export class FruitsNZ {
  constructor (fruitName, fruitSeason =[], fruitInfo) {
    this.fruitName = fruitName;
    this.fruitSeason = fruitSeason;
    this.fruitInfo = fruitInfo;
    this.fruitArrNZ = [nectarine, strawberry, watermelon, orange, pineapple];
  }
}

let nectarine = new FruitsNZ('nectarine','','A variety of peach with fuzzless skin, be sure to choose a fruit that has a strong perfume and is free of blemishes and bruises.');
let strawberry = new FruitsNZ('strawberry','','Bigger is not always better when it comes to strawberries: look for berries that are glossy, fragrant and deeply colored all the way up to the stem.'); 
let watermelon = new FruitsNZ('watermelon','','When choosing a watermelon, look for darker green melons that feel heavy and sound hollow when tapped.');
let orange = new FruitsNZ('orange','','Oranges that are still green and too hard are not yet ripe. Instead, choose an orange that has medium firmness and feels juicy when lightly squeezed.')
let pineapple = new FruitsNZ('pineapple','','To check for ripeness, inspect the base of a pineapple and take a big whiff. Its perfume should be sweet, not fermented. Pass on any fruit that has moldy spots or leaves that are dried out.');

// let fruitArrNZ = [nectarine, strawberry, watermelon, orange, pineapple];

export class LegumesNZ {
  constructor (legumeName, legumeSeason =[], legumeInfo) {
    this.legumeName = legumeName;
    this.legumeSeason = legumeSeason;
    this.legumeInfo = legumeInfo;
    this.legumeArrNZ = [shellBean, peas, snapPeas, peanuts, snowPeas];
  }
}
let shellBean = new LegumesNZ('shellbean', '', 'Fresh shell beans cook much quicker than their dried out counterparts. Look for pods that have pronounced, evenly sized bumps and avoid those with noticeable empty spots.');
let peas = new LegumesNZ('peas', '', 'Peas are a type of legume and come in a variety of sizes and colors including green, yellow and purple. Look for pods that are plump and bright green.');
let snapPeas = new LegumesNZ('snappeas', '', 'Snap peas are excellent raw or cooked. When shopping, look for those with full pods that are vibrant in color, avoiding any with mushy spots.');
let peanuts = new LegumesNZ('peanuts', '', 'Peanuts can often be purchased in their distinctive, textured shell either dry roasted or roasted in oil. Be sure to store peanuts in a cool, dry place and discard any peanuts that show signs of mold.');
let snowPeas = new LegumesNZ('snowpeas', '', 'Good snow peas will be bright green with thin, flexible pods. Snow peas are mildly flavored and can be served raw or cooked.');

// let legumeArrNZ = [shellBean, peas, snapPeas, peanuts, snowPeas];