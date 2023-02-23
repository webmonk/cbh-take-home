// declare all the constant variables
const crypto = require("crypto"),
TRIVIAL_PARTITION_KEY = "0",
MAX_PARTITION_KEY_LENGTH = 256;

// declare all the constant functions
const createHashData = (data) => crypto.createHash("sha3-512").update(data).digest("hex"),
createPartitionKeyData = (data) => createHashData(JSON.stringify(data));

exports.deterministicPartitionKey = (event) => {
  const candidate = event ? event.partitionKey ? event.partitionKey : createPartitionKeyData(event) : TRIVIAL_PARTITION_KEY;
  return candidate.length > MAX_PARTITION_KEY_LENGTH ? createHashData(candidate): candidate;
}