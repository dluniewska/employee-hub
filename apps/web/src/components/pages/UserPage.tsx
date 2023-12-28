import { useLocation } from "react-router-dom"
import { UserPageLocationProps } from "@/types/props/types.userPageLocationProps"
import { useEffect, useState } from "react"
import { usersService } from "../services/usersService"
import { IUser } from "@/types/types.user"

const UserPage = () => {

  const location = useLocation().state as UserPageLocationProps
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    usersService.getUser(location.id).then((res) => {
      setUser(res);
      console.log(JSON.stringify(res))
    })
  }, [])

  console.log(user)

  return (

    <div className="flex flex-row">

      <div className="h-screen w-20  basis-2/4 m-auto flex flex-col justify-center align-middle">

        <div className="flex flex-row flex-wrap justify-center align-middle">

          <div className="lg:basis-1/3 flex justify-center basis-full">
            <img src={location.path} className='p-5 rounded-full w-40 h-40 shadow-md' alt="Avatar" />
          </div>

          <div className="basis-2/3 flex flex-col justify-center mt-3">
            <div className="flex flex-col w-1/2 flex-wrap">
              <div className="text-3xl font-bold">{user?.firstname} {user?.lastname}</div>
              <div className="mt-1 ml-1 italic">{user?.email}</div>
            </div>
            <div className="flex flex-col w-1/2 mt-5" >
              <div className="text-lg">{user?.position.name}</div>
              <div className="text-pastel-mud-color">{user?.unit.name}</div>
            </div>
          </div>

        </div>

        <div className="w-3/4 p-6 mt-7 ">
          <div className="text-xl font-bold">Informacje:</div>
          <div>{user?.description}</div>
          <div>{user?.room}</div>
          <div>{user?.phone}</div>
        </div>

      </div>

      <div className="h-screen basis-1/4 bg-pastel-pink-color">
      </div>

    </div>
  )
}

export default UserPage