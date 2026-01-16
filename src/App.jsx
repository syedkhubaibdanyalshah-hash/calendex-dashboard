import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import TemplateNavbar from './components/TemplateNavbar'
import TemplateHeader from './components/TemplateHeader'
import TemplateSidebar from './components/TemplateSidebar'
import TemplateList from './components/TemplateList'
import ThirdNavbar from './components/ThirdNavbar'
import ThirdHeader from './components/ThirdHeader'
import ThirdSidebar from './components/ThirdSidebar'
import ThirdList from './components/ThirdList'
import FourthNavbar from './components/FourthNavbar'
import FourthHeader from './components/FourthHeader'
import FourthSidebar from './components/FourthSidebar'
import FourthList from './components/FourthList'
import FifthNavbar from './components/FifthNavbar'
import FifthHeader from './components/FifthHeader'
import FifthSidebar from './components/FifthSidebar'
import FifthList from './components/FifthList'
import SixthNavbar from './components/SixthNavbar'
import SixthHeader from './components/SixthHeader'
import SixthSidebar from './components/SixthSidebar'
import SixthList from './components/SixthList'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const handleCreateNewClick = () => {
    setCurrentPage('templateList')
    closeSidebar()
  }

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard')
    closeSidebar()
  }

  const handleCircleClick = () => {
    setCurrentPage('thirdPage')
    closeSidebar()
  }

  const handleBackToTemplateList = () => {
    setCurrentPage('templateList')
    closeSidebar()
  }

  const handleNextToFourth = () => {
    setCurrentPage('fourthPage')
    closeSidebar()
  }

  const handleBackToThird = () => {
    setCurrentPage('thirdPage')
    closeSidebar()
  }

  const handleNextToFifth = () => {
    setCurrentPage('fifthPage')
    closeSidebar()
  }

  const handleBackToFourth = () => {
    setCurrentPage('fourthPage')
    closeSidebar()
  }

  const handleNextToSixth = () => {
    setCurrentPage('sixthPage')
    closeSidebar()
  }

  const handleBackToFifth = () => {
    setCurrentPage('fifthPage')
    closeSidebar()
  }

  if (currentPage === 'dashboard') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Header onCreateNewClick={handleCreateNewClick} onMenuClick={toggleSidebar} />
        <div className="flex">
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
          <main className="flex-1">
            <Dashboard />
          </main>
        </div>
      </div>
    )
  }

  if (currentPage === 'thirdPage') {
    return (
      <div className="min-h-screen bg-gray-50">
        <ThirdNavbar onBackClick={handleBackToTemplateList} />
        <ThirdHeader onBackClick={handleBackToTemplateList} onMenuClick={toggleSidebar} />
        <div className="flex">
          <ThirdSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
          <main className="flex-1">
            <ThirdList onNext={handleNextToFourth} />
          </main>
        </div>
      </div>
    )
  }

  if (currentPage === 'fourthPage') {
    return (
      <div className="min-h-screen bg-gray-50">
        <FourthNavbar onBackClick={handleBackToThird} />
        <FourthHeader onMenuClick={toggleSidebar} />
        <div className="flex">
          <FourthSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
          <main className="flex-1">
            <FourthList onNext={handleNextToFifth} />
          </main>
        </div>
      </div>
    )
  }

  if (currentPage === 'fifthPage') {
    return (
      <div className="min-h-screen bg-gray-50">
        <FifthNavbar onBackClick={handleBackToFourth} />
        <FifthHeader onMenuClick={toggleSidebar} />
        <div className="flex">
          <FifthSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
          <main className="flex-1">
            <FifthList onNext={handleNextToSixth} />
          </main>
        </div>
      </div>
    )
  }

  if (currentPage === 'sixthPage') {
    return (
      <div className="min-h-screen bg-gray-50">
        <SixthNavbar onBackClick={handleBackToFifth} />
        <SixthHeader onMenuClick={toggleSidebar} />
        <div className="flex">
          <SixthSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
          <main className="flex-1">
            <SixthList />
          </main>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TemplateNavbar onBackClick={handleBackToDashboard} />
      <TemplateHeader onBackClick={handleBackToDashboard} onAddClick={handleCircleClick} onMenuClick={toggleSidebar} />
      <div className="flex">
        <TemplateSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <main className="flex-1">
          <TemplateList />
        </main>
      </div>
    </div>
  )
}

export default App