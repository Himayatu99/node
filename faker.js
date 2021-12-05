// faker used for Generate massive amounts of fake contextual data

const faker = require('faker');

const image = faker.image.image()
console.log(image)

const internet = faker.internet.color();
console.log(internet)

const para = faker.lorem.paragraph();
// console.log(para) full parargraph
console.log(para.slice(0, 6))// how many words you want 