// This is the asynchronous thing

function passIfTrue(ok) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ok) {
        resolve({ name: 'Julian', age: 50 });
      } else {
        reject({ error: 'There was an error' });
      }
    }, 1500);
  });
}

console.log('Before');

// This is one waiter, that will succeed
passIfTrue(true)
  .then(data => {
    console.log('Resolved: ', data);
  })
  .then(() => console.log('then then ran (1)'))
  .catch(error => {
    console.error('pass: UNexpected error:', error);
  })
  .then(() => console.log('catch then ran (1)'));

// This is another waiter, that will fail
passIfTrue(false)
  .then(
    data => {
      console.log('Resolved: ', data);
    },
    error => {
      console.error('fail1: expected error:', error);
    }
  )
  .then(() => console.log('then then ran (2)'));

// Another failure
passIfTrue(false)
  .then(data => {
    console.log('Resolved: ', data);
  })
  .then(() => console.log('then then ran (3)'))
  .catch(error => {
    console.error('fail2: expected error:', error);
  })
  .then(() => console.log('catch then ran (3)'));

async function tryAsyncGood() {
  try {
    const data = await passIfTrue(true);
    console.log('awaited', data);
  } catch (e) {
    console.error('tAG, UNexpected error:', e);
  }
}

async function tryAsyncBad() {
  try {
    const data = await passIfTrue(false);
    console.log('taB, No failure, odd!', data);
  } catch (e) {
    console.error('tAB, expected error:', e);
  }
}

tryAsyncGood();
tryAsyncBad();

console.log('After');
