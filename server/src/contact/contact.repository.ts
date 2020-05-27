import { EntityRepository, Repository } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';
import { Contact } from './contact.entity';
import { CreateContactDto } from './dto/create-contact-dto';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@EntityRepository(Contact)
export class ContactRepository extends Repository<Contact> {
  async createContact(createContactDto: CreateContactDto): Promise<Contact> {
    const { name, date_of_birth, genre, age } = createContactDto;

    const contact = this.create();
    contact.name = name;
    contact.date_of_birth = date_of_birth;
    contact.genre = genre;
    contact.age = age;

    const result = await contact.save();

    if (!result) {
      throw new InternalServerErrorException();
    }

    return result;
  }
}
