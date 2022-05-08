import { useHttp } from '../../hooks/HttpHook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { productsFetched, productsFetching, productsFetchingError } from '../../actions/actions';

const ProductsFilters = () => {

    const { activeSort, productsLoadingStatus } = useSelector(state => state.products);
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispatch(productsFetching());
        request("http://localhost:3000/product")
            .then(data => dispatch(productsFetched(data)))
            .catch(() => dispatch(productsFetchingError()))
    }, []);

    if (productsLoadingStatus === "loading") {
        return <CircularProgress />;
    } else if (productsLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Error</h5>
    }

    const renderSort = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Not Found</h5>
        }

        return arr.map(({ }) => {

        })
    }



    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Sorts</p>
                <div className="btn-group">
                </div>
            </div>
        </div>
    )
}

export default ProductsFilters;