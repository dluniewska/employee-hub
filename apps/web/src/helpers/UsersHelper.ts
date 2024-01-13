import { User } from "~types/types.user";

export function filterUsersByName(users: User[], searchTerm: string): User[] {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  return lowerCaseSearchTerm ?
  users?.filter((user) =>
    user.firstname.toLowerCase().includes(lowerCaseSearchTerm) || user.lastname.toLowerCase().includes(lowerCaseSearchTerm)
  )
  :
  users;
}

export function filterBySkillNames(users: User[], skillsToFilterBy: string[]): User[] {
  const filteredUsers = users.filter((user) =>
  skillsToFilterBy.every((skillName) =>
    user.skills.some((skill) => skill.name === skillName)
  ))
  return filteredUsers;
}