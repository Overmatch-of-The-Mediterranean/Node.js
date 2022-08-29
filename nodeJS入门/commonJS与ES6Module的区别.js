/* commonJS语法：
               1.导出：module.exports = {}
               2.导入：require('字符串')*/

/* 使用module.exports = xxx, 则导入用 const xxx = require('./...')
使用module.exports = { xxx, yyy }, 则导入用 const { xxx, yyy } = require('./...')
导出和导入的名字必须相同 */

// require执行时，从这三个层级注意匹配，看使用的是那种模块

/* require的三个层级：
                  1.系统自带的模块：require('http')
                  2.npm包模块：如，require('lodash')
                  3.自定义模块；如，require('./xxx')

/* ES6 module语法：
               1.导出：export default function(){}  或  export  function(){}
               2.导入：import xxx from xxx              import {xxx} from xxx
               合写：import xxx,{xxx} from xxx */

/* commonJS 与 ES6 module的区别：
                              1.commonJS是执行时引入，动态的
                              2.ES6 module是打包时引入，静态的*/