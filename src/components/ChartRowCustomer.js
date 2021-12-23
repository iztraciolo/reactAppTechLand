import React from 'react';
import { Link } from 'react-router-dom';


function ChartRowCustomer(props){
    return (
                <tr>
                    <td>
                        <Link to={props.detail}>{props.customer_id}</Link>                        
                    </td>
                    
                    <td>
                        <Link to={props.detail}>{props.full_name}</Link>                        
                    </td>

                    <td>
                        <Link to={props.detail}>{props.email}</Link>                        
                    </td>
                    <td>
                        <Link to={props.detail}>
                            <img src={props.customer_profile_image} style={{width: 10 +'rem'}}  />
                        </Link>                                                    
                    </td>
                </tr>
            )
    }
    
        

export default ChartRowCustomer;