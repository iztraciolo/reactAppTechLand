import React from 'react'

function ListOfDetails(props){


    return (
                            <dl className="row">
                                <dt className="col-sm-3">Descripción del producto</dt>
                                <dd className="col-sm-9">{props.Product.description}</dd>

                                <dt className="col-sm-3">Stock</dt>
                                <dd className="col-sm-9">{props.Product.stock}</dd>

                                <dt className="col-sm-3">Precio</dt>
                                <dd className="col-sm-9"> $ {props.Product.price}</dd>

                                <dt className="col-sm-3">Marca</dt>
                                <dd className="col-sm-9">
                                    {props.Product.brands && props.Product.brands.name_brand? 
                                    `${props.Product.brands.name_brand}` : "No disponible"}
                                </dd>

                                <dt className="col-sm-3">Categorías</dt>
                                <dd className="col-sm-9">
                                        
                                        { 
                                        props.Product.categories && props.Product.categories[0]?
                                        props.Product.categories.map((cat, i)=>{
                                           return <li key={`cat${i}`}>{cat.name_category}</li>
                                        })
                                        :
                                        "No disponible"}  
                                </dd>

                                <dt className="col-sm-3">Tipo de componente</dt>
                                <dd className="col-sm-9">
                                        
                                        { 
                                        props.Product.typeComponent && props.Product.typeComponent[0]?
                                        props.Product.typeComponent.map((typeCom, i)=>{
                                           return <li key={`typeCom${i}`}>{typeCom.name_type_component}</li>
                                        })
                                        :
                                        "No disponible"}  
                                </dd>

                                

                       
                                
                                
                                
                                
                            </dl>
    )
                            
}

export default ListOfDetails;