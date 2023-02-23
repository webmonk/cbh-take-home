const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the hashed data for a string", () => {
    const event = 'sampleString';
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("30fbdcc1617830d1bfeb444759b4f2cbb9ad6855d1b63981d2b2cf529578e668a87f491d53cb36085005df75f37f5d36849e1596bbf11ed5738b34dc87cf42ed");
  });
});
