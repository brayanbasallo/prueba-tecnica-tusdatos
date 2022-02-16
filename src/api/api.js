const urlApi = 'https://fakestoreapi.com'

function getProducts() {
    return fetch(`${urlApi}/products`)
        .then(response => response.json())
}
function getProduct(id) {
    return fetch(`${urlApi}/products/${id}`)
        .then(response => response.json())
}
export default {
    getProducts,
    getProduct
}