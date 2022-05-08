import "./ProductsList.css";
import { useHttp } from '../../hooks/HttpHook';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsFetching, productsFetched, productsFetchingError, productDeleted } from '../../actions/actions';
import { CircularProgress, Alert } from '@mui/material';
import ProductsListItem from './productsListItem/ProductsListItem';

const ProductsList = () => {
    // const [deleteСonfirmation, setDeleteСonfirmation] = useState(false)
    // const [modalHidden, setModalHidden] = useState(false)

    const { request } = useHttp();
    const dispatch = useDispatch();
    const productsLoadingStatus = useSelector(state => StaticRange.productsLoadingStatus)
    const productsList = useSelector(state => state.products)

    useEffect(() => {
        productsFetching();
        request("http://localhost:3000/product")
            .then(data => dispatch(productsFetched(data)))
            .catch(() => dispatch(productsFetchingError()))

    }, []);

    //Delete Product

    const onDelete = useCallback((id) => {
        request(`http://localhost:3000/product/${id}`, "DELETE")
            .then(data => console.log(data, 'Deleted'))
            .then(dispatch(productDeleted(id)))
            .catch(err => console.log(err));
    }, [request]);


    if (productsLoadingStatus === "loading") {
        return <CircularProgress />
    } else if (productsLoadingStatus === "error") {
        return <Alert severity="error">Error</Alert>
    }
    console.log(productsList)

    const product = productsList.map(item => {
        const { id, ...anotherItems } = item
        return (<ProductsListItem key={id} {...anotherItems} onDelete={() => onDelete(id)} />)
    })

    return (
        <ul className="products-list">
            {/* <ModalDelete /> */}
            {product}
        </ul>
    )

}

export default ProductsList;