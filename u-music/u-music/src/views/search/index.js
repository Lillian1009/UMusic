import React from 'react';
import axios from 'axios'
import '../../assets/css/search.css'
import { NavLink } from "react-router-dom";
class Search extends React.Component {
  constructor () {
    super();
    this.state = {
      songList: []
    }
  }
  getInfo (e) {
    // if(e.target.value==''){
    //   this.songList = []
    //   return false
    // }
    // if (e.keyCode === 13) {
    //   axios({
    //     url: 'http://www.ujiuye.tech:5000/search',
    //     method: 'get',//get方式可以省略
    //     params: {
    //       keywords: e.target.value,
    //     }
    //   })
    //     .then((res) => {
    //       if (res.data.result.songs)
    //         this.setState({
    //           songList: res.data.result.songs.splice(0, 10)
    //         })
    //       console.log(this)
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     })
    // }
    if(e.target.value != ''){
      axios({
        url: 'http://www.ujiuye.tech:5000/search',
        method: 'get',//get方式可以省略
        params: {
          keywords: e.target.value,
        }
      })
        .then((res) => {
          if (res.data.result.songs)
            this.setState({
              songList: res.data.result.songs.splice(0, 10)
            })
          console.log(this)
        })
        .catch((err) => {
          console.log(err);
        })
    }else {
      this.setState({
        songList :[]
      })
    }
  }
  render () {
    const { songList } = this.state
    return (
      <div className="m-tabct">
        <div className="tabctitem">
          <div className="m-hmsrch">
            <form className="m-input f-bd f-bd-btm" method="get" action="#">
              <div className="inputcover">
                <i className="u-svg u-svg-srch"></i>
                <input onChange={(e) => this.getInfo(e)} type="search" className="input" placeholder="" />
                <ul>
                  {
                    songList.map((item, i) => {
                      return (
                        <li key={item.id} className="item f-bd f-bd-full">
                          <NavLink className="link" to="/list" key={item.id}>{item.name}</NavLink>
                        </li>
                      )
                    }
                    )
                  }
                </ul>

                <figure className="close">
                  <i className="u-svg u-svg-empty"></i>
                </figure>
              </div>
            </form>
            <div className="m-default">
              <section className="m-hotlist">
                <h3 className="title">热门搜索</h3>
                <ul className="list">
                  <li className="item f-bd f-bd-full">
                    <a className="link" href="">耗子尾汁</a>
                  </li>
                  <li className="item f-bd f-bd-full">
                    <a className="link" href="">执迷不悟</a>
                  </li>
                  <li className="item f-bd f-bd-full">
                    <a className="link" href="">陈奕迅新歌</a>
                  </li>
                  <li className="item f-bd f-bd-full">
                    <a className="link" href="">杀死那个石家庄人</a>
                  </li>
                  <li className="item f-bd f-bd-full">
                    <a className="link" href="">只对你有感觉</a>
                  </li>
                  <li className="item f-bd f-bd-full">
                    <a className="link" href="">薛之谦</a>
                  </li>
                  <li className="item f-bd f-bd-full">
                    <a className="link" href="">说散就散</a>
                  </li>
                  <li className="item f-bd f-bd-full">
                    <a className="link" href="">一吻天荒</a>
                  </li>
                  <li className="item f-bd f-bd-full">
                    <a className="link" href="">笑纳</a>
                  </li>
                  <li className="item f-bd f-bd-full">
                    <a className="link" href="">会不会</a>
                  </li>
                </ul>
              </section>
          </div>
        </div>
      </div>
      </div >
    )
  }
}
export default Search