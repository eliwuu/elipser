# Readme

Elipser is a simple (zero dependencies) and naive shortener designed with Polish language in mind | Compatibile with Angular pipes

## Usage

```ts
const elipser = new Elipser("some lorem ipsum dolor sit amet", 5);
const shortString = elipser.Get; // some (...)
```

### Behaviour with quotation marks

```ts
const elipser = new Elipser('some "lorem" ipsum dolor sit amet', 5);
const shortString = elipser.Get; // some "lorem" (...)
```

### Change elipsis style

```ts
const elipser = new Elipser('some "lorem" ipsum dolor sit amet', 5);
elipser.setElipsisStyle("..."); // elipsis styles: "...", "(...)", ""
const shortString = elipser.Get; // some "lorem" ...
```
