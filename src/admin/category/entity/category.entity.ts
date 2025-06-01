import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column({ nullable: true })
  photo: string;

  @Column({ nullable: true })
  image: string;

  @Column({ default: false })
  is_featured: boolean;

  @Column({ default: false })
  is_home: boolean;

  @Column({ default: false })
  is_menu: boolean;

  @Column({ default: 1 })
  status: number;
}
