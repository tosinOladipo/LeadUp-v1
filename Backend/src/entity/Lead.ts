import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm"


@Entity('leads')
export class Lead extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    fullName: string

    @Column({
        unique: true
    })
    email: string

    @Column({
        unique: true
    })
    phoneNumber: string

    @Column()
    ownerId: string

    @Column()
    campaignId: string

    @Column()
    managerId: string

    @Column({
        default: "New Lead"
    })
    leadStage: string

    @Column({
        default: "Lead from campaign"
    })
    feedback: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}
