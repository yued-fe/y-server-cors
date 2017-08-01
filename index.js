'use strict';

/**
 * y-server 跨域插件
 * @param {Object} options 配置
 * @param {Object} options.path 路径
 * @return {Function} 初始化方法
 */
module.exports = function (options) {
  if (!options) {
    options = {};
  }

  const corsPath = options.path || '*';

  /**
   * 初始化方法
   * @param {Object} app Express实例
   */
  return function (app) {
    app.all(corsPath, function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
      res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');

      if(req.method === 'OPTIONS') { /* 让options请求快速返回 */
        res.send(200);
      } else {
        next();
      }
    });
  };
};
