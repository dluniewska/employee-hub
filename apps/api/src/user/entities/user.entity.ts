import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Position } from '../../database/typeorm/entities/position.entity'
import { Unit } from '../../database/typeorm/entities/unit.entity';
import { Experience } from '../../database/typeorm/entities/experience.entity';
import { Schedule } from '../../database/typeorm/entities/schedule.entity';
import { SkillsOnUsers } from '../../database/typeorm/entities/skills-on-users.entity';

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
