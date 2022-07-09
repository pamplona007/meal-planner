import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Ingredient } from "../../ingredients/entities/ingredient.entity";
import { RecipePicture } from "../../recipe_pictures/entities/recipe_picture.entity";
import { User } from "../../users/entities/user.entity";

@Entity()
export class Recipe {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column({
        nullable: true
    })
    description: string

    @OneToMany(() => RecipePicture, (RecipePicture) => RecipePicture.recipe)
    pictures: RecipePicture[]

    @Column('text')
    instructions: string

    @ManyToMany(() => Ingredient)
    @JoinTable()
    ingredients: Ingredient[]

    @ManyToOne(() => User)
    author: User
}
