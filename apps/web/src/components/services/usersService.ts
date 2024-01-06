import { User } from "@models/types.user";
import { axiosInstance } from "./axios-instance";

const URN = "/users";

export const usersService = {

    async getUsers(take: number, skip: number): Promise<User[]> {

        return await axiosInstance.get(`${URN}?take=${take}&skip=${skip}`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
                return err;
            });
    },

    async getUser(id: number): Promise<User> {

        return await axiosInstance.get(`${URN}/${id}`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
                return err;
            });
    }
}