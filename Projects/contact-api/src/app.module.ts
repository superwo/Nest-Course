import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ContactModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
