import { Uuid } from "../../../shared/domain/value-objects/uuid.vo"
import { Category } from "../category.entity"

describe('Category Unit Tests', () => {
    describe('constructor', () => {
        test('should create a category with default values', () => {
            const category = new Category({ name: 'Movie' })

            expect(category.category_id).toBeInstanceOf(Uuid);
            expect(category.name).toBe('Movie')
            expect(category.description).toBeNull()
            expect(category.is_active).toBeTruthy();
            expect(category.created_at).toBeInstanceOf(Date);
        })

        test('should create a category with all values', () => {
            const created_at = new Date();

            const category = new Category({ name: 'Movie', description: 'Movie Description', is_active: false, created_at: created_at })

            expect(category.category_id).toBeInstanceOf(Uuid);
            expect(category.name).toBe('Movie')
            expect(category.description).toBe('Movie Description')
            expect(category.is_active).toBeFalsy();
            expect(category.created_at).toBe(created_at);
        })

        test('should create a category with name and description', () => {
            const category = new Category({ name: 'Movie', description: 'Movie Description' })

            expect(category.category_id).toBeInstanceOf(Uuid);
            expect(category.name).toBe('Movie')
            expect(category.description).toBe('Movie Description')
            expect(category.is_active).toBeTruthy();
            expect(category.created_at).toBeInstanceOf(Date);
        })
    })

    describe("create command", () => {
        test("should create a category", () => {
            const category = Category.create({ name: 'Movie' })

            expect(category.category_id).toBeInstanceOf(Uuid);
            expect(category.name).toBe('Movie')
            expect(category.description).toBeNull()
            expect(category.is_active).toBeTruthy();
            expect(category.created_at).toBeInstanceOf(Date);
        })

        test("should create a category with description", () => {
            const category = Category.create({ name: 'Movie', description: 'Movie Description' })

            expect(category.category_id).toBeInstanceOf(Uuid);
            expect(category.name).toBe('Movie')
            expect(category.description).toBe('Movie Description')
            expect(category.is_active).toBeTruthy();
            expect(category.created_at).toBeInstanceOf(Date);
        })

        test("should create a category with is_active", () => {
            const category = Category.create({ name: 'Movie', is_active: false })

            expect(category.category_id).toBeInstanceOf(Uuid);
            expect(category.name).toBe('Movie')
            expect(category.description).toBeNull()
            expect(category.is_active).toBeFalsy();
            expect(category.created_at).toBeInstanceOf(Date);
        })
    })

    describe('category_id field', () => {
        const arrange = [
            { category_id: null }, { category_id: undefined }, { category_id: new Uuid() }
        ]

        test.each(arrange)("id = %j", ({ category_id }) => {
            const category = new Category({ name: 'Movie', category_id: category_id as any })
            expect(category.category_id).toBeInstanceOf(Uuid);
        })
    })

    test("should change name", () => {
        const category = new Category({ name: 'Movie' })

        category.changeName('Book')

        expect(category.name).toBe('Book')
    })

    test("should change description", () => {
        const category = Category.create({ name: 'Movie' })

        category.changeDescription('Movie Description')

        expect(category.description).toBe('Movie Description')
    })

    test("should activate category", () => {
        const category = Category.create({ name: 'Movie', is_active: false })

        category.activate()

        expect(category.is_active).toBeTruthy();
    })

    test("should deactivate category", () => {
        const category = Category.create({ name: 'Movie' })

        category.deactivate()

        expect(category.is_active).toBeFalsy();
    })
})