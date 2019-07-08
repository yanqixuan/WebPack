import lodash from 'lodash-es'
import style from './index.css'
const sync = function(){
  console.log('sync');
  document.getElementById('app').innerHTML = `<h1 class=${style.test}>入口文件</h1>`
}
const testIsArray = function(){
  console.log('isArray');
  console.log(lodash.isArray(arg));
}
export {
  sync,
  testIsArray
}