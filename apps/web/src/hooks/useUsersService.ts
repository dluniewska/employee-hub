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

    async function getUser(id: number): Promise<User> {
        const axios = useAxios()

        return await axios.get(`${URN}/${id}`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
                return err;
            });
    }

    return { getUsers, getUser }
}

export default useUsersService;