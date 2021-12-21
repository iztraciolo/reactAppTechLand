import {useState, useEffect} from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Title: 'Billy Elliot ',
        Length: '123',
        Rating: '5',
        Categories: ['Drama','Comedia'],
        Awards: 2
    },
    {
        Title: 'Alicia en el país de las maravillas',
        Length: '142',
        Rating: '4.8',
        Categories: ['Drama','Acción','Comedia'],
        Awards: 3
    },
    
]


function Chart (){
    // calling the api to get products info

const [products, setProducts] = useState([]);
const [page, setPage] = useState(1);


useEffect(()=>{
    console.log("DidMount");
     const fetchData = async (url)=>{
       await fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setProducts(data);
        })            
     }

     fetchData(`/api/products?page=${page}`)
    
}, [])

    


    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Duración</th>
                                <th>Rating</th>
                                <th>Género</th>
                                <th>Premios</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Título</th>
                                <th>Duración</th>
                                <th>Rating</th>
                                <th>Género</th>
                                <th>Premios</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;