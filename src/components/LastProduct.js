import {useState, useEffect} from 'react';
import { Link, Route } from 'react-router-dom';
import ProductDetail from './ProductDetail';

function LastProduct(){

    const [lastProduct, setLastProduct] = useState([]);

    const apiLastProduct = '/api/lastProduct';

    useEffect(()=>{
        console.log("DidMountLasProductComponent");
        const fetchData = (url)=>{
            fetch(url)
            .then(response=>response.json())
            .then(data=>{
                console.log(data);                
                setLastProduct(data.data)
            })
            .catch(error=>console.log(error));            
     }

     fetchData(apiLastProduct);
    }, [])

    


    const newLocal = `/product/${lastProduct.product_id}`;
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto agregado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={lastProduct.image_product} alt=" Imagen del producto "/>
                    </div>
                    
                    <Link to={`/product/${lastProduct.product_id}`}>
                        <p>{lastProduct.name_product}</p>
                    </Link>

                    <Route exact path="/product/:id" component={ProductDetail} />
                    
                    
                </div>
            </div>
        </div>
    )
}

export default LastProduct;
