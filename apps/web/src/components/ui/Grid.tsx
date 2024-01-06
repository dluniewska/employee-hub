import { GridProps } from "~types/props/types.gridProps"
import UserCard from "~ui/UserCard"

const Grid = ({ users }: GridProps) => {
    return (
        <div className="text-gray-900">
            <div className="h-full flex flex-col p-5 items-center">
                <div className="w-1/2">
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