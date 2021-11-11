const spinnerArray = ['|     ', '/     ', '-     ','\\    '];
let timer = 100;
for (const symbol of spinnerArray) {
  setTimeout(() => {
    process.stdout.write(`\r ${symbol}`);
}, timer)
  timer +=300
}


// setTimeout(() => {
//   console.log('');
// }, 700);