# Shimport

**Note, this is the same as https://github.com/Rich-Harris/shimport but exported
as an ES module. See that repo for more information on how this works.**

Quick start:

You can test for dynamic import support using something like:

    try {
        new Function('url', `return import(url)`)
    } catch (e) // not supported

Then, to initialise shimport do:

    import { initialise } from '@guardian/shimport'
    initialise()

You can then call shimport as:

    self.__shimport__

I.e. use this in place of 'import' to perform dynamic imports.

Note, the global name is hardcoded unfortunately. 

Recommend adding the following types as globals for using this if you are a TS
person:

```
interface Window {
    __shimport__: (url: string) => Promise<any>;
}
```

**Very thankful to @Rich-Harris for the work.**

A 3kb (gzipped) shim for `import` and `export`. Allows you to use JavaScript
modules in **all** browsers, including dynamic `import()`.

## License

[LIL](LICENSE)
