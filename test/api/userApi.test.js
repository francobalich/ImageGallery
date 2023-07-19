import userAPI from "../../src/api/userApi"

describe('Pruebas de userApi', () => {
    test("Debe de tener la configuracion por defecto",()=>{
        expect(userAPI.defaults.baseURL).toBe(process.env.VITE_API_URL)
    })
 })