import { Controller, Get, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('admin/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return [
      {
        id: 1,
        name: 'test',
        slug: 'test',
        photo: 'test',
        image: 'test',
        is_featured: true,
        is_home: true,
        is_menu: true,
        status: 1,
      },
    ];
  }
}
