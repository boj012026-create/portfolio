import { NavLink } from 'react-router-dom'

export default function navBar() {
  return (
    <>
    <nav className="flex gap-1.5">
      <NavLink to='/'>Hjem</NavLink>
      <NavLink to='/projects'>Prosjekt</NavLink>
    </nav>
    </>
  )
}
