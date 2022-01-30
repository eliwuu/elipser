const division = ["-"];
const punctuation = [",", ";", ":"];
const quotation = ['"', "'"];
const sentenceEnd = [".", "?", "!", "..."];

export type Tokenized = { word: string; len: number; idx: number };
export type Tokenize = (str: string) => Tokenized[];

export const truncate = (
  str: string,
  len: number,
  options?: {
    maxLen?: number;
    preserveNumbers?: boolean;
    preserveQuotation?: boolean;
  }
) => {
  if (len <= str.length) return str;

  if (options?.maxLen) {
    if (len <= options.maxLen) return str;
    if (str.length <= options.maxLen) return str;

    str.slice(0, options.maxLen);
  } else {
    str.slice(0, len);
  }
  const tokenized = tokenize(str);
  const count = spaceCount(str);
  return str.slice(0, len);
};

export const truncateNoOptions = () => null;
export const truncateMaxLenght = () => null;
export const truncatePreferMaxLength = () => null;
export const truncatePreserveQuotation = () => null;
export const truncatePreserveNumbers = () => null;

export const spaceCount = (str: string) =>
  str.split("").filter((x) => x === " ").length;

export const tokenize: Tokenize = (str: string) => {
  return str.split(" ").map((word, index) => {
    return { word: word, len: word.length, idx: index };
  });
};

export const getTotalLength = (str: string) => tokenize;

const isQuote = (word: string) => {
  const firstItem = quotation.map((x) => x === word[0])[0];
  const lastItem = quotation.map((x) => x === word[0])[0];
};
