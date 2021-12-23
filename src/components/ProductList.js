import {useState, useEffect, useRef} from 'react';
import ChartRowProduct from './ChartRowProduct';


function ProductList (){
    // calling the api to get products info

const [products, setProducts] = useState([]);
const [page, setPage] = useState(1);

const apiProducts = `/api/products?page=${page}`;



useEffect(()=>{
    console.log("DidMount");
     const fetchData = (url)=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setProducts(data.products);
        })
        .catch(error=>console.log(error));            
     }

     fetchData(apiProducts);
    
}, []);

const loadMore =  async ()=>{
    console.log(page);
    await setPage(page + 1);
    console.log(page);  
    fetch(apiProducts)
        .then(response=>response.json())
        .then(data=>{     
                console.log(data)       
                setProducts(data.products)           
        })
        .catch(error=>{console.log(error)})
};

const seePrevious = async ()=>{
    console.log(page);
    if(page<= 1){
        await setPage(1)
    } else {
        await setPage(page-1);
    console.log(page);
     fetch(apiProducts)
        .then(response=>response.json())
        .then(data=>{     
                console.log(data)       
                setProducts(data.products)           
        })
        .catch(error=>{console.log(error)})
    }
    
}

const seePreviousButton = useRef();
const loadMoreButton = useRef();

useEffect(()=>{ //see previous btn
    if(page === 1){
        seePreviousButton.current.style.display = "none";
    } else if(page !==1){
        seePreviousButton.current.style.display = "inline-block";
    }
}, [page])

useEffect(()=>{ //load more btn
    if(products.length === 0){
        loadMoreButton.current.style.display = "none";
    } else if(products.length > 0){
        loadMoreButton.current.style.display = "inline-block";
    }
}, [products])









    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Imagen</th>
                                <th>Descripción</th>
                                <th>Marca</th>
                                <th>Categorías</th>
                                <th>Tipos de componente</th>                                
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Producto</th>
                                <th>Imagen</th>
                                <th>Descripción</th>
                                <th>Marca</th>
                                <th>Categorías</th>
                                <th>Tipos de componente</th>                                
                            </tr>
                        </tfoot>
                        <tbody>

                            {
                                products.length ===0 &&
                                <>
                                    <tr>
                                        <td >
                                            Ya no hay más artículos
                                        </td>
                                    </tr>
                                </>
                            }

                            {
                              products &&

                            products.map( ( product , i) => {
                                return <ChartRowProduct {...product} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                    <button ref={seePreviousButton} onClick={seePrevious} >Volver atrás</button>
                    <button ref={loadMoreButton} onClick={loadMore} >Más productos</button>
                </div>
            </div>
        </div>

    )
}

export default ProductList;