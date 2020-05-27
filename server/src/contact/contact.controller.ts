import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  ValidationPipe,
  UsePipes,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact-dto';
import { Contact } from './contact.entity';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Get('/')
  getAllContacts(): Promise<Contact[]> {
    return this.contactService.getAllContacts();
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  createContact(@Body() createContactDto: CreateContactDto): Promise<Contact> {
    return this.contactService.createContact(createContactDto);
  }

  @Get('/:id')
  getContactById(@Param('id', ParseIntPipe) id: number): Promise<Contact> {
    return this.contactService.getContactById(id);
  }

  @Delete('/:id')
  deleteContactByID(@Param('id', ParseIntPipe) id: number): Promise<number> {
    return this.contactService.deleteContactByID(id);
  }
}
