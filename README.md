# Shimport

**Note, this is the same as https://github.com/Rich-Harris/shimport but exported
as an ES module. See that repo for more information on how this works.**

Recommend adding the following types as globals for using this if you are a TS
person:

```
interface Window {
    __import__: (url: string) => Promise<any>;
    __shimport__: any;
}
```

**Very thankful to @Rich-Harris for the work.**

A 2kb shim for `import` and `export`. Allows you to use JavaScript modules in **all** browsers, including dynamic `import()`.

## Quick start

## License

[LIL](LICENSE)
