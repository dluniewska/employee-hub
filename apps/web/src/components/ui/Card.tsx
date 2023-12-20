import { CardProps } from '../../types/props/types.cardProps'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ArrowForward from '../../assets/arrow-forward.svg?react'
import { GetRandomAvatarPath } from '@/helpers/AvatarHelper';

const Card = ({ user }: CardProps) => {
    let path = GetRandomAvatarPath();
    return (
        <div className='rounded my-3 px-2 py-6 shadow-lg backdrop-blur-sm bg-white/25 flex flex-row'>
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
                <ArrowForward />
            </div>
        </div>
    )
}

export default Card