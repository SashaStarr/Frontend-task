import "./ProductsCreate.css";
import { useDispatch } from 'react-redux';
import { useHttp } from '../../hooks/HttpHook';
import { v4 as uuidv4 } from 'uuid';
import { productCreated } from '../../actions/actions';
import ProductForm from "../../other/ProductForm";
import { useCallback } from 'react';

const ProductsCreate = () => {

    const dispatch = useDispatch();
    const { request } = useHttp();

    const onSubmitHandler = useCallback((data) => {
        const { name, count, imageUrl, width, height, weight, comment } = data
        const newProduct = {
            id: uuidv4(),
            name, count, imageUrl, weight,
            size: {
                width, height
            },
            comments: [comment],
        }
        request("http://localhost:3000/product", "POST", JSON.stringify(newProduct))
            .then(res => console.log(res, 'Good'))
            .then(dispatch(productCreated(newProduct)))
            .catch(err => console.log(err));

    }, [request])

    return (
        <div className="product-create">
            <h3>Add new product</h3>
            <ProductForm onSubmitHandler={onSubmitHandler} />
        </div>
    )
}

export default ProductsCreate;