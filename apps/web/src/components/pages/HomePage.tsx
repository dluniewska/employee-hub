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
    <div className="h-screen w-screen">
      <div className="flex flex-row h-screen">
        <div className="basis-3/4 mt-5">
          <Grid users={users} />
        </div>
        <div className="basis-1/4 bg-pastel-brown-color/25 p-7 shadow-md">
          <h1 className="font-bold text-2xl mt-5 text-pastel-dark-brown-color">Filtrowanie</h1>
        </div>
      </div>
    </div>
  )
}

export default HomePage