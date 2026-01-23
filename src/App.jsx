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

  const handleCreateNewClick = () => {
    setCurrentPage('templateList')
  }

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard')
  }

  const handleCircleClick = () => {
    setCurrentPage('thirdPage')
  }

  const handleBackToTemplateList = () => {
    setCurrentPage('templateList')
  }

  const handleNextToFourth = () => {
    setCurrentPage('fourthPage')
  }

  const handleBackToThird = () => {
    setCurrentPage('thirdPage')
  }

  const handleNextToFifth = () => {
    setCurrentPage('fifthPage')
  }

  const handleBackToFourth = () => {
    setCurrentPage('fourthPage')
  }

  const handleNextToSixth = () => {
    setCurrentPage('sixthPage')
  }

  const handleBackToFifth = () => {
    setCurrentPage('fifthPage')
  }

  if (currentPage === 'dashboard') {
    return (
      <div className="min-h-screen bg-gray-50 overflow-x-hidden">
        <Navbar />
        <Header onCreateNewClick={handleCreateNewClick} />
        <div className="flex flex-col lg:flex-row">
          <Sidebar />
          <main className="flex-1 w-full overflow-x-hidden">
            <Dashboard />
          </main>
        </div>
      </div>
    )
  }

  if (currentPage === 'thirdPage') {
    return (
      <div className="min-h-screen bg-gray-50 overflow-x-hidden">
        <ThirdNavbar onBackClick={handleBackToTemplateList} />
        <ThirdHeader onBackClick={handleBackToTemplateList} />
        <div className="flex flex-col lg:flex-row">
          <ThirdSidebar />
          <main className="flex-1 w-full overflow-x-hidden">
            <ThirdList onNext={handleNextToFourth} />
          </main>
        </div>
      </div>
    )
  }

  if (currentPage === 'fourthPage') {
    return (
      <div className="min-h-screen bg-gray-50 overflow-x-hidden">
        <FourthNavbar onBackClick={handleBackToThird} />
        <FourthHeader />
        <div className="flex flex-col lg:flex-row">
          <FourthSidebar />
          <main className="flex-1 w-full overflow-x-hidden">
            <FourthList onNext={handleNextToFifth} />
          </main>
        </div>
      </div>
    )
  }

  if (currentPage === 'fifthPage') {
    return (
      <div className="min-h-screen bg-gray-50 overflow-x-hidden">
        <FifthNavbar onBackClick={handleBackToFourth} />
        <FifthHeader />
        <div className="flex flex-col lg:flex-row">
          <FifthSidebar />
          <main className="flex-1 w-full overflow-x-hidden">
            <FifthList onNext={handleNextToSixth} />
          </main>
        </div>
      </div>
    )
  }

  if (currentPage === 'sixthPage') {
    return (
      <div className="min-h-screen bg-gray-50 overflow-x-hidden">
        <SixthNavbar onBackClick={handleBackToFifth} />
        <SixthHeader />
        <div className="flex flex-col lg:flex-row">
          <SixthSidebar />
          <main className="flex-1 w-full overflow-x-hidden">
            <SixthList />
          </main>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <TemplateNavbar onBackClick={handleBackToDashboard} />
      <TemplateHeader onBackClick={handleBackToDashboard} onAddClick={handleCircleClick} />
      <div className="flex flex-col lg:flex-row">
        <TemplateSidebar />
        <main className="flex-1 w-full overflow-x-hidden">
          <TemplateList />
        </main>
      </div>
    </div>
  )
}

export default App