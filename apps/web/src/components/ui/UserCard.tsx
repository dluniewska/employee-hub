import { UserCardProps } from '../../types/props/types.userCardProps'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ArrowForward from '../../assets/arrow-forward.svg?react'
import { GetRandomAvatarPath } from '@/helpers/AvatarHelper';
import { useNavigate } from 'react-router-dom';
import { UserPageLocationProps } from '@/types/props/types.userPageLocationProps';

const UserCard = ({ user }: UserCardProps) => {

    let navigate = useNavigate();
    let path = GetRandomAvatarPath();

    const handleArrowClick = (id: number) => {
        navigate(`/users/${id}`, { state: { id, path } as UserPageLocationProps });
    }

    return (
        <div className='rounded-lg my-3 px-2 py-6 shadow-md backdrop-blur-sm bg-pastel-beige-color/25 flex flex-row'>
            <div className='basis-1/3 m-auto w-16 flex justify-center'>
                <Avatar>
                    <AvatarImage className='w-24 h-24 shadow-md' src={path} />
                    <AvatarFallback>{Array.from(user.firstname)[0]}{Array.from(user.lastname)[0]}</AvatarFallback>
                </Avatar>
            </div>
            <div className='basis-2/3 text-pastel-dark-brown-color'>
                <h3 className='text-xl mb-1 font-bold'>{`${user.firstname} ${user.lastname}`}</h3>
                <h2 className='text-lg mb-3'>{user.position.name}</h2>
                <h2 className='text-sm'>{user.unit.name}</h2>
            </div>
            <div className='basis-1/6 m-auto flex justify-start text-pastel-dark-brown-color'>
                <ArrowForward onClick={() => handleArrowClick(user.id)} className='hover:translate-x-2 hover:scale-110 duration-150 fill-current' />
            </div>
        </div>
    )
}

export default UserCard