import { GridProps } from "~types/props/types.gridProps"
import UserCard from "~common/UserCard"

const UsersList = ({ users }: GridProps) => {
    return (
        <div className="text-gray-900 overflow-y-auto bg-scroll h-full hide-scrollbar">
            <div className="h-full flex flex-col p-5 items-center">
                <div className="w-3/4 lg:w-1/2 pb-20">
                    {
                        users && users.length > 0 ?
                            (users.map(user => (
                                <UserCard key={user.id} user={user} />
                            ))
                            )
                            :
                            <p>No users </p>
                    }
                </div>
            </div>
        </div>
    )
}

export default UsersList