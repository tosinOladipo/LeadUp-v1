import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, BeforeInsert } from "typeorm"
import bcrypt from "bcryptjs"


@Entity()
export class Person extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({
        unique: true
    })
    email: string

    @Column({
        unique: true
    })
    phoneNumber: string

    @Column({
        unique: true
    })
    password: string

    //Encrypt password before saving to DB
    @BeforeInsert()
    async beforeInsert() {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
    }

    @Column({
        default: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
    })
    profileImg: string

}
