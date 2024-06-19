import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn } from "typeorm"


@Entity('role')
export class Role extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    userRole: string

    @Column({
        unique: true
    })
    @CreateDateColumn()
    createdAt: Date
}
