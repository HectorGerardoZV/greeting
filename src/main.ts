import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {config} from "dotenv";
config({path:".env"});
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = process.env.PORT;
  await app.listen(port,()=>{
    console.log(`Server running in ${port}`);
    
  });
}
bootstrap();
