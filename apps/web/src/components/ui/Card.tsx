import { CardProps } from '../../types/props/types.cardProps'

const Card = ({ user } : CardProps) => {
  return (
    <div className='rounded my-3 p-5 shadow-lg backdrop-blur-sm bg-white/25'>
        <h3 className='text-xl mb-2'>{`${user.firstname} ${user.lastname}`}</h3>
        <h2 className='text-lg'>{user.position.name}</h2>
        <h2 className='text-sm'>{user.unit.name}</h2>
    </div>
  )
}

export default Card