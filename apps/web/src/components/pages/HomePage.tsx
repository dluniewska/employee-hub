import { useContext, useEffect } from "react";
import { EmployeeHubContext } from "../../providers/ContextProvider";
import { usersService } from "../services/usersService";
import Grid from "../ui/Grid";

const HomePage = () => {

    const { users, setUsers } = useContext(EmployeeHubContext)

    useEffect(() => {
      usersService.getUsers(10,0).then((res) => {
        setUsers(res);
      })
  }, [])

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-slate-700 to-cyan-700">
      <Grid users={users} />
    </div>
  )
}

export default HomePage