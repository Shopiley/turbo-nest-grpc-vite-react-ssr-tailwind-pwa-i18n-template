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
      type:'postgres',
      // port: 3306,
      host: 'dpg-cm12u021hbls73adboq0-a.oregon-postgres.render.com',
      username: 'silmsteam',
      password: 'hkjW4V9LJ3DSUNxUHMviYlhZ5cys66WS',
      database: 'hms',
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
