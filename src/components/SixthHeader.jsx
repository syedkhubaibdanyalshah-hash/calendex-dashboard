import './SixthHeader.css'
import header1 from '../assets/header1.png'
import smartphone from '../assets/smartphone 1.png'
import laptop from '../assets/laptop (1) 1.png'
import nnIcon from '../assets/nn.png'

const SixthHeader = () => {
  return (
    <header className="edit-template-header">
      <div className="edit-header-content">
        {/* Left section - header1 image and title */}
        <div className="edit-header-left">
          <img src={header1} alt="header" className="header-icon" />
          <h1 className="edit-header-title">Edit Notification Template</h1>
        </div>

        {/* Center section - Mobile/Desktop toggle and Changes Saved */}
        <div className="edit-header-center">
          <div className="device-toggle">
            <button className="device-btn">
              <img src={smartphone} alt="mobile" className="device-icon" />
              Mobile
            </button>
            <button className="device-btn active">
              <img src={laptop} alt="desktop" className="device-icon" />
              Desktop
            </button>
          </div>
         
        </div>

       
      </div>
    </header>
  )
}

export default SixthHeader