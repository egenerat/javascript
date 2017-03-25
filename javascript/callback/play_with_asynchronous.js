function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function example(id) {
  console.log('Before the sleep' + id);
  await wait(Math.random() * 1000);
  console.log('After the sleep' + id);
}

for (let i = 0; i < 5; i++) {
	example(i);
}