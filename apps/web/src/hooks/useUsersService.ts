import { User } from "~types/types.user";
import useAxios from "~hooks/useAxios";

const URN = "/users";

const useUsersService = () => {
    const axios = useAxios()

    async function getUsers(take: number, skip: number): Promise<User[]> {

        return await axios.get(`${URN}?take=${take}&skip=${skip}`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
                return err;
            });
    }

    async function getUsersBySkills(take: number, skip: number, skillNames: string[]): Promise<User[]> {
        const params = new URLSearchParams({ strings: JSON.stringify(skillNames) });

        return await axios.get(`${URN}/byskills?take=${take}&skip=${skip}&${params.toString()}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
    }

    async function getUser(id: number): Promise<User> {

        return await axios.get(`${URN}/${id}`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
                return err;
            });
    }

    return { getUsers, getUser, getUsersBySkills }
}

export default useUsersService;