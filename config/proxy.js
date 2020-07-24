var devProxy = ['/api',
];

var proEnv = require('./prod.env');
var devEnv = require('./dev.env');
var env = process.env.NODE_ENV;

var target = env === 'prodction' ? proEnv.hosturl : devEnv.hosturl;
let proxyObj = {};
devProxy.forEach((val) => {
  proxyObj[val] = {
    target,
    changeOrigin: true,
    pathRewrite: {
      [`^${val}`]: val,
    },
  }
})

proxyObj['/postion'] = {
    target: 'http://api.map.baidu.com',//后端接口地址
    secure:false,
    changeOrigin: true,//是否允许跨越
    pathRewrite: {
        '^/postion': '',//重写,
    }   
}


module.exports = {
    proxy: proxyObj
}