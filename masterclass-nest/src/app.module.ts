/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './databases/prisma.service';
import { PrismaRocketMembersRepository } from './repositores/prisma/prisma-rocket-members-repository';
import { RocketMembersRepository } from './repositores/rocket-members-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: RocketMembersRepository,
      useClass: PrismaRocketMembersRepository,
    },
  ],
})
export class AppModule {}
