import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('Units')
export class Unit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: true, unique: true })
  name: string;

  @Column({ nullable: true })
  parentId: number;

  @ManyToOne(() => Unit, unit => unit.units, { onDelete: 'SET NULL' })
  parent: Unit;

  @OneToMany(() => Unit, unit => unit.parent)
  units: Unit[];

  @OneToMany(() => User, user => user.unit)
  users: User[];

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

  constructor(unit: Partial<Unit>) {
    Object.assign(this, unit);
  }
}
