import './index.css';
/* eslint-disable no-console */
import numeral from 'numeral';

const courseVal = numeral(1000).format('$0,0.00');
console.log(`The value is ${courseVal}`);