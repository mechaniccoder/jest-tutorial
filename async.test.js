/**
 * Testing Asynchronous Code
 */

const fetchData = async (callback) => {
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve('peanut butter')
    }, 1000);
  })

  const data = await promise;

  callback(data);
}

// it('Not working ex', () => {
//   function callback(data) {
//     expect(data).toBe('peanut butter');
//   }
//   fetchData(callback)
// })

it('is working ex', (done) => {
  const callback = (data) => {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch(err) {
      done(error);
    }
  }

  fetchData(callback);
})

describe("Promises", () => {
  const fetchDataPromise = async () => {
    const p = new Promise((resolve, reject) => {
      setTimeout(() => resolve('peanut butter', 1500));
    })

    const data = await p;
    return data;
  }

  it('use promise', () => {
    expect.assertions(1);
    return fetchDataPromise().then(data => {
      expect(data).toBe('peanut butter')
    })
  })

  it('resolves', () => {
    expect.assertions(1);
    return expect(fetchDataPromise()).resolves.toBe('peanut butter');
  })

  // it('rejects', () => {
  //   expect.assertions(1);
  //   return expect(fetchDataPromise()).rejects.toBe('peanut butter')
  // })
})

describe('Async/Await', () => {
  
  it('use async await', async () => {
    const fetchDataPromise = async () => {
      const p = new Promise((resolve, reject) => {
        setTimeout(() => resolve('peanut butter', 1500));
      })
  
      const data = await p;
      return data;
    }
    
    expect.assertions(1);
    const data = await fetchDataPromise();
    expect(data).toBe('peanut butter');
  })

  it('use try catch', async() => {
    const fetchDataPromise = async () => {
      const p = new Promise((resolve, reject) => {
        setTimeout(() => reject('peanut butter', 1500));
      })
  
      const data = await p;
      return data;
    }
    expect.assertions(1);
    try {
      await fetchDataPromise();
    } catch(err) {
      expect(err).toMatch('peanut butter');
    }
  })
})