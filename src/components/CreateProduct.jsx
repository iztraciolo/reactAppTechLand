import TopBar from "./TopBar";
import Footer from "./Footer";
import React, {useState} from 'react';


/** @Author: Erick Luna
 ** Componente React que permite registrar un producto utilizando fetch y el método post
 * */

/*Los arreglos con información para las opciones de las etiquetas select se importaron a otro archivo,
 para mayor legibilidad del código
*/
import {types, brands, categories} from "../model/data";

export async function fetchRegister(url, data) {
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...data
        })
    });
}


const url = "http://localhost:3001/products/create";


/*Se migro este formulario de el sitio "Tech Land a un "Dashboard", pues la funcionalidad de "Añadir producto"
debe estar limitada a los administradores del sistema*/

export function CreateProduct(){
    
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState();
    const [brand, setBrand] = useState();
    const [type, setType]=useState();
    const [price, setPrice] = useState();
    const [stock, setStock] = useState();
    
    function changeName(event){
        setName(event.target.value);
        console.log(name)
    }
    
    function changeDescription(event){
        setDescription(event.target.value);
    }
    
    function changeCategory(event){
        setCategory(event.target.value);
    }
    function changeBrand(event){
        setBrand(event.target.value);
    }
    
    function changeType(event){
        setType(event.target.value);
    }
    
    function changePrice(event){
        setPrice(event.target.value);
    }
    
    function changeStock(event){
        setStock(event.target.value);
    }
    
    /** Esta función se ejecuta al presionar el botón de enviar; permite realizar
     **  la petición por "POST" a nuestra Api rest
     */
    
    
    function handleSubmit(event) {
        event.preventDefault();
        fetch(url,{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name_product: name,
                description: description,
                image_product: "",
                category: category,
                brand: brand,
                price:price,
                stock: stock,
                type: type
            })
        }).then(response=>{
            console.log(response);
        })
    }
    
    
    //Este return renderiza el contenido; el html es mas limpio gracias al uso del map para generar los <options>
    return(
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <div className="badge-dark mt-5 container-fluid w-50 mx-auto p-4 rounded">
                        <h3 className="text-center mx-auto alert-secondary rounded p-2 mb-2 w-50">
                            Añadir producto
                        </h3>
                        <br/>
                        <form className="mb-3">
                            <div className="form-group">
                                <label className="form-check-label">Nombre del producto </label>
                                <input onChange={changeName} type="text" className="input-group"/>
                            </div>
                            <div className="form-group">
                                <label className="form-check-label">Descripción</label>
                                <textarea onChange={changeDescription} className="input-group"/>
                            </div>
                            <div className="form-group">
                                <label className="form-check-label">Imagen </label>
                                <input  type="file" className="input-group"/>
                            </div>
                            <div className="form-group">
                                <label className="form-check-label">Categoría </label>
                                <select onChange={changeCategory} className="input-group" id="category">
                                    {/* Se utiliza un ciclo map, que permite recorrer un arreglo y retorna la etiqueta
                                    <option> con los valores requeridos*/}
                                    {categories.map((cat, i)=>{
                                        return <option key={i+cat} value={cat}>{cat}</option>
                                    })}
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-check-label">Marca </label>
                                <select onChange={changeBrand} className="input-group" id="brand">
                                    {brands.map((brand, i)=>{
                                        return <option key={i+brand} value={brand}>{brand}</option>
                                    })}
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-check-label">Precio </label>
                                <input onChange={changePrice} type="number" className="input-group"/>
                            </div>
                            <div className="form-group">
                                <label className="form-check-label">Stock </label>
                                <input type="text" onChange={changeStock} className="input-group"/>
                            </div>
                            <div className="form-group">
                                <label className="form-check-label">Tipo </label>
                                <select onChange={changeType} className="input-group" id="type">
                                    {types.map((ty, i)=>{
                                        return <option key={i+ty} value={ty}>{ty}</option>
                                    })}
                                </select>
                            </div>
                            <div className="form-group">
                            <button onClick={handleSubmit} type="submit" className="btn-light w-50 d-block mx-auto rounded"> Agregar</button>
                            </div>
                        </form>
                    
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    );
}