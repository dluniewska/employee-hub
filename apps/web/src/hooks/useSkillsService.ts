import useAxios from "~hooks/useAxios";
import { Skill } from "~types/types.skill";

const URN = "/skills";

const useSkillsService = () => {
    const axios = useAxios()

    async function getSkills(take: number, skip: number): Promise<Skill[]> {

        return await axios.get(`${URN}?take=${take}&skip=${skip}`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err);
                return err;
            });
    }

    return { getSkills }
}

export default useSkillsService;