import { beforeEach, describe, expect, it, jest } from '@jest/globals'
import crypto from 'node:crypto'
import fs from 'node:fs/promises'
import Service from '../src/service.js'

describe('Service Test Suite', () => {
    let _service
    const filename = 'testfile.ndjson'
    const MOCKED_HASHED_PASSWORD = 'hashed-password'

    describe("#create - spies", () => {
        beforeEach(() => {
            jest.spyOn(crypto, 'createHash').mockReturnValue({
                update: jest.fn().mockReturnThis(),
                digest: jest.fn().mockReturnValue(MOCKED_HASHED_PASSWORD)
            })
            jest.spyOn(fs, 'appendFile').mockResolvedValue()
            _service = new Service({
                filename
            })
        })

        it('should call crypto.createHash with the correct arguments', async () => {
            // Arrange
            const expectedCreatedAt = new Date().toISOString()
            jest.spyOn(Date.prototype, 'toISOString').mockReturnValue(expectedCreatedAt)
            const input = { username: 'joao', password: '123456', createdAt: expectedCreatedAt }
            // Act
            await _service.create(input)

            // Assert
            expect(crypto.createHash).toHaveBeenCalledWith('sha256')
            expect(crypto.createHash().update).toHaveBeenCalledWith(input.password)
            expect(crypto.createHash().digest).toHaveBeenCalledWith('hex')

            const expected = JSON.stringify({
                ...input,
                createdAt: expectedCreatedAt,
                password: MOCKED_HASHED_PASSWORD
            }).concat('\n')
            expect(fs.appendFile).toHaveBeenCalledWith(filename, expected)
        })
    })

})
