import { FC } from 'react'
import { NavigationButton } from './styles'
import { Link } from 'react-router-dom'

interface HeaderProps {
  isHome?: boolean
}

const Header: FC<HeaderProps> = ({ isHome }) => {
  const route = {
    path: isHome ? '/list' : '/',
    label: isHome ? 'go to list ->' : 'go to home <-',
  }
  return (
    <>
      <Link style={{ textDecoration: 'none', color: '#000' }} to={route.path}>
        <NavigationButton>{route.label}</NavigationButton>
      </Link>
    </>
  )
}

export default Header
