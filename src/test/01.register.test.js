import { shallow } from 'enzyme';
import {CreateProduct} from "../components/CreateProduct";

describe("Pruebas de renderizado", ()=>{
    
    test("Debe renderizar correctamente <CreateProduct/>",()=>{
       const wrapper = shallow(<CreateProduct/>);
       
       expect(wrapper).toMatchSnapshot();
    });
    
    
});