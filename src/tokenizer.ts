const division = ["-"];
const punctuation = [",", ";", ":"];
const quotation = ['"', "'"];
const sentenceEnd = [".", "?", "!", "..."];

const tokenize = (str: string) => {
  return str.split(" ").map((word, index) => {
    return { word: word, idx: index };
  });
};

const isQuote = (word: string) => {
  const firstItem = quotation.map((x) => x === word[0])[0];
  const lastItem = quotation.map((x) => x === word[0])[0];
};
