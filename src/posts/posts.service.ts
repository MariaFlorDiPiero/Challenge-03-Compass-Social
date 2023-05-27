import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from '../prisma/prisma.service';
import { HttpStatus } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { Prisma, Post } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const { username, post_date, likes, description } = createPostDto;

    const createdPost = await this.prisma.post.create({
      data: {
        username,
        description,
        post_date,
        likes,
      },
    });

    return createdPost;
  }

  findAll() {
    return this.prisma.post.findMany();
  }

  async findOne(id: number): Promise<Post> {
    const post = await this.prisma.post.findUnique({
      where: { id },
    });

    if (!post) {
      throw new NotFoundException(`Post com ID ${id} não encontrado`);
    }

    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
    const { username, post_date, likes, description } = updatePostDto;

    const updatedPost = await this.prisma.post.update({
      where: { id },
      data: {
        username,
        description,
        post_date,
        likes,
      },
    });

    if (!updatedPost) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    return updatedPost;
  }

  async remove(id: number): Promise<void> {
    const post = await this.prisma.post.findUnique({ where: { id } });

    if (!post) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    await this.prisma.post.delete({ where: { id } });
  }
}
