import { useContext, useEffect } from "react";
import { EmployeeHubContext } from "../../providers/ContextProvider";
import { usersService } from "../services/usersService";

const HomePage = () => {

    const { users, setUsers } = useContext(EmployeeHubContext)

    useEffect(() => {
      usersService.getUsers(10,0).then((res) => {
        setUsers(res);
      })
  }, [])

  return (
    <div>{JSON.stringify(users)}</div>
  )
}

export default HomePage