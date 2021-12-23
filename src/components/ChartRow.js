import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.name_product}</td>
                    <td>
                        <img src={props.image_product} style={{width: 10 +'rem'}}  />                        
                    </td>
                    <td>{props.description}</td>
                    <td>{props.brands.name_brand}</td>
                    
                    <td>
                        <ul>
                            {props.categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category.name_category}</li>
                            )}
                        </ul>
                    </td>
                    <td>
                        <ul>
                            {props.typeComponent.map( (typeCompo,i) => 
                                <li key={`typeCompo ${i}`}>{typeCompo.name_type_component}</li>
                            )}
                        </ul>
                    </td>
                   
                    
                </tr>
            )
    }
    
        

export default ChartRow;