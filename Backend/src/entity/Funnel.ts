import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn } from "typeorm"


@Entity('funnel')
export class Funnel extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    funnelName: string


    @CreateDateColumn()
    createdAt: Date

}
