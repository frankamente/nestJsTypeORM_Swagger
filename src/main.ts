import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	const options = new DocumentBuilder()
		.setTitle('NestJS TypeORM example')
		.setDescription('The photo API description')
		.setVersion('1.0')
		.addTag('photos')
		.addBearerAuth()
		.build();
	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('api', app, document);
	await app.listen(3001);
}
bootstrap();
