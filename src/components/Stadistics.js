import React from 'react';
import SmallCard from './SmallCard';
import {useState, useEffect} from 'react'



function Stadistics(){

    let apiProducts = `/api/products?page=1`;
    let apiCustomers = '/api/customers';

    const [totalProducts, setTotalProducts]= useState([]); // Para armar tarjeta de total de productos

    useEffect(()=>{
        console.log("DidMount");
        const fetchData = (url)=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setTotalProducts(data.totalAllProducts)            
        })
        .catch(error=>console.log(error));            
     }

     fetchData(apiProducts);
    }, [])


    const [totalCategories, setTotalCategories]= useState([]); // Para armar tarjeta de total de categorías

    useEffect(()=>{
        console.log("DidMount");
        const fetchData = (url)=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);            
            setTotalCategories(Object.keys(data.countByCategory).length)    
        })
        .catch(error=>console.log(error));            
     }

     fetchData(apiProducts);
    }, [])

    const [totalCustomers, setTotalCustomers]= useState([]); // Para armar tarjeta de total de usuarios

    useEffect(()=>{
        console.log("DidMount");
        const fetchData = (url)=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setTotalCustomers(data.count);
            console.log(totalCustomers);
        })
        .catch(error=>console.log(error));            
     }

     fetchData(apiCustomers);
    }, [])

// Aquí se van a armar las tarjetas

let totalProd = {
    title: 'Total de productos',
    color: 'primary', 
    cuantity: totalProducts,
    icon: 'fa-box-open'
}



let totalCategos = {
    title:' Total de categorías', 
    color:'success', 
    cuantity: totalCategories,
    icon:'fa-certificate'
}



let totalCusto = {
    title:'Total de clientes' ,
    color:'warning',
    cuantity: totalCustomers,
    icon:'fa-users'
}

let cartProps = [totalProd, totalCategos, totalCusto];


    
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default Stadistics;