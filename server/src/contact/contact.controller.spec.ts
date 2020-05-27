import { Test, TestingModule } from '@nestjs/testing';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';

const mockContactService = () => ({});

describe('Contact Controller', () => {
  let controller: ContactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactController],
      providers: [{ provide: ContactService, useFactory: mockContactService }],
    }).compile();

    controller = module.get<ContactController>(ContactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('createContact should be defined', () => {
    expect(controller.createContact).toBeDefined();
  });

  it('deleteContactByID should be defined', () => {
    expect(controller.deleteContactByID).toBeDefined();
  });

  it('getAllContacts should be defined', () => {
    expect(controller.getAllContacts).toBeDefined();
  });

  it('getContactById should be defined', () => {
    expect(controller.getContactById).toBeDefined();
  });
});
