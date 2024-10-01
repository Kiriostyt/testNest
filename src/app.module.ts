import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'vlad',
      password: '123',
      database: 'testbook',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    BookModule,
  ],
})
export class AppModule {}
