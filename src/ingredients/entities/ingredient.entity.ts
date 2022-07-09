import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Ingredient {
    @PrimaryColumn()
    id: string

    @Column()
    name: string
}
