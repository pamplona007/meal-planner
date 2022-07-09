import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Recipe } from "../../recipes/entities/recipe.entity";

@Entity()
export class User {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column({
        nullable: true
    })
    nickname: string

    @ManyToMany(() => Recipe)
    @JoinTable()
    recipes: Recipe[]
}
