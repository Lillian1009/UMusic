import React from 'react';
import axios from 'axios'
import '../../assets/css/search.css'
import { NavLink } from "react-router-dom";
// 引入接口
import { hot } from '../../util/axios/'
class Search extends React.Component {
  constructor () {
    super();
    this.state = {
      songList: [],
      hotList: [],
    }
  }
  dfuent (id) {
    this.props.history.push('/list/' + id)
  }
  componentDidMount () {
    // 推荐歌单
    hot({
    })
      .then(res => {
        console.log(res, '推荐歌单列表');
        if (res.code == 200) {
          this.setState({
            hotList: res.result.hots
          })
        }
      })}
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
    if (e.target.value != '') {
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
    } else {
      this.setState({
        songList: []
      })
    }
  }
  render () {
    const { songList } = this.state;
    const { hotList } = this.state

    return (
      <div className="m-tabct">
        <div className="tabctitem">
          <div className="m-hmsrch">
            <form className="m-input f-bd f-bd-btm" method="get" action="#">
              <div className="inputcover">
                <i className="u-svg u-svg-srch"></i>
                <input onChange={(e) => this.getInfo(e)} type="search" className="input" placeholder="" />
                <ul className="ull">
                  {
                    songList.map((item, i) => {
                      return (
                        <li onClick={this.dfuent.bind(this, item.id)} className='item1 f-bd f-bd-full' key={item.id}><NavLink to='/list' key={item.id} className="link1">
                          {item.name}</NavLink>
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
                  {hotList.map(item => {
                    return (
                      <li className="item f-bd f-bd-full">
                        <a className="link" href="" key="item.first">{item.first}</a>
                      </li>
                    )
                  })}
                  
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