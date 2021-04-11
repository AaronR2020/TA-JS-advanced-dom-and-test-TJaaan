const lodash=require('lodash');
const momen=require('moment');



console.log(momen.moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY"));
console.log(moment().add(7, 'days').calendar());
console.log(moment().add(7, 'months').calendar());
console.log(moment().add(7, 'years').calendar());
console.log("  ");
console.log(moment().subtract(7, 'days').calendar());
console.log(moment().subtract(7, 'months').calendar());
console.log(moment().subtract(7, 'years').calendar());
console.log("  ");
console.log(moment("20141111", "YYYYMMDD").fromNow(),
moment("20150911", "YYYYMMDD").fromNow());

let arr=[1,2,3,4,5,6,7,8,9];
console.log(lodash._arrayPush(arr,"end-push"));
console.log(lodash.chunk(arr,2));