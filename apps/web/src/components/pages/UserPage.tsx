import { useLocation } from "react-router-dom"
import { UserPageLocationProps } from "@/types/props/types.userPageLocationProps"
import React, { useEffect, useState } from "react"
import { usersService } from "../services/usersService"
import { User } from "@/types/types.user"
import { Experience } from "@/types/types.experience"
import { getDuration } from "@/helpers/DateTimeHelper"
import { Skill } from "@/types/types.skill"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { Avatar } from "@radix-ui/react-avatar"
import { AvatarFallback, AvatarImage } from "../ui/avatar"

const UserPage = () => {

  const location = useLocation().state as UserPageLocationProps
  const [user, setUser] = useState<User>();
  const path = location?.path ?? ''

  useEffect(() => {
    usersService.getUser(location?.id).then((res) => {
      setUser(res)
    })
  }, [])

  return (
    <div className="flex flex-row flex-wrap-reverse overflow-y-auto bg-scroll h-screen">
      <div className="h-screen basis-full md:basis-3/5 flex flex-col justify-center px-8 overflow-y-auto bg-scroll">
        <Accordion type="multiple" defaultValue={["skills", "experience"]}>
          <AccordionItem value="skills">
            <AccordionTrigger className="text-xl text-pastel-dark-brown-color font-semibold underline decoration-2 decoration-pastel-mud-color">Umiejętności</AccordionTrigger>
            <AccordionContent>
              {user?.skills && user.skills.length > 0 && <SkillsList skills={user.skills} />}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="experience" className="mt-3">
            <AccordionTrigger className="text-xl text-pastel-dark-brown-color font-semibold underline decoration-2 decoration-pastel-mud-color">Doświadczenie</AccordionTrigger>
            <AccordionContent>
              {user?.experience && user.experience.length > 0 && <ExperienceList experience={user?.experience} />}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col px-8 h-screen basis-full md:basis-2/5 bg-pastel-pink-color/60 overflow-y-auto bg-scroll">
        <Avatar className="flex justify-center mt-10">
          <AvatarImage className='p-5 bg-white rounded-full w-40 h-40 shadow-md overflow-visible' src={path} />
          <AvatarFallback className="w-40 h-40">{user ? `${Array.from(user?.firstname ?? "0")[0]}${Array.from(user?.lastname ?? "0")[0]}` : "noname"}</AvatarFallback>
        </Avatar>

        {user && <UserBasicData user={user} />}
        {user && <UserDetails user={user} />}

      </div>

    </div>
  )
}

const UserBasicData = ({ user }: { user: User }) => {
  return (
    <div className="flex flex-col my-5">
      <div className="w-max mx-auto">
        <div className="flex flex-col flex-wrap w-full">
          <div className="text-3xl font-bold text-center">{user?.firstname} {user?.lastname}</div>
          <div className="mt-1 ml-1 italic text-center">{user?.email}</div>
        </div>
        <div className="flex flex-col mt-5 w-full" >
          <div className="text-lg text-center">{user?.position?.name}</div>
          <div className="text-pastel-mud-color text-center">{user?.unit?.name}</div>
        </div>
      </div>
    </div>
  )
}

const UserDetails = ({ user }: { user: User }) => {
  return (
    <div className="w-3/4 p-6 mt-7 ">
      <div className="text-xl font-bold underline decoration-2 decoration-pastel-mud-color mb-5">O mnie:</div>
      <div>
        {user?.room && <div><span className="font-bold">Pokój:</span> {user?.room}</div>}
        {user?.phone && <div><span className="font-bold">Telefon:</span> {user?.phone}</div>}
        {user?.description && <div className="mt-5 font-light">{user?.description}</div>}
      </div>

    </div>
  )
}

const SkillsList = ({ skills }: { skills: Skill[] }) => {
  return (
    <div className="mt-5">
      <div className="text-pastel-dark-brown-color mt-5">
        {
          skills.map(obj => (
            <span className="pr-3 leading-3" key={`${obj.skill.id}`}>{obj.skill.name}</span>
          ))
        }
      </div>
    </div>
  )
}

const ExperienceList = ({ experience }: { experience: Experience[] }) => {
  return (
    <div className="mt-5" key="experience-wrapper">
      <div className="text-pastel-dark-brown-color mt-5 grid grid-cols-5 gap-3 border-1 w-full min-w-min">
        <div className="font-bold col-span-2" key="name">Nazwa</div>
        <div className="font-bold col-span-1" key="duration">Czas</div>
        <div className="font-bold col-span-2" key="description">Opis</div>
        {
          experience.map(obj => (
            <React.Fragment key={obj.id}>
              <div className="col-span-2 text-wrap" key={`${obj.id}_name`}>{obj.name}</div>
              <div className="col-span-1 text-wrap" key={`${obj.id}_dur`}>{getDuration(obj.startDate, obj.endDate)}</div>
              <div className="col-span-2 text-wrap" key={`${obj.id}_desc`}>{obj.description}</div>
            </React.Fragment>
          ))
        }
      </div>
    </div>
  )
}

export default UserPage