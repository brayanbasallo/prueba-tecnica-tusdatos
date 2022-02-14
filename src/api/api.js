const urlApi = 'https://fakestoreapi.com'

function getProducts() {
    return fetch(`${urlApi}/products`)
        .then(response => response.json())
}
export default {
    getProducts
}