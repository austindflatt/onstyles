export default (styles = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return styles;
        case 'CREATE':
            return [...styles, action.payload];
        default:
            return styles;
    }
}