function determineseason(produce){
  let season;
  switch (produce){
    case 'apple':
    case 'grape':
    case 'onions':
    case 'cabbage':
    case 'kale':
    case 'lettuce':
    case 'cantaloupe':
    case 'radish':
    case 'tomato':
    case 'chick peas':
    case 'orca beans':
      season = 'NorthWest Fall';
      break;
    case 'cabbage':
    case 'kale':
    case 'lettuce':
    case 'chickpeas':
      season = 'NorthWest Winter';
      break;
    case  'asparagus':
    case  'cabbage':
    case  'kale':
    case  'lettuce':
    case  'radish':
    case  'strawberry':
      season = 'NorthWest Spring';
      break;
    case  'asparagus':
    case  'brocoli':
    case  'cabbage':
    case  'kale':
    case  'lettuce':
    case  'apple':
    case  'blueberry':
    case  'cantaloupe':
    case  'cherry':
    case  'grape':
    case  'onion':
    case  'radish':
    case  'tomato':
    case  'strawberry':
    case  'watermelon':
    case  'adzuki beans':
    case  'Orca beans':
      season = 'NorthWest Summer';
      break;
    case 'brocoli':
    case 'kale':
    case 'lettuce':
    case 'apple':
    case 'green beans':
    case 'radish':
    case 'tomato':
    case 'nopal':
    case 'chickpeas':
    case 'peanuts':
    case 'lima beans':
      season = 'SouthWest Fall';
      break;
    case 'brocoli':
    case 'cabbage':
    case 'kale':
    case 'lettuce':
    case 'radish':
    case 'strawberry':
    case 'oranges':
    case 'chickpeas':
      season = 'SouthWest Winter';
      break;
    case 'asparagus':
    case 'brocoli':
    case 'cabbage':
    case 'kale':
    case 'lettuce':
    case 'onions':
    case 'radish':
    case 'tomato':
    case 'nectarine':
    case 'strawberry':
    case 'orange':
    case 'peas':
    case 'black-eyed peas':
      season = 'SouthWest Spring';
      break;
    case 'apple':
    case 'blueberry':
    case 'cantaloupe':
    case 'grape':
    case 'green beans':
    case 'onion':
    case 'tomato':
    case 'nectarine':
    case 'watermelon':
    case 'nopal':
    case 'black-eyed peas':
    case 'lima beans':
      season = 'SouthWest Summer';
      break;
    case 'brocoli':
    case 'cabbage':
    case 'kale':
    case 'lettuce':
    case 'apple':
    case 'onion':
    case 'radish':
    case 'tomato':
    case 'chickpeas':
    case 'soy beans':
    case 'navy beans':
      season = 'MidWest Fall';
      break;
    case 'chickpeas':
      season = 'MidWest Winter';
      break;
    case 'asparagus':
    case 'lettuce':
    case 'radish':
    case 'black-eyed peas':   
      season = 'MidWest Spring'
      break;
    case 'asparagus':
    case 'brocoli':
    case 'cabbage':
    case 'kale':
    case 'lettuce':
    case 'apple':
    case 'blueberry':
    case 'cantaloupe':
    case 'cherry':
    case 'grape':
    case 'onion':
    case 'radish':
    case 'tomato':
    case 'strawberry':
    case 'watermelon':
    case 'black-eyed peas':
    case 'adzuki beans':
    case 'navy beans':
      season = 'Midwest Summer';
      break;
    case 'cabbage':
    case 'kale':
    case 'lettuce':
    case 'apple':
    case 'grape':
    case 'tomato':
    case 'peanuts':
    case 'Chickpeas':
    case 'Chickpeas':
      season = 'South Fall';
      break;
    case 'apple':
    case 'kale':
    case 'lettuce':
    case 'orange':
      season = 'South Winter';
      break;
    case  'asparagus':
    case  'brocoli':
    case  'cabbage':
    case  'lettuce':
    case  'blueberry':
    case  'green beans':
    case  'tomato':
    case  'strawberry':
    case  'orange':
    case  'black-eyed peas':
      season = 'South Spring';
      break;
    case 'asparagus':
    case 'apple':
    case 'blueberry':
    case 'cantaloupe':
    case 'grape':
    case 'green beans':
    case 'tomato':
    case 'watermelon':
    case 'orange':
    case 'peas':
      season = 'South Summer'
      break;
    case 'brocoli':
    case 'cabbage':
    case 'kale':
    case 'lettuce':
    case 'apple':
    case 'grape':
    case 'onion':
    case 'radish':
      season = 'Northeast Fall';
      break;
    case 'Ooops, too cold!! brrrr ':
      season = 'Northeast Winter';
      break;
    case 'asparagus':
    case 'brocoli':
    case 'cabbage':
    case 'kale':
    case 'lettuce':
    case 'cherry':
    case 'radish':
    case 'strawberry':
    case 'peas':
    case 'black-eyed peas':
      season = 'Northeast Spring';
      break;
    case 'asparagus':
    case 'cabbage':
    case 'kale':
    case 'lettuce':
    case 'apple':
    case 'blueberry':
    case 'cantaloupe':
    case 'cherry':
    case 'grape':
    case 'green beans':
    case 'beans':
    case 'onion':
    case 'radish':
    case 'tomato':
    case 'nectarine':
    case 'strawberry':
    case 'watermelon':
    case 'peas':
    case 'black-eyed peas':
      season = 'Northeast Summer';
      break;
  }
return season;
}

