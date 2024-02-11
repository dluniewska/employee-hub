import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Position } from './position.entity'
import { Unit } from './unit.entity';
import { Experience } from './experience.entity';
import { Schedule } from './schedule.entity';
import { SkillsOnUsers } from './skills-on-users.entity';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 75 })
  email: string;

  @Column({ length: 75 })
  firstname: string;

  @Column({ length: 75 })
  lastname: string;

  @Column({ length: 20, nullable: true })
  phone: string;

  @Column({ length: 15, nullable: true })
  room: string;

  @ManyToOne(() => Position, position => position.users)
  position: Position;

  @Column()
  positionId: number;

  @ManyToOne(() => Unit, unit => unit.users)
  unit: Unit;

  @Column()
  unitId: number;

  @Column({ length: 250, nullable: true })
  description: string;

  @OneToMany(() => Experience, experience => experience.user)
  experiences: Experience[];

  @OneToMany(() => Schedule, schedule => schedule.user)
  schedules: Schedule[];

  @OneToMany(() => SkillsOnUsers, skillsOnUsers => skillsOnUsers.user)
  skills: SkillsOnUsers[];

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

  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }
}
