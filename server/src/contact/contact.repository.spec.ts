import { ContactRepository } from './contact.repository';
import { Test } from '@nestjs/testing';
import { InternalServerErrorException } from '@nestjs/common';

const mockCreateContactDto = {
  name: 'Laila',
  date_of_birth: '1996-10-15T00:05:32.000Z',
  genre: 'FEMALE',
  age: '27',
  id: 6,
};

describe('ContactRepository', () => {
  let contactRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ContactRepository],
    }).compile();
    contactRepository = await module.get<ContactRepository>(ContactRepository);
  });

  describe('createContact', () => {
    let save;

    beforeEach(() => {
      save = jest.fn();
      contactRepository.create = jest.fn().mockReturnValue({ save });
    });

    it('if save is true it should return result', () => {
      save.mockResolvedValue(true);
      expect(
        contactRepository.createContact(mockCreateContactDto),
      ).resolves.not.toThrow();
    });

    it('if save return null it should throw InternalServerErrorException()', () => {
      save.mockResolvedValue(null);
      expect(
        contactRepository.createContact(mockCreateContactDto),
      ).rejects.toThrow(InternalServerErrorException);
    });
  });
});
