# y-server-cors

y-server-cors is a [y-server](https://github.com/yued-fe/y-server) plugin to allow cors.

## Install

```bash
npm install y-server-cors
```

## Usage

```javascript
var yServer = require('y-server');
var cors = require('y-server-cors');

yServer.run({
  plugins: [
    cors(),
  ],
});
```

## Notes

* `path` is the path allow cors.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
