import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn } from "typeorm"


@Entity('company')
export class Company extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    companyName: string

    @Column({
        unique: true
    })
    companyEmail: string

    @Column({
        unique: true
    })
    companyPhoneNumber: string

    @Column()
    companyAddress: string

    @Column({
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQ1b4LdoY5awRvFz5moDGlXwBKOtInXty0w&usqp=CAU"
    })
    companyLogo: string

    @CreateDateColumn()
    createdAt: Date

}
