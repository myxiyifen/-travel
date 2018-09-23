// 使用try是为了防止当用户关闭了cookie或使用隐身模式时报错
let defaultCity = '重庆'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}
export default {
  city: defaultCity
}
