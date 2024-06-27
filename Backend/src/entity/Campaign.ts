import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn } from "typeorm"


@Entity('camapaign')
export class Campaign extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    campaignName: string

    @Column()
    campaignChannel: string

    @Column()
    campaignOwner: string

    @Column()
    campaignURL: string

    @CreateDateColumn()
    createdAt: Date

}