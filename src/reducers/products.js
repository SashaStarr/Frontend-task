const initialState = {
    products: [],
    productsLoadingStatus: 'idle',
    activeSort: 'alp'
}

const products = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCTS_FETCHING':
            return {
                ...state,
                productsLoadingStatus: 'loading'
            }
        case 'PRODUCTS_FETCHED':
            return {
                ...state,
                products: action.payload,
                productsLoadingStatus: 'idle'
            }
        case 'PRODUCTS_FETCHING_ERROR':
            return {
                ...state,
                productsLoadingStatus: 'error'
            }
        case 'PRODUCT_CREATED':
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case 'PRODUCT_DELETED':
            return {
                ...state,
                products: state.products.filter(item => item.id !== action.payload)
            }
        case 'ACTIVE_SORTED_ALPHABETICALLY':
            return {
                ...state,
                activeSorted: 'alp'
            }
        case 'ACTIVE_SORTED_COUNT':
            return {
                ...state,
                activeSorted: 'count'
            }
        default: return state
    }
}

export default products;