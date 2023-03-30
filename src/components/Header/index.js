import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jet_token')
    history.replace('/login')
  }

  return (
    <nav className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
      />
      <ul className="list-container">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
      </ul>
      <button type="button" onClick={onClickLogout} className="logout-btn">
        Logout
      </button>
    </nav>
  )
}

export default Header
