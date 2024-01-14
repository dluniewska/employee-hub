import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GetRandomAvatarPath } from "~/helpers/AvatarHelper";
import { UserPageLocationProps } from "~/types/props/types.userPageLocationProps";
import useUnitsService from "~hooks/useUnitsService";
import { Unit } from "~types/types.unit";
import { User } from "~types/types.user";
import { Button } from "~ui/Button";

const SingleUnitPage = () => {
    const location = useLocation().state as { id: number }
    const [unit, setUnit] = useState<Unit>();
    const { getUnit } = useUnitsService();
    const navigate = useNavigate()
    

    useEffect(() => {
        getUnit(location?.id).then((res) => {
            setUnit(res)
        })
    }, [location.id])


    const handleUnitClick = () => {
        navigate(`/units/${unit?.parent.id}`, { state: { id: unit?.parent.id } as { id: number }, replace: true });
      }

    return (
        <div className="flex flex-col overflow-y-auto bg-scroll h-screen p-8">

            <div className="border-b border-gray-300 my-4 p-2">
                <div className="text-lg font-bold my-2">{unit?.name}</div>
                {
                    unit?.parent && 
                    <div>
                        <span className="text-sm font-bold">Jednostka nadrzędna:</span>
                        <Button variant={"link"} onClick={() => handleUnitClick()}>{unit.parent.name}</Button>
                    </div>
                }
            </div>

            <div className="flex justify-evenly mt-10 w-11/12 max-h-max">
                <div className="border py-5 px-8 w-2/5">
                    {unit && <InnerUnitsList units={unit.units} />}
                </div>
                <div className="border py-5 px-8 w-2/5">
                    {unit && <InnerUsersList users={unit.users} />}
                </div>
            </div>
        </div>
    )
}

const InnerUnitsList = ({ units }: { units: Unit[] }) => {
    const navigate = useNavigate();

    function handleUnitClick(id: number) {
        navigate(`/units/${id}`, { state: { id } as { id: number }, replace: true });
    }

    return (
        <div>
            <div className="text-lg py-3">Podległe zespoły</div>
            <div>
                <div>
                    {units && units.length > 0 && units.map((obj) => (
                        <Button key={obj.id} onClick={() => handleUnitClick(obj.id)} variant="link">{obj.name}</Button>
                    ))}
                </div>
            </div>
        </div>
    )
}

const InnerUsersList = ({ users }: { users: User[] }) => {
    const navigate = useNavigate();

    function handleUserClick(id: number) {
        let path = GetRandomAvatarPath();
        navigate(`/users/${id}`, { state: { id, path } as UserPageLocationProps, replace: true})
    }

    return (
        <div>
            <div className="text-lg py-3">Pracownicy</div>
            <div>
                <div>
                    {users && users.length > 0 && users.map((obj) => (
                        <Button key={obj.id} onClick={() => handleUserClick(obj.id)} variant="link"><div><span>{obj.firstname}</span> <span>{obj.lastname}</span></div></Button>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default SingleUnitPage