import { Controller, Get } from '@nestjs/common';
import { GreetingsService } from './greetings.service';
import { Logger } from '@nestjs/common';

@Controller('greetings')
export class GreetingsController {
    private logger = new Logger();
    constructor(private greetingsService: GreetingsService) { }
    @Get()
    async getGreetings(): Promise<string[]> {
        this.logger.log('Request to GET/greeting');
        return await this.greetingsService.getGreetings();
    }
}
