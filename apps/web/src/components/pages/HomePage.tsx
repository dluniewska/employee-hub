import { useContext, useEffect, useState } from "react";
import { EmployeeHubContext } from "~providers/ContextProvider";
import UsersList from "~components/common/UsersList";
import { filterBySkillNames, filterUsersByName } from "~helpers/UsersHelper";
import { useSearch } from "~hooks/useSearch";
import useUsersService from "~hooks/useUsersService";
import SkillsList from "~common/SkillsList";
import useSkillsService from "~hooks/useSkillsService";
import { Skill } from "~types/types.skill";

const HomePage = () => {

  const { users, setUsers } = useContext(EmployeeHubContext);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
  const { getUsers, getUsersBySkills } = useUsersService();
  const { getSkills } = useSkillsService();
  const { searchString } = useSearch()

  useEffect(() => {
    if (selectedSkills.length > 0) {
      const skillNames = selectedSkills.map(skill => skill.name);        

      getUsersBySkills(100, 0, skillNames)
      .then((sel_res) => {
        console.log(sel_res);
        let filteredBySkill = filterBySkillNames(sel_res, skillNames);
        console.log(filteredBySkill);

        let filteredUsers = filterUsersByName(filteredBySkill, searchString);
        setUsers(filteredUsers);
      })    }
    else {
      getUsers(100, 0)
      .then((us_res) => {
        let filteredUsers = filterUsersByName(us_res, searchString);
        setUsers(filteredUsers);
      })
    }

    getSkills(100, 0)
      .then((skills) => {
        setSkills(skills)
      })

  }, [searchString, selectedSkills])


  return (
    <div className="h-full w-screen">
      <div className="flex flex-row h-screen">
        <div className="basis-3/4 overflow-visible">
          <UsersList users={users} />
        </div>
        <div className="basis-1/4 bg-pastel-brown-color/25 shadow-md overflow-visible">
          <SkillsList skills={skills} selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills} />
        </div>
      </div>
    </div>
  )
}

export default HomePage