//NorthWest Fall Season
// Apple
// Grapes
// Onions
// Cabbage
// Kale
// Lettuce
// Cantaloupe
// Radish
// Tomatoes
// Chickpeas
// Orca Beans
// 
// 
// 
//NorthWest Winter Season
// Cabbage
// Kale
// Lettuce
// Chickpeas
//NorthWest Spring Season
// Asparagus
// Cabbage
// Kale
// Lettuce
// Radish
// Strawberries
// 
//NorthWest Summer Season
// Asparagus
// Broccoli
// Cabbage
// Kale
// Lettuce
// Apple
// Blueberry
// Cantaloupes
// Cherries
// Grapes
// Onions
// Radish
// Tomatoes
// Strawberries
// Watermelons
// Adzuki Beans
// Orca Beans

//SouthWest Fall Season
// Broccoli
// Kale
// Lettuce
// Apple
// Green beans
// Radish
// Tomatoes
// Nopal
// Chickpeas
// Peanuts
// Lima Beans
//SouthWest Winter Season
// Broccoli
// Cabbage
// Kale 
// Lettuce
// Radish
// Strawberries
// Oranges
// Chickpeas
//SouthWest Spring Season
// Asparagus
// Broccoli
// Cabbage
// Kale
// Lettuce
// Onions
// Radish
// Tomatoes
// Nectarines
// Strawberries
// Oranges
// Peas 
// Black-eyed Peas
//SouthWest Summer Season
// Apples
// Blueberry
// Cantaloupe
// Grape
// Green Beans
// Onion
// Tomatoes
// Nectarines
// Watermelons
// Nopal
// Black-eyed Peas
// Lima Beans


//MidWest Fall Season
// Broccoli
// Cabbage
// Kale
// Lettuce
// Apples
// Onion
// Radish
// Tomato
// Chickpeas
// Soybeans
// Navy Beans
//MidWest Winter Season
// Chickpeas
// 
// 
// 
//MidWest Spring Season
// Asparagus
// Lettuce
// Radish
// Black-eyed Peas
// 
// 
// 
//MidWest Summer Season
// Asparagus
// Broccoli
// Cabbage
// Kale
// Lettuce
// Apple
// Blueberry
// Cantaloupe
// Cherry
// Grape
// Onion
// Radish
// Tomatoes
// Strawberries
// Watermelons
// Black-eyed Peas
// Adzuki Beans
// Navy Beans

//South Fall Season
// Cabbage
// Kale
// Lettuce
// Apple
// Grape
// Tomato
// Peanuts
//South Winter Season
// Apple
// Kale
// Lettuce
// Oranges
//
//South Spring Season
// Asparagus
// Broccoli
// Cabbage
// Lettuce
// Blueberry
// Green Beans
// Tomato
// Strawberries
// Oranges
// Black-Eyed Peas
//South Summer Season
// Asparagus
// Apple
// Blueberry
// Cantaloupe
// Grape
// Green Beans
// Tomato
// Watermelon
// Orange
// Peas
// 

//Northeast Fall Season
// Broccoli
// Cabbage
// Kale
// Lettuce
// Apple
// Grape
// Onion
// Radish
// 
//Northeast Winter Season
// 
// 
// 
// 
//Northeast Spring Season
// Asparagus
// Broccoli
// Cabbage
// Kale
// Lettuce
// Cherry 
// Radish
// Strawberry
// Peas
// Black-eyed Peas
//Northeast Summer Season
// Asparagus
// Broccoli
// Cabbage
// Kale
// Lettuce
// Apple
// Blueberry
// Cantaloupe
// Cherry
// Grape
// Green Beans
// Beans
// Onion
// Radish
// Tomato
// Nectarines
// Strawberry
// Watermelon
// Peas
// Black-eyed Peas