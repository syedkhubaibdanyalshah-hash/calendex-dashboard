import { useState } from 'react'
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

const FifthSidebar = () => {
  const [selectedIcon, setSelectedIcon] = useState(4);

  return (
    <div className="sidebar"style={{height:"793px",width:"54px",borderTop:"2px solid #FFD705",borderRadius:"10px",marginTop:"5px",borderBottom:"none"}}>
      <div className="sidebar-bottom"style={{gap:"20px"}}>
        <div 
          className={`sidebar-icon-container ${selectedIcon === 0 ? 'active' : ''}`}
          style={{cursor: "pointer"}}
          onClick={() => setSelectedIcon(0)}
        >
          <img 
            src={tsi} 
            alt="" 
            className="sidebar-img" 
            style={{height:"20px",width:"20px",marginTop:"1rem"}}
          />
        </div>
        
        <div 
          className={`sidebar-icon-container ${selectedIcon === 1 ? 'active' : ''}`}
          style={{cursor: "pointer"}}
          onClick={() => setSelectedIcon(1)}
        >
          <img src={tsi2} alt="Icon 1" className="sidebar-img" style={{height:"15px",width:"16px"}}/>
        </div>
        
        <div 
          className={`sidebar-icon-container ${selectedIcon === 2 ? 'active' : ''}`}
          style={{cursor: "pointer"}}
          onClick={() => setSelectedIcon(2)}
        >
          <img src={tsi3} alt="Icon 2" className="sidebar-img" style={{height:"18px",width:"18px"}}/>
        </div>
        
        <div 
          className={`sidebar-icon-container ${selectedIcon === 3 ? 'active' : ''}`}
          style={{cursor: "pointer"}}
          onClick={() => setSelectedIcon(3)}
        >
          <img src={tsi4} alt="Icon 3" className="sidebar-img" style={{height:"14px",width:"15px"}}/>
        </div>
        
        <div 
          className={`sidebar-icon-container ${selectedIcon === 4 ? 'active' : ''}`} 
          style={{height:"34px",width:"37px", cursor: "pointer"}}
          onClick={() => setSelectedIcon(4)}
        >
          <img src={tsi5} alt="Icon 4" className="sidebar-img" style={{height:"16px",width:"16px"}}/>
        </div>
        
        <div 
          className={`sidebar-icon-container ${selectedIcon === 5 ? 'active' : ''}`}
          style={{cursor: "pointer"}}
          onClick={() => setSelectedIcon(5)}
        >
          <img src={tsi6} alt="Icon 5" className="sidebar-img" style={{height:"16px",width:"16px"}}/>
        </div>
        
        <div 
          className={`sidebar-icon-container ${selectedIcon === 6 ? 'active' : ''}`}
          style={{cursor: "pointer"}}
          onClick={() => setSelectedIcon(6)}
        >
          <img src={tsi7} alt="Icon 6" className="sidebar-img" style={{height:"16px",width:"16px"}}/>
        </div>
        
        <img src={msg} alt="Message" className="sidebar-img" style={{height:"16px",width:"16px",marginTop:"7px"}}/>
        <img src={mic} alt="Mic" className="sidebar-img" style={{height:"17px",width:"17px",marginTop:"16px"}}/>
        <img src={setting} alt="Settings" className="sidebar-img" style={{height:"16px",width:"16px",marginTop:"16px"}}/>
        <div style={{width:"30px",height:"1px",backgroundColor:"#9CA3AF",marginTop:"10px"}}></div>
        <img src={man3} alt="Man 3" className="sidebar-img" style={{height:"26px",width:"26px",marginTop:"10px"}}/>
        <img src={man4} alt="Man 4" className="sidebar-img" style={{height:"32px",width:"32px",marginTop:"1px"}}/>
      </div>
    </div>
  )
}

export default FifthSidebar
