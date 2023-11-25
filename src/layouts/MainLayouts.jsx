import { Outlet } from "react-router-dom"
import Menu from "../components/Menu"

const MainLayouts = ({kalatisRaodenoba}) => {
  
  return (
    <>
    <Menu kalatisRaodenoba={kalatisRaodenoba}/>
    <Outlet/>
    </>
  )
}

export default MainLayouts