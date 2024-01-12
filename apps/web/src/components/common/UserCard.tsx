import { UserCardProps } from '~types/props/types.userCardProps'
import { Avatar, AvatarFallback, AvatarImage } from "~ui/Avatar"
import ArrowForward from '~assets/arrow-forward.svg?react'
import { GetRandomAvatarPath } from '~helpers/AvatarHelper';
import { useNavigate } from 'react-router-dom';
import { UserPageLocationProps } from '~types/props/types.userPageLocationProps';
import { NavigationProps } from '~types/props/types.navigationProps';
import { Button } from '~ui/Button';

const UserCard = ({ user }: UserCardProps) => {

    let navigate = useNavigate();
    let path = GetRandomAvatarPath();

    const handleArrowClick = (id: number) => {
        navigate(`/users/${id}`, { state: { id, path } as UserPageLocationProps });
    }

    const handleUnitClick = (id: number) => {
        navigate(`/units/${id}`, { state: { id } as NavigationProps });
    }

    return (
        <div className='rounded-lg my-3 px-2 py-6 shadow-md backdrop-blur-sm bg-pastel-beige-color/25 flex flex-row'>
            <div className='basis-1/3 m-auto w-16 flex justify-center'>
                <Avatar>
                    <AvatarImage className='w-20 h-20 shadow-md' src={path} />
                    <AvatarFallback>{Array.from(user.firstname)[0]}{Array.from(user.lastname)[0]}</AvatarFallback>
                </Avatar>
            </div>
            <div className='basis-2/3 text-pastel-dark-brown-color'>
                <h3 className='text-lg font-bold'>{`${user.firstname} ${user.lastname}`}</h3>
                <h2 className='text-sm mb-2 text-pastel-mud-color'>{user.position.name}</h2>
                <Button onClick={() => handleUnitClick(user.unit.id)} variant={"link"} className='text-sm pl-0'>{user.unit.name}</Button>
            </div>
            <div className='basis-1/6 m-auto flex justify-start text-pastel-dark-brown-color'>
                <ArrowForward onClick={() => handleArrowClick(user.id)} className='h-6 w-6 hover:translate-x-2 hover:scale-110 duration-150 fill-current' />
            </div>
        </div>
    )
}

export default UserCard