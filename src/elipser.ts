type ElipsisStyle = "..." | "(...)";

/**
 * Initialize class with string and expected length
 * @param { string } str - text
 * @param { number } length - expected length
 *
 * @property {string} Get - shortened string
 *
 * @function setElipsisStyle(ElipsisStyle) - sets elipsis style
 */
export class Elipser {
  public Get: string;
  private split: string[];
  private totalLength: number;
  private elipsisStyle: ElipsisStyle = "(...)";

  // get original string
  constructor(str: string, private length: number) {
    this.totalLength = str.length;
    this.split = this.splitString(str);
    this.Get = this.split.join("") + " " + this.elipsisStyle;
    const status = this.checkBackward(this.split);
    if (status.char === "quote") {
      const takeNo = 10;
      const take = this.take(str, takeNo);
      const idx = this.checkForward(take).idx;

      const takeSlice = take.slice(0, idx);
      this.Get =
        this.split.concat(takeSlice).join("") + " " + this.elipsisStyle;
    }

    if (status.char === "space") {
      status.idx! < this.split.length
        ? (this.Get =
            this.split.slice(0, status.idx!).join("") + " " + this.elipsisStyle)
        : null;
    }
  }

  static isQuote(letter: string) {
    return letter === '"';
  }
  static isPunctuation(letter: string) {
    const punctuation = ["!", ".", ",", ";", ":", "?"];
    const isPunctuation = punctuation.map((x) => x === letter);

    return isPunctuation[0];
  }
  /**
   *
   * @param elipsisStyle - sets elipsis style: (...) or ...
   */
  public setElipsisStyle(elipsisStyle: ElipsisStyle) {
    this.elipsisStyle = elipsisStyle;
  }

  private splitString(str: string) {
    return str.split("").slice(0, this.length);
  }

  private checkBackward(split: string[]): {
    char: "space" | "punctuation" | "quote" | "none";
    idx?: number;
  } {
    for (let i = split.length; i > 0; i--) {
      if (split[i] === " ") return { char: "space", idx: i };
      if (Elipser.isPunctuation(split[i])) return { char: "punctuation" };
      if (Elipser.isQuote(split[i])) return { char: "quote" };
      continue;
    }
    return { char: "none" };
  }

  private checkForward(split: string[]): { idx: number } {
    for (let i = 0; i < split.length; i++) {
      if (split[i] === " ") return { idx: i };
      if (Elipser.isPunctuation(split[i])) return { idx: i };
      if (Elipser.isQuote(split[i])) return { idx: i + 1 };
      continue;
    }
    return { idx: 0 };
  }

  private take(str: string, num: number) {
    return str
      .split("")
      .slice(
        this.length,
        this.length + num <= this.totalLength
          ? this.length + num
          : this.totalLength
      );
  }
}
