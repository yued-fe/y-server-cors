# y-server-plugin-cors

y-server-plugin-cors is a [y-server](https://github.com/yued-fe/y-server) plugin to allow cors.

## Install

```bash
npm install y-server-plugin-cors
```

## Usage

```javascript
const yServer = require('y-server');
const corsPlugin = require('y-server-plugin-cors');

yServer({
  plugins: [
    corsPlugin(),
  ],
})
```

## Notes

* `path` is the path allow cors.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
