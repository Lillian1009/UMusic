import React from 'react'
//引入路由属性
import { NavLink } from "react-router-dom";
//引入样式
import "../../assets/css/rank.css";
class Rank extends React.Component {
  constructor () {
    super();
    this.state = {
      songList: [
        {
          id: '01',
          songName: '会不会(吉他版)',
          singer: '刘大壮',
          issue: '会不会'
        },
        {
          id: '02',
          songName: '我很好(吉他版)',
          singer: '刘大壮',
          issue: '我很好(吉他版)'
        },
        {
          id: '03',
          songName: '执迷不悟',
          singer: '鱿籽酱',
          issue: '执迷不悟'
        },
        {
          id: '04',
          songName: '海底',
          singer: '一支榴莲',
          issue: '《独》'
        },
        {
          id: '05',
          songName: '他只是经过',
          singer: 'h3R3/Felix Bennett',
          issue: '他只是经过'
        },
        {
          id: '06',
          songName: '经济舱(Live)',
          singer: 'Kafe.Hu',
          issue: '中国新说唱2020第十期'
        },
        {
          id: '07',
          songName: '如果当时2020',
          singer: '许嵩/朱婷婷',
          issue: '如果当时2020'
        },
        {
          id: '08',
          songName: '是想你的声音啊',
          singer: '傲七爷',
          issue: '是想你的声音啊'
        },
        {
          id: '09',
          songName: '天外来物',
          singer: '薛之谦',
          issue: '天外来物'
        },
        {
          id: '10',
          songName: '囍(Chinese Wedding)',
          singer: '葛东琪',
          issue: '囍(Chinese Wedding)'
        },
        {
          id: '11',
          songName: '还是分开',
          singer: '张叶蕾',
          issue: '还是分开'
        },
        {
          id: '12',
          songName: '苦尽甘来',
          singer: '翁梓铭',
          issue: '感·知'
        },
        {
          id: '13',
          songName: '永不失联的爱',
          singer: '周兴哲',
          issue: '如果雨之后'
        },
        {
          id: '14',
          songName: '游京',
          singer: '海伦',
          issue: '游京'
        },
        {
          id: '15',
          songName: 'Love Is Gone(feat. Dylan Matthew)',
          singer: 'SLANDER/Dylan Matthew',
          issue: 'Love Is Gone'
        },
        {
          id: '16',
          songName: '偏爱',
          singer: 'Lil Ghost小鬼',
          issue: '偏爱'
        },
        {
          id: '17',
          songName: '会不会(正式版)',
          singer: '刘大壮',
          issue: '会不会'
        },
        {
          id: '18',
          songName: '经济舱',
          singer: 'KEY.L刘聪/Kafe.Hu',
          issue: '经济舱'
        },
        {
          id: '19',
          songName: '世间美好与你环环相扣',
          singer: '柏松',
          issue: '听闻余生'
        },
        {
          id: '20',
          songName: '把回忆拼好给你',
          singer: '王贰浪',
          issue: '把回忆拼好给你'
        },
      ]
    }
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
                      
                      <div className="sgfl">{index>=0&&index<=8?'0'+(index+1):index+1}</div>
                      <div className="sgfr">
                        <div className="sgchfl">
                          <div className="f-thide sgtl"> {item.songName}</div>
                          <div className="f-thide sginfo">{item.singer}-{item.issue}</div>
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