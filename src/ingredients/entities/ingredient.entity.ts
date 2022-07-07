import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Ingredient {
    @PrimaryColumn()
    id: string

}
