import { Test, TestingModule } from '@nestjs/testing';
import { ContactService } from './contact.service';
import { ContactRepository } from './contact.repository';
import { NotFoundException } from '@nestjs/common';

const mockContactRepository = () => ({
  findOne: jest.fn(),
  delete: jest.fn(),
});

describe('ContactService', () => {
  let contactService;
  let contactRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ContactService,
        { provide: ContactRepository, useFactory: mockContactRepository },
      ],
    }).compile();

    contactService = await module.get<ContactService>(ContactService);
    contactRepository = await module.get<ContactRepository>(ContactRepository);
  });

  it('should be defined', () => {
    expect(contactService).toBeDefined();
  });

  it('should be defined', () => {
    expect(contactService.getAllContacts).toBeDefined();
  });

  it('should be defined', () => {
    expect(contactService.createContact).toBeDefined();
  });

  describe('getContactById', () => {
    it('if null should return NotFoundException', async () => {
      contactRepository.findOne.mockResolvedValue(null);
      expect(contactRepository.findOne).not.toHaveBeenCalled();

      expect(contactService.getContactById(1)).rejects.toThrow(
        NotFoundException,
      );
      expect(contactRepository.findOne).toHaveBeenCalled();
    });

    it('if contact exists should return Contact', async () => {
      contactRepository.findOne.mockResolvedValue('some contact');
      expect(contactRepository.findOne).not.toHaveBeenCalled();

      const result = await contactService.getContactById(1);

      expect(result).toEqual('some contact');
    });
  });

  describe('deleteContactByID', () => {
    it('if contact is deleted should call deleteContactByID()', async () => {
      contactRepository.delete.mockResolvedValue({ affected: 1 });
      expect(contactRepository.delete).not.toHaveBeenCalled();

      await contactService.deleteContactByID(2);
      expect(contactRepository.delete).toHaveBeenCalled();
    });

    it('if null should return NotFoundException', async () => {
      contactRepository.delete.mockResolvedValue({ affected: 0 });
      expect(contactService.deleteContactByID(1)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
