import { User } from "~types/types.user";
import { apiAxiosInstance } from "./apiService";

const URN = "/users";

export const usersService = {

    async getUsers(take: number, skip: number): Promise<User[]> {

        return await apiAxiosInstance.get(`${URN}?take=${take}&skip=${skip}`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
                return err;
            });
    },

    async getUser(id: number): Promise<User> {

        return await apiAxiosInstance.get(`${URN}/${id}`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
                return err;
            });
    }
}