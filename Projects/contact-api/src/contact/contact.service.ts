import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  private contacts: Array<{
    id: number;
    name: string;
    email: string;
    message: string;
  }> = [];

  create(dto: CreateContactDto) {
    console.log('Creating contact:', dto);
    const item = { id: Date.now(), ...dto };
    this.contacts.push(item);
    return item;
  }

  findAll() {
    return this.contacts;
  }

  findOne(id: number) {
    return this.contacts.find((contact) => contact.id === id);
  }
}
