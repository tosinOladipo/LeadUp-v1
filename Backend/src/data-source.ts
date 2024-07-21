import "reflect-metadata"
import { DataSource } from "typeorm"
import { Company } from "./entity/Company"
import { User } from "./entity/User"
import { Role } from "./entity/Role"
import { Funnel } from "./entity/Funnel"
import { Campaign } from "./entity/Campaign"
import { Lead } from "./entity/Lead"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "aws-0-eu-west-2.pooler.supabase.com",
    port: 6543,
    username: "postgres.pfbsipoftboyzokvhluq",
    password: "LeadGen100%",
    database: "postgres",
    ssl: true,
    synchronize: true,
    logging: false,
    entities: [
        Company,
        User,
        Role,
        Funnel,
        Campaign,
        Lead
    ],
    migrations: [],
    subscribers: [],
})
