const { pro, call } = require("./async");

//callBacks

test("callback", (done) => {
  call(1, (result) => {
    expect(result).toBe("NO");
    done();
  });
});

//promise
test("promise", () => {
  pro(1)
    .then((i) => expect(i).toBe("got it"))
    .catch((e) => expect(e).toBe("NOt"));
});

//async-await
test("async", async () => {
  try {
    expect(await pro(111)).toBe("got it");
  } catch (error) {
    expect(error).toBe("NOt");
  }
});
