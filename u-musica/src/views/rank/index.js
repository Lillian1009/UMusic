import React from 'react'
// 引入接口
import { getPlayList } from '../../util/axios/'
//引入路由属性
import { NavLink } from "react-router-dom";
//引入样式
import "../../assets/css/rank.css";
class Rank extends React.Component {
  constructor () {
    super();
    this.state = {
      songList: [
      ]
    }
  }
  // 挂载
  componentDidMount () {
    // 推荐歌单
    getPlayList({
      id:3778678
    })
      .then(res => {
        console.log(res, '热歌列表');
        if (res.code == 200) {
          this.setState({
            songList: res.playlist.tracks
          })
        }
      })
  }
  render () {
    const { songList } = this.state;
    return (
      <div className="m-tabct">
        <div className="tabctitem">
          <div className="m-hmhot">
            <div className="hotop">
              <div className="hotopct">
                <div className="u-hmsprt hoticon"></div>
                <div className="hottime">
                  更新日期：
                  11月24日
              </div>
              </div>

            </div>
            <div className="hotcont">
              <div className="m-sglst">
                {songList.map((item,index) => {
                  return (
                    <NavLink to="/play" className="m-sgitem" key={item.id}>
                      
                      <div className={index+1<=3?"sgfl-cred":"sgfl"}>{index>=0&&index<=8?'0'+(index+1):index+1}</div>
                      <i className={item.canDislike ? "u-hmsprt1" : ""}></i>
                      <div className="sgfr">
                        <div className="sgchfl">
                          <div className="f-thide sgtl"> {item.name}</div>
                          <div className="f-thide sginfo">{item.ar[0].name}-{item.al.name}</div>
                        </div>
                        <div className="sgchfr">
                          <span className="u-hmsprt sgchply"></span>
                        </div>
                      </div>
                    
                    </NavLink>
                  )
                })}

              </div>
            </div>
            <div className="hotdn">
              <span className="hotview">查看完整榜单></span>
            </div>
          </div>

        </div>

      </div>
    )
  }
}
export default Rank