import { Entity, Column, CreateDateColumn } from "typeorm"
import { Person } from "./utils/Person"

@Entity('users')
export class User extends Person {

    @Column()
    role: string

    @Column()
    userId: string

    @CreateDateColumn()
    createdAt: Date

}
