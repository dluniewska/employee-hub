import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Skill } from './skill.entity';
import { User } from './user.entity';

@Entity('SkillsOnUsers')
export class SkillsOnUsers {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @ManyToOne(() => Skill, (skill) => skill.users)
  skill: Skill;

  @Column('bigint')
  skillId: number;

  @ManyToOne(() => User, (user) => user.skills)
  user: User;

  @PrimaryColumn()
  userId: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  createdBy: string;
}
