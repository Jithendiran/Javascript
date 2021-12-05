//Testing asynchronous

const pro = (a) => {
  return new Promise((res, rej) => {
    if (a == 1) {
      res("got it");
    } else {
      rej("NOt");
    }
  });
};

const call = (a, callBack) => {
  if (a == 2) {
    return callBack("yes");
  } else {
    return callBack("NO");
  }
};

module.exports = { pro, call };
