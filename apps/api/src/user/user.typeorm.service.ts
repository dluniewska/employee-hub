import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { EntityManager, Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TypeOrmUsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly entityManager: EntityManager
    ) {}
    
    async create(createUserDto: CreateUserDto) {
        const user = new User(createUserDto);
        await this.entityManager.save(user);
        return user;
    }

    async findAll({ skip, take }: { skip: number, take: number }) {
        return await this.userRepository.find({
            skip,
            take
        });
    }

    async findOne(id: number) {
        return await this.userRepository.findOneBy({id});
    }

    async getUsersBySkill({ skills, skip, take }: {skills: string[], skip: number, take: number}) {

    }

    async update({ id, updateUserDto }: {id: number, updateUserDto: UpdateUserDto}) {
        const user = await this.userRepository.findOneBy({id});
        Object.assign(user, updateUserDto);
        await this.entityManager.save(user);
    }

    async delete(id: number) {
        const user = await this.userRepository.findOneBy({id});
        user.deleted = true;
        user.deletedAt = new Date();
        await this.entityManager.save(user);
    }
}