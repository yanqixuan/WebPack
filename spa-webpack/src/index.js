import { sync } from './components/sync/index';
sync();
// document.getElementById('app').innerHTML = '入口文件';
document.getElementById("btn").addEventListener('click',function(){
  // 执行 async
  import(/* webpackChunkName:'async' */ './components/async/index').then( _ => {
    _.default.init();
  })
})