import React from 'react'
import { Plus } from 'lucide-react'
import './Header.css'
import header1 from '../assets/header1.png'


const Header = ({ onCreateNewClick, onMenuClick }) => {
  return (
    <header className="header"style={{height:"51px"}}>
        {/* Hamburger Menu for Mobile */}
        <button className="hamburger-menu" onClick={onMenuClick} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        
        <img src={header1} alt="" style={{height:"30px",width:"30px",marginLeft:"16px"}}/>
      <div className="header-content">
        {/* Left section - Dashboard title */}
        <div className="header-left">
          <h1 className="dashboard-title"style={{color:"#404145"}}>Dashboard</h1>
        </div>

        {/* Right section - Create New button */}
        <div className="header-right">
          <button className="create-new-btn" onClick={onCreateNewClick}>
            <Plus className="plus-icon" />
            Create New
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header