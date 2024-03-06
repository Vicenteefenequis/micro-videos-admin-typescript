import { ValueObject } from "../value-object";

class StringValueObject extends ValueObject {
    constructor(readonly value: string) {
        super()
    }
}

class ComplexValueObject extends ValueObject {
    constructor(readonly prop1: string, readonly prop2: number) {
        super()
    }
}

describe('ValueObject Unit Tests', () => {
    test('should be equals', () => {
        const valueObject1 = new StringValueObject('test1')
        const valueObject2 = new StringValueObject('test1')
        expect(valueObject1.equals(valueObject2)).toBeTruthy()

        const valueObject3 = new ComplexValueObject('test1', 1)
        const valueObject4 = new ComplexValueObject('test1', 1)
        expect(valueObject3.equals(valueObject4)).toBeTruthy()
    })

    test("should not be equals", () => {
        const valueObject1 = new StringValueObject('test1')
        const valueObject2 = new StringValueObject('test2')
        expect(valueObject1.equals(valueObject2)).toBeFalsy()
        expect(valueObject1.equals(null as any)).toBeFalsy()
        expect(valueObject1.equals(undefined as any)).toBeFalsy()

        const valueObject3 = new ComplexValueObject('test1', 1)
        const valueObject4 = new ComplexValueObject('test2', 1)
        expect(valueObject3.equals(valueObject4)).toBeFalsy()
        expect(valueObject3.equals(null as any)).toBeFalsy()
        expect(valueObject3.equals(undefined as any)).toBeFalsy()

    })



});