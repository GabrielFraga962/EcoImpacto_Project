import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PontosModule } from './pontos/pontos.module';
import { RegistrosModule } from './registros/registros.module';
import { RelatorioModule } from './relatorio/relatorio.module';

import { ServeStaticModule } from '@nestjs/serve-static';

import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(__dirname, '.env'),
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'public'),
    }),

    // Conexão com o Banco de Dados
    MongooseModule.forRoot(process.env.MONGODB_URI || ''),

    // Módulos da nossa aplicação
    PontosModule,
    RegistrosModule,
    RelatorioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }