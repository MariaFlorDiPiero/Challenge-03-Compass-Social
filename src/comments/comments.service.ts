import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from '../prisma/prisma.service';
import { HttpStatus } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { Prisma, Comments } from '@prisma/client';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCommentDto: CreateCommentDto) {
    const comment = await this.prisma.comments.create({
      data: createCommentDto,
    });
    return comment;
  }

  findAll() {
    return this.prisma.comments.findMany();
  }

  async findOne(id: number) {
    const comment = await this.prisma.comments.findUnique({ where: { id } });

    if (!comment) {
      throw new NotFoundException(`Comentário com ID ${id} não encontrado`);
    }

    return comment;
  }

  async remove(id: number) {
    const comment = await this.prisma.comments.findUnique({ where: { id } });

    if (!comment) {
      throw new NotFoundException(`Comentário com ID ${id} não encontrado`);
    }

    await this.prisma.comments.delete({ where: { id } });

    return `Comentário com ID ${id} foi excluido com sucesso`;
  }
}
