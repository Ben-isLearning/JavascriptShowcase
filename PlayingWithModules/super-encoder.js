const { caesarCipher, symbolCipher, reverseCipher } = require("./encryptor");

/* super-encryption function uses all three 
encryptor functions to encrypt/decrypt user input. */

const encodeMessage = (str) => {
  return revsrseCipher(symbolCipher(caesarCipher(str, 12)));
};

const decodeMessage = (str) => {
  return caesarCipher(symbolCipher(reverseCipher(str)), -12);
};

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === "encode") {
    output = encodeMessage(str);
  }
  if (process.argv[2] === "decode") {
    output = decodeMessage(str);
  }

  process.stdout.write(output + "\n");
  process.exit();
};

// Run the program.
process.stdout.write("Enter the message you would like to encrypt...\n> ");
process.stdin.on("data", handleInput);

module.exports = {
  encodeMessage,
  decodeMessage,
};
