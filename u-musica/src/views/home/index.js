// 引入核心库
import React from 'react';
// 引入接口
import { recMusic, newSong,banner } from '../../util/axios/'
// 引入样式
import '../../assets/css/home.css'

import Swiper from 'swiper'

import '../../../node_modules/swiper/js/swiper.min.js'
import '../../../node_modules/swiper/css/swiper.css'
import imgLogo from '../../assets/img/logo.png'
class Home extends React.Component {
  constructor () {
    super();
    this.state = {
      songList: [],
      songs: [],
      bannerList:[]
    }
  }
 
  // 挂载
  componentDidMount () {
    // 推荐歌单
    recMusic({
      limit: 6
    })
      .then(res => {
        console.log(res, '推荐歌单列表');
        if (res.code == 200) {
          this.setState({
            songList: res.result
          })
        }
      })
    // 推荐新音乐
    newSong()
      .then(res => {
        console.log(res, '新音乐列表');
        if (res.code == 200) {
          this.setState({
            songs: res.result
          })
        }
      })
      // 轮播图
    banner({
      type: 2
    })
      .then(res => {
        console.log(res, '轮播图列表');
        if (res.code == 200) {
          this.setState({
            bannerList: res.banners
          })
        }
      })
  }
  // 跳转函数
  goList (id) {
    this.props.history.push(`/list/${id}`)
  }
  componentDidUpdate () {

    let swiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 2000
      }
    });

    // var swiper = new Swiper('.swiper-container', {
    //   spaceBetween: 30,
    //   loop: true,
    //   centeredSlides: true,
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },

    // });

  }
  render () {
    const { songList } = this.state;
    const { songs } = this.state;
    const { bannerList} = this.state
    return (
      <div className='homeremd'>
        

        <div className="swiper-container">

          <div className="swiper-wrapper">

            <div className="swiper-slide">{bannerList.map(item => {

              return (<img key={item.imageUrl} src={item.imageUrl} />)

            })}</div>



          </div>

          <div className="swiper-pagination"></div>

          <div className="swiper-button-next"></div>

          <div className="swiper-button-prev"></div>

        </div>
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
                    <span className='u-earp remd_lnum'>{(item.playCount/10000).toFixed(2)}万</span>
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
                        {/* <span className="sgalia">
                       (原唱：接个吻，开一枪 / 沈以诚 / 薛明媛)
                      </span> */}
                      </div>
                      <div className="f-thide sginfo">
                        <i className={item.canDislike?"u-hmsprt1":""}></i>
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