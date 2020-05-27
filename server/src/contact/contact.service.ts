import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactRepository } from './contact.repository';
import { CreateContactDto } from './dto/create-contact-dto';
import { Contact } from './contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactRepository)
    private contactRepository: ContactRepository,
  ) {}

  async getAllContacts(): Promise<Contact[]> {
    return this.contactRepository.find();
  }

  async createContact(createContactDto: CreateContactDto): Promise<Contact> {
    return this.contactRepository.createContact(createContactDto);
  }

  async getContactById(id): Promise<Contact> {
    const contact = await this.contactRepository.findOne(id);

    if (!contact) {
      throw new NotFoundException(`Contact with id "${id}" not found`);
    }

    return contact;
  }

  async deleteContactByID(id): Promise<number> {
    const result = await this.contactRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Contact with id "${id}" not found`);
    }

    return result.affected;
  }
}
