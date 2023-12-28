import { UserCardProps } from '../../types/props/types.userCardProps'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ArrowForward from '../../assets/arrow-forward.svg?react'
import { GetRandomAvatarPath } from '@/helpers/AvatarHelper';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ user }: UserCardProps) => {

    let navigate = useNavigate();
    let path = GetRandomAvatarPath();

    const handleArrowClick = (id: number) => {
        navigate(`/users/${id}`);
    }

    return (
        <div className='rounded my-3 px-2 py-6 shadow-lg backdrop-blur-sm bg-white/60 flex flex-row'>
            <div className='basis-1/6 m-auto flex justify-center'>
                <Avatar>
                    <AvatarImage src={path} />
                    <AvatarFallback>{Array.from(user.firstname)[0]}{Array.from(user.lastname)[0]}</AvatarFallback>
                </Avatar>
            </div>
            <div className='basis-4/6'>
                <h3 className='text-xl mb-1 font-bold'>{`${user.firstname} ${user.lastname}`}</h3>
                <h2 className='text-lg mb-3'>{user.position.name}</h2>
                <h2 className='text-sm'>{user.unit.name}</h2>
            </div>
            <div className='basis-1/6 m-auto flex align-middle justify-center'>
                <ArrowForward onClick={() => handleArrowClick(user.id)} className='hover:translate-x-2 hover:scale-110 duration-150' />
            </div>
        </div>
    )
}

export default UserCard