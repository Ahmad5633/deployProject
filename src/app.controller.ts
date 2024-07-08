import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('example')
@Controller('example')
export class AppController {
  @Get()
  @ApiOperation({ summary: 'Get example' })
  getExample(): string {
    return 'Hello World!';
  }
}
