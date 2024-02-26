/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type:'mysql',
      port: 3306,
      host: 'localhost',
      username: 'root',
      password: 'mysqlroot',
      database: 'hms'	,
      synchronize: true,
      autoLoadEntities: true,
      ssl: {
        rejectUnauthorized: false, // Reject unauthorized SSL connections
      },
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
