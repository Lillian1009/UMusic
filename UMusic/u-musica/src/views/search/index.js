import React from 'react';
import '../../assets/css/search.css'
import { NavLink } from "react-router-dom";
import { getHotSearch, getSearch } from '../../util/axios/'
class Search extends React.Component {
  constructor () {
    super();
    this.state = {
      val: "",
      songList: [],
      hotWord: [],
    }
    this.inpVal = React.createRef()
  }
  // 挂载
  componentDidMount () {
    // 组件一加载调取热门列表函数
    this.getHotSearch()
  }
  // 推荐歌单
  getHotSearch () {
    getHotSearch().then(res => {
      console.log(res, '推荐歌单列表');
      if (res.code == 200) {
        this.setState({
          hotWord: res.data.filter((item, i) => i < 10)
        })
      }
    })
  }


  // 封装一个搜索方法
  goSearch (keywords) {
    this.inpVal.current.value = keywords;
    getSearch({
      keywords
    }).then((res) => {
      if (res.code === 200) {
        console.log(res, '搜索结果');
        this.setState({
          songList: res.result.songs.filter((item,i)=>i<10)
        })
      }
    })
  }
  // 封装一个enter事件
  enter (e) {
    // 当用户输入enter的时候触发搜索事件
    // 保证用户输入的内容不为空
    if (e.keyCode === 13 && e.target.value != '') {
      this.goSearch(e.target.value)
    }
  }
  // 封装一个事件，实时监听用户输入的变化并调取接口
  changeInfo (e) {
    if (e.target.value != '') {
      this.goSearch(e.target.value)
    } else {
      // 调取重置事件
      this.reset()
    }
  }

  // 跳转播放方法
  toPlay (id) {
    this.props.history.push(`/play?id=${id}`)
  }

  render () {
    //用来判断是否出现删除图标
    let valFlag = ''
    if (this.inpVal.current) {
      valFlag = this.inpVal.current.value
    }
    const { hotWord, val, songList } = this.state;
    let hotInfo = <div className='hotSearch_show'>
      <h3>热门搜索</h3>
      <ul>
        {hotWord.map((item) => {
          return (
            <li
              onClick={this.goSearch.bind(this, item.searchWord)}
              key={item.searchWord}
            >
              {item.searchWord}
            </li>
          );
        })}
      </ul>
    </div>
    return (
      <div className="search">
        {/* 搜索输入框 */}
        <div className="find">
          <i className="sea"></i>
          <input
            ref={this.inpVal}
            placeholder="搜索歌曲、歌手、专辑"
            onChange={this.changeVal.bind(this)}
            className="inp"
            onKeyUp={this.enter.bind(this)}
            onChange={this.changeInfo.bind(this)}
          ></input>
          <em className={valFlag ? "show" : "hid"} onClick={this.reset.bind(this)}>
            x
          </em>
        </div>
        {/* 热门搜索 */}
        {songList.length == 0 ? hotInfo : ''}
        {/* 搜索列表 */}
        <div>
          <ul className="songList">
            {songList.map((item) => {
              return (
                <li onClick={this.toPlay.bind(this, item.id)} key={item.id} className="lii">
                  <i></i>
                  <span>{item.name} </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
  // 监听input输入的值
  changeVal () {
    let inp = document.querySelector('.input');
    this.setState({
      val: inp.value
    })
  }
  // 清空
  reset () {
    // 清空value.input
    this.inpVal.current.value = ''
    // 清空搜索列表
    this.setState({
      songList: []
    })
  }
}
export default Search