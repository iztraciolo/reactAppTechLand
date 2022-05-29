import {fetchRegister} from "../components/CreateProduct";
describe("Pruebas de envío de formulario", ()=>{
    
    test("Prueba de petición http",(done)=>{
        let body = {
            name_product: "producto 1",
            description: "producto de prueba",
            image_product: "",
            category: "Perifericos",
            brand: "HP",
            price: 1,
            
        };
    
        let url = "http://localhost:3001/products/create";
        
        fetchRegister(url, body).then(response =>{
            expect(response.status).toBe(201);
        });
        
        done();
    },30000);
});