import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'all items';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Created item: ${createItemDto.name}`;
  }

  @Put()
  update(): string {
    return 'update item';
  }

  @Delete()
  delete(): string {
    return 'delete item';
  }

  @Delete(':id')
  deleteOne(@Param('id') id): string {
    return `Deleted item ${id}`;
  }
}
