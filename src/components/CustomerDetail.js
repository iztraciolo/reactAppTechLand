import {useState, useEffect} from 'react';

function CustomerDetail(props){


    const id = props.match.params.id;
    const apiCustomerDetail = `/api/customer/${id}`;

    const [customer, setCustomer] = useState([]);

   

    useEffect(()=>{
        console.log("DidMountCustomerDetail");
        const fetchData = (url)=>{
            fetch(url)
            .then(response=>response.json())
            .then(data=>{
                console.log(data);      
                setCustomer(data);                
            })
            .catch(error=>console.log(error));            
     }

     fetchData(apiCustomerDetail);
    }, [])

    


    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Cliente </h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={customer.customer_profile_image} alt=" perfil del cliente "/>
                    </div>
                    <p>{customer.full_name}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                </div>
            </div>
        </div>
    )
}

export default CustomerDetail;
