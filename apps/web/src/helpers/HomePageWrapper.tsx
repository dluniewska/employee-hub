import { Outlet } from "react-router-dom"

const HomePageWrapper = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div>users</div>
        <div>units</div>
      </div>
      <Outlet />
    </div>
  )
}

export default HomePageWrapper