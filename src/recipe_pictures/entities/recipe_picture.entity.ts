import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Recipe } from "../../recipes/entities/recipe.entity";

@Entity()
export class RecipePicture {
    @PrimaryColumn()
    id: string

    @ManyToOne(() => Recipe)
    recipe: Recipe

    @Column()
    url: string
}
