// 引入核心库
import React from 'react';
// 引入接口
import { recMusic, newSong, banner } from '../../util/axios/'
// 引入样式
import '../../assets/css/home.css'
// 引入轮播图样式
import '../../assets/css/swiperInfo.css'
import axios from 'axios'
import Swiper from 'swiper'
import { NavLink } from 'react-router-dom'

import imgLogo from '../../assets/img/logo.png'
class Home extends React.Component {
  constructor () {
    super();
    // state-管理数据
    this.state = {
      songList: [],
      songs: [],
      bannerList: [],
    }
  }

  // 挂载
  componentDidMount () {
    axios.all([recMusic({limit:6}), newSong(), banner()]).then(
      axios.spread((recMusic, newSong, banner)=>{
        if (recMusic.code == 200){
          this.setState({
            songList: recMusic.result
          })
        }
        if (newSong.code == 200) {
          this.setState({
            songs: newSong.result
          })
        }
        if (banner.code == 200) {
          this.setState({
            bannerList: banner.banners.filter((item,i)=>i<4)
          },
          ()=>{
            // 组件一加载就实现轮播图
            let swiper = new Swiper(".swiper-container",{
              pagination:{
                el:".swiper-pagination"
              },
              autoplay:{
                // 自动播放
                delay:2000
              },
              loop:true
            })
          }
          )
        }
      })
    )
  }
  // 跳转函数
  goList (id) {
    this.props.history.push(`/list?id=${id}`)
  }
  // componentDidMount() {
  //   //组件一加载就调用banner
  //   getBanner().then((res) => {
  //     console.log(res, "轮播图列表");
  //     if (res.code == 200) {
  //       this.setState(
  //         {
  //           bList: res.banners,
  //         },
  //         () => {
  //           //组件一加载就实现轮播图
  //           let swiper = new Swiper(".swiper-container", {
  //             pagination: {
  //               el: ".swiper-pagination",
  //             },
  //             autoplay: {
  //               //自动播放
  //               delay: 2000,
  //             },
  //             loop: true,
  //           });
  //         }
  //       );
  //     }
  //   });
  // }
  render () {
    const { songList } = this.state;
    const { songs } = this.state;
    const { bannerList } = this.state
    return (
      <div className='homeremd'>
        <div className="recom">
        {/* 轮播图 */}
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {bannerList.map(item => {
                return (
                  <div className="swiper-slide" key={item.imageUrl} >
                    <img src={item.imageUrl} /></div>)
              })}
            </div>
            {/* 分页器 */}
            <div className="swiper-pagination"></div>
          </div></div>
        <h2 className='remd_t1'>
          推荐歌单
            </h2>
        {/* list */}
        <div className='remd_songs'>
          <ul className='remd_ul'>
            {songList.map(item => {
              return (
                <li className='remd_li' key={item.id} onClick={this.goList.bind(this, item.id)}>
                  <div className='remd_img'>
                    <img src={item.picUrl} alt='' className='u-img'></img>
                    <span className='u-earp remd_lnum'>{(item.playCount / 10000).toFixed(2)}万</span>
                    <p className='remd_text'>
                      {item.name}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        {/* 最新音乐 */}
        <h2 className='remd_t1'>
          最新音乐
            </h2>
        <div className="remd_newsg">
          <div className="m-sglst">
            {songs.map(item => {
              return (
                <a className="m-sgitem" href="" key={item.id}>
                  <div className="sgfr f-bd f-bd-btm">
                    <div className="sgchfl">
                      <div className="f-thide sgtl">
                        {item.name}
                      </div>
                      <div className="f-thide sginfo">
                        <i className={item.canDislike ? "u-hmsprt1" : ""}></i>
                        {
                          item.song.artists.map(a => {
                            return <span key={a.id}>{a.name}</span>
                          })
                        }-<span key={item.id}>{item.song.album.name}</span>



                      </div>
                    </div>
                    <div className="sgchfr">
                      <span className="u-hmsprt2"></span>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        {/* footer */}
        <footer className="m-homeft">
          <div className="ftwrap">
            <div className="logo">
              <div className='logobox'>
                <img src={imgLogo}></img>
                <h2>网易云音乐</h2>
              </div>
              <div className="openapp">打开APP，发现更多好音乐 &gt;</div>
              <p className="copyright">网易公司版权所有©1997-2020   杭州乐读科技有限公司运营</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
export default Home