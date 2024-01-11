import { useContext, useEffect } from "react";
import { EmployeeHubContext } from "~providers/ContextProvider";
import Grid from "~common/Grid";
import { filterUsersByName } from "~helpers/UsersHelper";
import { useSearch } from "~hooks/useSearch";
import useUsersService from "~hooks/useUsersService";

const HomePage = () => {

    const { users, setUsers } = useContext(EmployeeHubContext)
    const { searchString } = useSearch()
    const { getUsers } = useUsersService();

    useEffect(() => {
      getUsers(10,0).then((res) => {
        let filteredUsers = filterUsersByName(res, searchString);
        setUsers(filteredUsers);
      })
    }, [searchString])

    console.log(users)

  return (
    <div className="h-screen w-screen">
      <div className="flex flex-row h-screen">
        <div className="basis-3/4 mt-5">
          <Grid users={users} />
        </div>
        <div className="basis-1/4 bg-pastel-brown-color/25 p-7 shadow-md">
          <h1 className="font-bold text-lg mt-5 text-pastel-dark-brown-color">Filtrowanie</h1>
        </div>
      </div>
    </div>
  )
}

export default HomePage