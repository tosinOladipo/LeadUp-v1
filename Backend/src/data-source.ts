import "reflect-metadata"
import { DataSource } from "typeorm"
import { Company } from "./entity/Company"
import { User } from "./entity/User"
import { Role } from "./entity/Role"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "dpg-cpn1getds78s73ap42m0-a.oregon-postgres.render.com",
    port: 5432,
    username: "root",
    password: "1QTy5gfzgVrtO1S7FaZxw3DKeFItX8bw",
    database: "lead_up",
    ssl: true,
    synchronize: true,
    logging: false,
    entities: [
        Company,
        User,
        Role
    ],
    migrations: [],
    subscribers: [],
})
