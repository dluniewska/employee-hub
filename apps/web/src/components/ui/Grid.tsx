import { GridProps } from "../../types/props/types.gridProps"
import Card from "./Card"

const Grid = ({ users }: GridProps) => {
    return (
        <div className="text-gray-900">
            <h1 className="font-medium text-lg p-8">Pracownicy</h1>
            <div className="h-full flex flex-col p-5 items-center">
                <div className="w-2/3">
                    {
                        users.map(user => (
                            <Card key={user.id} user={user} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Grid