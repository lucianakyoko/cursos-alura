import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { User } from '../users/users.service';

interface DB {
  usuarios: User[];
}

@Injectable()
export class DatabaseService {
  public storage: DB;
  constructor() {
    try {
      const rawdata = fs.readFileSync('./storage.json', 'utf-8');
      this.storage = rawdata ? JSON.parse(rawdata) : {};
    } catch (error) {
      this.storage = {
        usuarios: [
          {
            userId: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
            email: 'john',
            senha: 'changeme',
          },
          {
            userId: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc002',
            email: 'maria',
            senha: 'guess',
          },
        ],
      };
      this.sync();
    }
  }
  sync() {
    const data = JSON.stringify(this.storage);
    fs.writeFileSync('./storage.json', data, { encoding: 'utf8' });
  }
}
