const delay = (ms) => new Promise(
  (resolve) => setTimeout(resolve, ms)
);

// delay(5000).then(() => console.log('Resolved after 5 seconds'));

delay(2000)
.then(() => {
  console.log('Resolved after 2 seconds')
  return delay(1500);
})
.then(() => {
  console.log('Resolved after 1.5 seconds')
  return delay(3000)
})
.then(() => {
  console.log('Resolved after 3 seconds')
  throw new Error();
})
.catch(() => {
  console.log('Caught an error')
})
.then(() => {
  console.log('Done')
});