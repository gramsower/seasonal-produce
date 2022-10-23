//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics  

export class VegetablesAM {
  constructor (vegName, vegSeason =[], vegInfo) {
    this.vegName = vegName;
    this.vegSeason = vegSeason;
    this.vegInfo = vegInfo;
  }
}

let asparagus = new VegetablesAM('asparagus', '', 'Asparagus comes in green, white, purple and wild varities. Look for the thinnest stalks possible; these are the most tender. Steer clear of limp and wilted asparagus.');
let broccoli = new VegetablesAM('asparagus', '', 'Asparagus comes in green, white, purple and wild varities. Look for the thinnest stalks possible; these are the most tender. Steer clear of limp and wilted asparagus.');
let cabbage = new VegetablesAM('cabbage', '', 'Red and green cabbage should have a firm, tight head and feel heavy for their size, with no black or soft spots. Savoy and Napa cabbage are generally a bit looser');
let kale = new VegetablesAM('kale', '', 'When shopping for kale, stay clear of wilted or browning leaves. Leaves and stalks should be firm and dry instead of wilted and mushy.');
let lettuce = new VegetablesAM('lettuce', '', 'There are many varieties of lettuce, from loose-leaf to those bought as a head. For all varieties, look for leaves that are intact and not wilting.');

//const vegArr = [asparagus, broccoli, cabbage, kale, lettuce];

export class FruitsAM {
  constructor (fruitName, fruitSeason =[], fruitInfo) {
    this.fruitName = fruitName;
    this.fruitSeason = fruitSeason;
    this.fruitInfo = fruitInfo;
  }
}

let apple = new FruitsAM('apple','','Worldwide, there are more than 7,500 known varieties, 100 of which are grown commercially in the US. They all differ in shape, size, color, texture, aroma and flavor.');
let blueberry = new FruitsAM('blueberry','','Look for firm, dry, plump blueberries with smooth skin and no shriveled or moldy bits. Pass on greenish or red ones, they are underripe.'); 
let cantaloupe = new FruitsAM('cantaloupe','','Look for a canteoupe with no nicks in the rind or mold on the blossom end. If it is perfectly ripe, the end should smell nice. Avoid melons with soft spots.');
let cherry = new FruitsAM('cherry','','Cherries can be sweet (even the sour ones), delicious, and eaten raw or cooked. Look for cherries that are firm and have no bruises or browning.')
let grape = new FruitsAM('grape','','Look for fresh grapes with no brown spots, mold or large numbers of shriveled grapes on the cluster. Keep grapes as dry as possible in the refrigerator.');


export class LegumesAM {
  constructor (legumeName, legumeSeason =[], legumeInfo) {
    this.legumeName = legumeName;
    this.legumeSeason = legumeSeason;
    this.legumeInfo = legumeInfo;
  }
}

let blackEyedPeas = new LegumesAM('black-eyed peas', '', 'When it comes to fresh shell beans, look for pods that are plump and bumpy, you should be able to feel the fat seeds inside.');
let chickpeas = new LegumesAM('cheakpeas', '', 'Also known as garbanzo beans, the fresh green pods (and seeds inside) are edible, but most are harvested dried. Chickpea leaves are also edible.');
let greenBeans = new LegumesAM('green beans', '', 'Fresh green beans should have a snappy crispness when bent in half. They should be free of blemishes and mold and the pod should not be hard or dried out.');
let limaBeans = new LegumesAM('lima beans', '', 'Lima beans are a type of shell bean and can be purchased either fresh in the pod or dried. If buying fresh, look for plump and bumpy pods.');
let adzuki = new LegumesAM('adzuki', '', 'The bean is usually found dried. In East Asain cuisine, it is commonly sweetened by boiling with sugar and made into a past before eating.');
