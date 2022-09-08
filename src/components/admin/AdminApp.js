import { Outlet } from "react-router"
import Sidebar from "./Sidebar"
const AdminApp = () => {
  return (
      <div>
          <Sidebar />
          <div style={{backgroundColor: '#fff'}}>
              <Outlet />
          </div>
      
    </div>
  )
}

export default AdminApp
