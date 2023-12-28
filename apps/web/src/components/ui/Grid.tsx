import { GridProps } from "../../types/props/types.gridProps"
import UserCard from "./UserCard"

const Grid = ({ users }: GridProps) => {
    return (
        <div className="text-gray-900">
            <h1 className="font-bold text-4xl p-2 text-center mt-10 text-gray-100">Pracownicy</h1>
            <div className="h-full flex flex-col p-5 items-center">
                <div className="w-2/3">
                    {
                        users.map(user => (
                            <UserCard key={user.id} user={user} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Grid