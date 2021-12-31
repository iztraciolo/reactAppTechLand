import React from 'react';
import CategoriesList from './CategoriesList';
import LastProduct from './LastProduct';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastProduct />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <CategoriesList />

        </div>
    )
}

export default ContentRowCenter;