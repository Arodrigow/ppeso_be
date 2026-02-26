import { PrismaService } from '@/prisma/prisma.service';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class RecipeService {
  constructor(private readonly prismaService: PrismaService) {}

  async createRecipe(userId: number, data: Prisma.RecipeCreateWithoutUserInput) {
    try {
      return await this.prismaService.recipe.create({
        data: {
          ...data,
          user: {
            connect: { id: userId },
          },
        },
      });
    } catch (error) {
      throw new BadRequestException('Erro ao criar receita', { cause: error });
    }
  }

  async getRecipesByUserId(userId: number) {
    try {
      return await this.prismaService.recipe.findMany({
        where: { userId },
        orderBy: { created_at: 'desc' },
      });
    } catch (error) {
      throw new BadRequestException('Erro ao listar receitas', { cause: error });
    }
  }

  async deleteRecipe(userId: number, recipeId: number) {
    try {
      const recipe = await this.prismaService.recipe.findFirst({
        where: { id: recipeId, userId },
        select: { id: true },
      });

      if (!recipe) {
        throw new NotFoundException('Receita nao encontrada para este usuario');
      }

      return await this.prismaService.recipe.delete({
        where: { id: recipeId },
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Erro ao deletar receita', { cause: error });
    }
  }
}
