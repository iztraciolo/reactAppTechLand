import React, {useEffect, useState} from "react";


function CategoriesList() {

  const [categories, setCategories] = useState([]);

  const apiProducts = `/api/products?page=1`;



useEffect(()=>{
    console.log("DidMount");
     const fetchData = (url)=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setCategories(data.countByCategory);
        })
        .catch(error=>console.log(error));            
     }

     fetchData(apiProducts);
    
}, []);

let arrayData = [];
for (const [key, value] of Object.entries(categories)) {
  arrayData.push(`${key}: ${value}`);
}


  
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorías 
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            
          { 
          
          arrayData.map((cate, i)=>{
            return(
              <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">{cate}</div>
                  </div>
              </div>
          )
            
          })

         

         

            
            
          }

         
            
            
            


            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesList;
