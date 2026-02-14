import { describe, expect, it, jest } from '@jest/globals'
import Person from '../src/person.js'

describe('#Person Suite', () => {
  describe('#validate', () => {

    it('should throw an error if name is not provided', () => {
      const mockInvalidPerson = { cpf: '123.456.789-00', name: '' }
      expect(() => Person.validate(mockInvalidPerson)).toThrow(new Error('Name is required'))
    })
    it('should throw an error if cpf is not provided', () => {
      const mockInvalidPerson = { name: 'John', cpf: '' }
      expect(() => Person.validate(mockInvalidPerson)).toThrow(new Error('CPF is required'))
    })
  })

  describe('#format', () => {
    it('should format the name and last name', () => {
      // AAA

      // Arrange
      const mockPerson = { name: 'John Doe', cpf: '123.456.789-00' }

      // Act
      const result = Person.format(mockPerson)

      // Assert
      expect(result).toStrictEqual({ name: 'John', lastName: 'Doe', cpf: '12345678900' })
    })
  })

  describe('#savePerson', () => {
    it('should not throw an error if the person is valid', () => {
      // Arrange 
      const mockPerson = { name: 'John', lastName: 'Doe', cpf: '12345678900' }

      // Act
      expect(() => Person.savePerson(mockPerson)).not.toThrow()
    })

    it('should throw an error if the person is invalid', () => {
      // Arrange 
      const mockPerson = { name: 'John', lastName: 'Doe', cpf: '' }

      // Act
      expect(() => Person.savePerson(mockPerson)).toThrow(new Error('cannot save invalid person: {"name":"John","lastName":"Doe","cpf":""}'))
    })
  })

  describe('#process', () => {
    it('should return ok if the person is valid', () => {
      // Arrange 
      const mockPerson = { name: 'John Doe', cpf: '12345678900' }
      const mockFormattedPerson = { name: 'John', lastName: 'Doe', cpf: '12345678900' }
      jest.spyOn(Person, 'validate').mockReturnValue(true)
      jest.spyOn(Person, 'format').mockReturnValue(mockFormattedPerson)
      jest.spyOn(Person, 'savePerson').mockReturnValue('ok')

      // Act
      const result = Person.process(mockPerson)

      // Assert
      expect(result).toBe('ok')
    })
  })
})