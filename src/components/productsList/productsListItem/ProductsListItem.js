import "./ProductsListItem.css";

const ProductsListItem = (props) => {

    const { name, imageUrl, count, size, weight, onDelete, comments } = props

    const comment = comments.map(item => {
        return <span>{item}</span>
    })

    return (
        <li className='card shadow'>
            <img src={imageUrl} alt={name} />
            <div className='card-info'>
                <span>{name} , </span>
                <span>weight : {weight} </span>
                <span>count : {count} </span>
                <span>size : {size.width}X{size.height}</span>
                <span>comments : </span>
                {comment}
            </div>
            <button type="button"
                className="btn-trash btn-sm " onClick={onDelete}>
                <i className="fas fa-trash"></i>
            </button>
            <button className="btn-trash btn-sm ">
                Edit
            </button>
        </li>
    )
}

export default ProductsListItem