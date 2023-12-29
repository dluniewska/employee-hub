import { useLocation } from "react-router-dom"
import { UserPageLocationProps } from "@/types/props/types.userPageLocationProps"
import { useEffect, useState } from "react"
import { usersService } from "../services/usersService"
import { IUser } from "@/types/types.user"
import moment from "moment"

const UserPage = () => {

  const location = useLocation().state as UserPageLocationProps
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    usersService.getUser(location.id).then((res) => {
      setUser(res);
    })
  }, [])

  function getDuration(startDate: Date, endDate: Date): string {
    let diff = moment(endDate).diff(moment(startDate));
    let duration = moment.duration(diff);
    return `${duration.years()} ${duration.years() >1 ? "lata" : "rok"} ${duration.months() >0 ? `${duration.months()} msc` : ''}`
  }


  return (

    <div className="flex flex-row">

      <div className="h-screen basis-3/5 flex flex-col justify-center align-middle px-8">

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

      <div className="flex flex-col justify-center px-8 h-screen basis-2/5 bg-pastel-pink-color/60">
        <div>
          <div>
            <div className="text-xl text-pastel-dark-brown-color font-semibold underline decoration-2 decoration-pastel-mud-color">Umiejętności</div>
            <ul className="text-pastel-dark-brown-color mt-5">
              {
                user?.skills.map(obj => (
                  <li className="p-3 leading-3" key={`${obj.skill.id}`}>{obj.skill.name}</li>
                ))
              }
            </ul>
          </div>
          <div className="mt-8">
            <div className="text-xl text-pastel-dark-brown-color font-semibold underline decoration-2 decoration-pastel-mud-color">Doświadczenie</div>
            <div className="text-pastel-dark-brown-color mt-5 grid grid-cols-5 gap-3 auto-cols-max border-1">
              <div className="font-bold col-span-2">Nazwa</div>
              <div className="font-bold col-span-1">Czas</div>
              <div className="font-bold col-span-2">Opis</div>
              {
                user?.experience.map(obj => (
                  <>
                  <div className="col-span-2" key={`${obj.id}_1`}>{obj.name}</div>
                  <div className="col-span-1" key={`${obj.id}_2`}>{getDuration(obj.startDate, obj.endDate)}</div>
                  <div className="col-span-2" key={`${obj.id}_3`}>{obj.description}</div>
                  </>
                ))
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UserPage