// 引入封装好的axios库
import http from './axios';

// 封装接口
//封装推荐歌单接口
export function recMusic (params) {
  return http.get('/personalized', {
    params
  })
}

//封装推荐新音乐接口
export function newSong () {
  return http.get('/personalized/newsong')
}

//封装轮播图接口
export function banner (params) {
  return http.get('/banner')
}
// 封装一个热搜榜列表接口
export function getPlayList (params) {
  return http.get('/top/list', {
    params
  })
}
// 封装热门搜素接口
export function hot () {
  return http.get('/search/hot')
}