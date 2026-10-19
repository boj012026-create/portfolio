import { Link } from 'react-router-dom'
import ThemeSwitchBtn from './ThemeSwitchBtn.tsx'

export default function navBar() {
  return (
    <>
    <nav className="flex gap-1.5">
      <ThemeSwitchBtn/>
      <Link to='/'>Hjem</Link>
      <Link to='/projects'>Prosjekt</Link>
    </nav>
    </>
  )
}
