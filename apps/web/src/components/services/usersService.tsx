import { IUser } from "../../types/types.user";
import { axiosInstance } from "./axios-instance";

const URN = "/users";

export const usersService = {

    async getUsers(take: number, skip: number): Promise<IUser[]> {

        return await axiosInstance.get(`${URN}?take=${take}&skip=${skip}`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
                return err;
            });
    }
}