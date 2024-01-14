import UserCard from "~common/UserCard"
import { User } from "~types/types.user"

const UsersList = ({ users }: {users: User[] }) => {
    return (
        <div className="text-gray-900 overflow-y-auto bg-scroll h-full hide-scrollbar w-full mt-4">
            <div className="h-full flex flex-col px-5 items-center">
                <div className="w-3/4 pb-20 min-w-max">
                    {
                        users && users.length > 0 ?
                        (
                            users.map(user => (
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