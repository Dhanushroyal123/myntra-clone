import logo from '../../assets/brand-logo.png'
import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

const Navtest = () => {
  const [showLinks, setShowLinks] = useState(false)
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <div className='links' id={showLinks ? 'hidden' : ''}>
          <a href='/home'>HOME</a>
          <a href='/feed'>FEEDBACK</a>
          <a href='/about'>ABOUT US</a>
          <a href='/contact'>CONTACT US</a>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}>
          <MenuIcon />
        </button>
      </div>
      <div className='rightSide'>
        <div
          style={{
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '4px',
          }}
        >
          <input type='text' placeholder='search' />
          <SearchIcon />
        </div>
        <button>Search</button>
      </div>
    </div>
  )
}

export default Navtest
