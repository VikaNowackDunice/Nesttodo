import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { Todo } from './todo/todo.model';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        dialect: config.get('DB_DIALECT'),
        host: config.get('POSTGRE_HOST'),
        port: Number(config.get('POSTGRE_PORT')),
        username: config.get('POSTGRE_USERNAME'),
        password: config.get('POSTGRE_PASSWORD'),
        database: config.get('POSTGRE_DATABASE'),
        models: [Todo],
      }),
      inject: [ConfigService],
    }),
    TodoModule,
  ],
})
export class AppModule {}
