import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingsService {

    public async getGreetings(): Promise<string[]> {
        return await ["Hello", "Hiii", "eyyy there"];
    }
}
