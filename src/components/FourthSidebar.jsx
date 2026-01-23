import './Sidebar.css'
import tsi from '../assets/tsi.png'
import tsi2 from '../assets/tsi2.png'
import tsi3 from '../assets/tsi3.png'
import tsi4 from '../assets/tsi4.png'
import tsi5 from '../assets/tsi5.png'
import tsi6 from '../assets/tsi6.png'
import tsi7 from '../assets/tsi7.png'
import setting from '../assets/setting.png'
import man3 from '../assets/man3.png'
import man4 from '../assets/man4.png'
import mic from '../assets/mic.png'
import msg from '../assets/msg.png'

const FourthSidebar = () => {
  return (
    <div className="sidebar"style={{height:"799px",width:"54px",borderTop:"2px solid #FFD705",borderRadius:"10px",marginTop:"5px",borderBottom:"none"}}>
      <div className="sidebar-bottom"style={{gap:"40px"}}>
        <img 
          src={tsi} 
          alt="" 
          className="sidebar-img" 
          style={{height:"20px",width:"20px",marginTop:"1rem"}}
        />
        <img src={tsi2} alt="Icon 1" className="sidebar-img" style={{height:"15px",width:"16px"}}/>
        <div className="sidebar-icon-container active" style={{height:"34px",width:"37px"}}>
          <img src={tsi3} alt="Icon 2" className="sidebar-img" style={{height:"18px",width:"18px"}}/>
        </div>
        <img src={tsi4} alt="Icon 3" className="sidebar-img" style={{height:"14px",width:"15px"}}/>
        <img src={tsi5} alt="Icon 4" className="sidebar-img" style={{height:"16px",width:"16px"}}/>
        <img src={tsi6} alt="Icon 4" className="sidebar-img" style={{height:"16px",width:"16px"}}/>
        <img src={tsi7} alt="Icon 4" className="sidebar-img" style={{height:"16px",width:"16px"}}/>
        <img src={msg} alt="Message" className="sidebar-img" style={{height:"16px",width:"16px"}}/>
        <img src={mic} alt="Mic" className="sidebar-img" style={{height:"17px",width:"17px"}}/>
        <img src={setting} alt="Settings" className="sidebar-img" style={{height:"16px",width:"16px"}}/>
        <div style={{width:"30px",height:"1px",backgroundColor:"#9CA3AF"}}></div>
        <img src={man3} alt="Man 3" className="sidebar-img" style={{height:"26px",width:"26px"}}/>
        <img src={man4} alt="Man 4" className="sidebar-img" style={{height:"34px",width:"34px",marginTop:"-25px"}}/>
      </div>
    </div>
  )
}

export default FourthSidebar
