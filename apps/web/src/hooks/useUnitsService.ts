import useAxios from "~hooks/useAxios";
import { Unit } from "~/types/types.unit";

const URN = "/units";

const useUnitsService = () => {
    const axios = useAxios()

    async function getUnits(take: number, skip: number): Promise<Unit[]> {

        return await axios.get(`${URN}?take=${take}&skip=${skip}`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
                return err;
            });
    }

    async function getUnit(id: number): Promise<Unit> {

        return await axios.get(`${URN}/${id}`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
                return err;
            });
    }

    return { getUnits, getUnit }
}

export default useUnitsService;