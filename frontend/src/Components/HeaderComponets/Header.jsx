import React from 'react'
import './Header.css'
import { WavyBackgroundDemo } from '../AccertityUIComponents/WavyBackgroundDemo'

const Header = ({theme}) => {
  return (
    <div className={`header-ctn ${theme}`}>
      <WavyBackgroundDemo theme={theme}/>
    </div>
  )
}

export default Header
