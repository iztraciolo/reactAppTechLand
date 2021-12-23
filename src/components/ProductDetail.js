import {useState, useEffect} from 'react';

function ProductDetail(props){


    const id = props.match.params.id;
    const apiProductDetail = `/api/product/${id}`;

    const [Product, setProduct] = useState([]);

   

    useEffect(()=>{
        console.log("DidMountProductDetail");
        const fetchData = (url)=>{
            fetch(url)
            .then(response=>response.json())
            .then(data=>{
                console.log(data);      
                setProduct(data);                
            })
            .catch(error=>console.log(error));            
     }

     fetchData(apiProductDetail);
    }, [])

    


    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Producto</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={Product.image_product} alt=" Imagen del producto "/>
                    </div>
                    <p>{Product.description}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;
