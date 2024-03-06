import { InvalidUuidError, Uuid } from "../uuid.vo"

describe('Uuid Unit Tests', () => {
    const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate')

    test('should throw error when uuid is invalid', () => {
        expect(() => {
            new Uuid('invalid-uuid')
        }).toThrow(new InvalidUuidError())
        expect(validateSpy).toHaveBeenCalledTimes(1);
    })

    test('should create a valid uuid', () => {
        const validUuid = 'f6b3d4b8-5e9e-4c5e-9b0a-5e3e1e9b5b6e'
        const uuid = new Uuid(validUuid)
        expect(uuid.id).toBe(validUuid)
        expect(validateSpy).toHaveBeenCalledTimes(1);
    })

})