import {useState, useEffect, useRef} from 'react';
import ChartRowCustomer from './ChartRowCustomer';


function CustomerList (){
    // calling the api to get products info

const [customers, setCustomers] = useState([]);

const apiCustomers = `/api/customers`;



useEffect(()=>{
    console.log("DidMountCustomerList");
     const fetchData = (url)=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setCustomers(data.users);
        })
        .catch(error=>console.log(error));            
     }

     fetchData(apiCustomers);
    
}, []);


    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Imagen</th>                                                                                              
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Imagen</th>
                            </tr>
                        </tfoot>
                        <tbody>

                            {
                                customers.length ===0 &&
                                <>
                                    <tr>
                                        <td >
                                            Cargando
                                        </td>
                                    </tr>
                                </>
                            }

                            {
                              customers &&

                            customers.map( ( customer , i) => {
                                return <ChartRowCustomer {...customer} key={i}/>
                            })
                            }

                        </tbody>
                    </table>                    
                </div>
            </div>
        </div>

    )
}

export default CustomerList;