function getAmount(search, data) {
    const product = data.find((element) => {
        if (element.id == search) return element.amount;
    });
    return product.amount;
}
export default {
    getAmount
}