import { Outlet } from "react-router-dom"

const MainTemplate = () => {
  return (
    <div>
        <p>MainTemplate</p>
        <Outlet />
    </div>
  )
}

export default MainTemplate