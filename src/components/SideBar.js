import React from 'react';
import logoTechLand from '../assets/images/techLand1White.png';
import ContentWrapper from './ContentWrapper';
import CategoriesList from './CategoriesList';
import LastProduct from './LastProduct';
import Stadistics from './Stadistics';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import CustomerList from './CustomerList';
import CustomerDetail from './CustomerDetail';
import {CreateProduct} from "./CreateProduct";


function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-dark dark sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-75" src={logoTechLand} alt="Tech-Land"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Tech_Land</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/categories">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categorías</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/lastProduct">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último producto</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/stadistics">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Estadísticas</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/productList">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Lista de productos</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/customerList">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Lista de clientes</span></Link>
                </li>
    
                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/create-product">
                        <i className="fas fa-fw fa-plus"></i>
                        <span>Añadir producto</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            {/*<!-- Microdesafio 1 -->*/}
            {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/LastMovieInDb">
                <LastMovieInDb />
            </Route>
            <Route path="/ContentRowMovies">
                <ContentRowMovies />
            </Route>*/}
            {/*<!-- End Microdesafio 1 -->*/}

            {/*<!-- End Microdesafio 2 -->*/}
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/categories">
                    <CategoriesList />
                </Route>
                <Route path="/lastProduct">
                    <LastProduct />
                </Route>

                <Route exact path="/stadistics" component={Stadistics} />

                <Route exact path="/productList" component={ProductList} />
                
                <Route exact path="/create-product" component={CreateProduct} />
    
                <Route exact path="/product/:id" component={ProductDetail} />                                   
                
                <Route exact path="/customerList" component={CustomerList} />

                <Route exact path="/customer/:id" component={CustomerDetail} />

                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;