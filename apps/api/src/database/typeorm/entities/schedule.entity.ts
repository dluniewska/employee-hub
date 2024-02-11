import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';

export enum Status {
  ONSITE = 'ONSITE',
  REMOTE = 'REMOTE',
  DELEGATION = 'DELEGATION',
  ABSENT = 'ABSENT',
}

@Entity('Schedules')
export class Schedule {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({
    type: 'enum',
    enum: Status,
  })
  status: Status;

  @Column()
  date: Date;

  @ManyToOne(() => User, user => user.schedules, { onDelete: 'CASCADE' })
  user: User;

  @Column()
  userId: number;

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

  constructor(schedule: Partial<Schedule>) {
    Object.assign(this, schedule);
  }
}
