import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { SkillsOnUsers } from './skills-on-users.entity';

@Entity('Skills')
export class Skill {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ unique: true, length: 100 })
  name: string;

  @OneToMany(() => SkillsOnUsers, skillsOnUsers => skillsOnUsers.skill)
  users: SkillsOnUsers[];

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  createdBy: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  updatedBy: string;

  @Column({ type: 'timestamp', nullable: true })
  deletedAt: Date;

  @Column({ nullable: true })
  deletedBy: string;

  @Column({ default: false })
  deleted: boolean;

  constructor(skill: Partial<Skill>) {
    Object.assign(this, skill);
  }
}
