
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#F8F8F8","navigationBar":{"backgroundColor":"#F8F8F8","titleText":"uni-app","type":"default","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"JasERP-app","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"4.45","entryPagePath":"pages/index/index","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#7A7E83","selectedColor":"#0000ff","borderStyle":"black","blurEffect":"none","fontSize":"10px","iconWidth":"24px","spacing":"3px","height":"50px","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"/static/icon/home.png","selectedIconPath":"/static/icon/home_yes.png"},{"pagePath":"pages/data/data","text":"报表","iconPath":"/static/icon/report.png","selectedIconPath":"/static/icon/report_yes.png"},{"pagePath":"pages/abbr/abbr","text":"客服","iconPath":"/static/icon/abbr.png","selectedIconPath":"/static/icon/abbr_yes.png"},{"pagePath":"pages/mine/mine","text":"我的","iconPath":"/static/icon/mine.png","selectedIconPath":"/static/icon/mine_yes.png"}],"backgroundColor":"#ffffff","selectedIndex":0,"shown":true},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/index/index","meta":{"isQuit":true,"isEntry":true,"isTabBar":true,"tabBarIndex":0,"navigationBar":{"titleText":"买卖","type":"default"},"isNVue":false}},{"path":"pages/data/data","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"navigationBar":{"titleText":"数据报表","type":"default"},"isNVue":false}},{"path":"pages/abbr/abbr","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"navigationBar":{"titleText":"客服中心","type":"default"},"isNVue":false}},{"path":"pages/mine/mine","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":3,"navigationBar":{"titleText":"设置","type":"default"},"isNVue":false}},{"path":"pages/mine/settings/settings","meta":{"navigationBar":{"titleText":"设置界面","type":"default"},"isNVue":false}},{"path":"pages/index/sale/sale","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/index/buy/buy","meta":{"navigationBar":{"titleText":"采购界面","type":"default"},"isNVue":false}},{"path":"pages/index/client/client","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/index/supperliers/supperliers","meta":{"navigationBar":{"titleText":"供应商界面","type":"default"},"isNVue":false}},{"path":"pages/index/productions/productions","meta":{"navigationBar":{"titleText":"产品界面","type":"default"},"isNVue":false}},{"path":"pages/index/cost/cost","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/index/returngoods/returngoods","meta":{"navigationBar":{"titleText":"退货界面","type":"default"},"isNVue":false}},{"path":"pages/index/inventory/inventory","meta":{"navigationBar":{"titleText":"","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  