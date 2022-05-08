export const productsFetching = () => {
    return {
        type: 'PRODUCTS_FETCHING'
    }
}

export const productsFetched = (products) => {
    return {
        type: 'PRODUCTS_FETCHED',
        payload: products
    }
}

export const productsFetchingError = () => {
    return {
        type: 'PRODUCTS_FETCHING_ERROR'
    }
}

export const productCreated = (product) => {
    return {
        type: 'PRODUCT_CREATED',
        payload: product
    }
}

export const productDeleted = (id) => {
    return {
        type: 'PRODUCT_DELETED',
        payload: id
    }
}

export const productSortedAlp = () => {
    return {
        type: 'ACTIVE_SORTED_ALPHABETICALLY'
    }
}

export const productSortedCount = () => {
    return {
        type: 'ACTIVE_SORTED_COUNT'
    }
}