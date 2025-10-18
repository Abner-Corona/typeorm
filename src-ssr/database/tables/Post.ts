import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity(process.env.NODE_ENV === "production" ? { name: "Post" } : {})
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;
}
