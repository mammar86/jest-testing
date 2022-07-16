import { Utils } from '../app/Utils';

describe('it runs successfully', () => {
    beforeAll(()=>{
        console.log('looooool')
    })

    it('first test', () => {
        const abc = Utils.toUpperCase('abc');
        expect(abc).toBe('ABC');
    })

    test.skip('parse simple URL', () => { //use after it to skip this test
        const parsedURL = Utils.parseUrl('http://localhost:8080/login');
        expect(parsedURL.href).toBe('http://localhost:8080/login')
        expect(parsedURL.port).toBe('8080');
        expect(parsedURL.protocol).toBe('http:');
    })

    it('parse URL with query', () => {
        const parsedUrl = Utils.parseUrl('http://localhost:8080/login?lol=true&mo=nah');
        const expectedQuery = {
            lol: 'true',
            mo: 'nah'
        }
        expect (parsedUrl.query).toEqual(expectedQuery);
    })

    it('test empty url' , ()=>{ //use only after it to only run this test and skip all others
        function expectError() {
            Utils.parseUrl('');
        }
        expect(expectError).toThrowError();
    })

    it('test empty url with arrow function' , () => { //use only after it to only run this test and skip all others
        expect(() => Utils.parseUrl('')).toThrowError();
    })

    it.only('test invalid url with try and catch' , () => { //use only after it to only run this test and skip all others
        try{
            Utils.parseUrl('')
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', 'no URL');
        } 
    })
})