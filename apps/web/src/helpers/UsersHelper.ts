import { User } from "~types/types.user";

export function filterUsersByName(users: User[], searchTerm: string): User[] {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
  
    return users.filter((user) =>
      user.firstname.toLowerCase().includes(lowerCaseSearchTerm) || user.lastname.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }