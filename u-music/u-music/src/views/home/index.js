import React from 'react';
// 引入样式
import '../../assets/css/home.css'
import imgUrl1 from '../../assets/img/home_1.jpg'
import imgUrl2 from '../../assets/img/home_2.jpg'
import imgUrl3 from '../../assets/img/home_3.jpg'
import imgUrl4 from '../../assets/img/home_4.jpg'
import imgUrl5 from '../../assets/img/home_5.jpg'
import imgUrl6 from '../../assets/img/home_6.jpg'

import imgLogo from '../../assets/img/logo.png'
class Home extends React.Component{
    constructor(){
    super();
    this.state={
        songList: [
            {
              id: 1,
              img: imgUrl1,
              name: " [华语速爆新歌] 陈奕迅淡然呼出爱情无形重量",
              sale:'76.7万'
            },
            {
              id: 2,
              img: imgUrl2,
              name: "『精选翻唱』万人血书求完整版~",
              sale:'20.6万'
            },
            {
              id: 3,
              img: imgUrl3,
              name: "我对你又何止是执迷不悟",
              sale:'112.4万'
            },
            {
              id: 4,
              img: imgUrl4,
              name: "'所以你长篇大论换来了什么'",
              sale:'5.7亿'
            },
            {
            id: 5,
            img: imgUrl5,
            name: "网易云年度最热新歌总结",
            sale:'443.1万'
            },
            {
            id: 6,
            img: imgUrl6,
            name: "csgo伤感歌单",
            sale:'7.8万'
            },
        ],
        songs: [
            {
              id: 1,
              title: "失眠飞行",
              author:'一条小团团0v0-失眠飞行'
            },
            {
                id: 2,
                title: "Never(狼殿下战爱版预告宣传曲)",
                author:'卢苑仪-never(狼殿下战爱版预告宣传曲)'
            },
            {
                id: 3,
                title: "天性使燃",
                author:'Higher Brothers-天性使燃'
            },
            {
                id: 4,
                title: "地球上最无聊的下午",
                author:'黄鸿升-地球上最无聊的下午'
            },
            {
                id: 5,
                title: "Hey Boy",
                author:'Sia-Hey Boy'
            },
            {
                id: 6,
                title: "NO关心（日记版）",
                author:'汪睿-NO关心'
            },
        ]
        }
    }
    // 跳转函数
    goList(id){
        this.props.history.push(`/list/${id}`)
    }
    render(){
        const {songList}=this.state;
        const {songs}=this.state;
        return(
        <div className='homeremd'>
            {/* title */}
            <h2 className='remd_t1'>
                推荐歌单
            </h2>
            {/* list */}
            <div className='remd_songs'>
                <ul className='remd_ul'>
                    {songList.map(item=>{
                        return(
               <li className='remd_li' key={item.id} onClick={this.goList.bind(this,item.id)}>
              <div className='remd_img'>
              <img src={item.img} alt='' className='u-img'></img>
              <span className='remd_lnum'>{item.sale}</span>
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
                    {songs.map(item=>{
                        return(
                    <a className="m-sgitem" href="" key={item.id}>
                       <div className="sgfr f-bd f-bd-btm">
                        <div className="sgchfl">
                          <div className="f-thide sgtl">
                            {item.title}
                     {/* <span className="sgalia">
                       (原唱：接个吻，开一枪 / 沈以诚 / 薛明媛)
                      </span> */}
                          </div>
                          <div className="f-thide sginfo">
                          <i className="u-hmsprt1"></i>
                           {item.author}
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