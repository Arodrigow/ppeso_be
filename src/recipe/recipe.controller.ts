import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { UserMatchGuard } from '@/auth/user-auth.guard';
import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { RecipeService } from './recipe.service';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Recipe')
@ApiBearerAuth()
@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @UseGuards(JwtAuthGuard, UserMatchGuard)
  @Post(':userId')
  @ApiOperation({ summary: 'Criar receita do usuario' })
  @ApiParam({ name: 'userId', type: Number, description: 'ID do usuario' })
  @ApiBody({
    schema: {
      type: 'object',
      required: ['title', 'description', 'recipe'],
      properties: {
        title: { type: 'string', example: 'Panqueca de banana' },
        description: { type: 'string', example: 'Cafe da manha rico em proteina' },
        recipe: {
          type: 'string',
          example: '2 ovos, 1 banana, 30g aveia. Misturar e grelhar por 3 minutos.',
        },
        calorias_kcal: { type: 'number', example: 350 },
        carboidratos_g: { type: 'number', example: 42.3 },
        proteinas_g: { type: 'number', example: 18.5 },
        gorduras_g: { type: 'number', example: 10.2 },
        fibras_g: { type: 'number', example: 5.1 },
        sodio_mg: { type: 'number', example: 120 },
      },
    },
  })
  async createRecipe(
    @Param('userId') userId: string,
    @Body() data: Prisma.RecipeCreateWithoutUserInput,
  ) {
    return await this.recipeService.createRecipe(Number(userId), data);
  }

  @UseGuards(JwtAuthGuard, UserMatchGuard)
  @Get(':userId')
  @ApiOperation({ summary: 'Listar receitas do usuario' })
  @ApiParam({ name: 'userId', type: Number, description: 'ID do usuario' })
  async getRecipesByUserId(@Param('userId') userId: string) {
    return await this.recipeService.getRecipesByUserId(Number(userId));
  }

  @UseGuards(JwtAuthGuard, UserMatchGuard)
  @Delete(':userId/:recipeId')
  @ApiOperation({ summary: 'Excluir receita do usuario' })
  @ApiParam({ name: 'userId', type: Number, description: 'ID do usuario' })
  @ApiParam({ name: 'recipeId', type: Number, description: 'ID da receita' })
  async deleteRecipe(@Param('userId') userId: string, @Param('recipeId') recipeId: string) {
    return await this.recipeService.deleteRecipe(Number(userId), Number(recipeId));
  }
}
