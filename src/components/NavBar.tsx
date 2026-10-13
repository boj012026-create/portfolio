import { Link } from 'react-router-dom'
import ThemeSwitchBtn from './ThemeSwitchBtn.tsx'

export default function navBar() {
  return (
    <>
    <nav>
      <ThemeSwitchBtn/>
      <Link to='/portfolio/home'>Home</Link>
    </nav>
    </>
  )
}
