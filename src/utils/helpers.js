
export function findById (state, id) {
    return state.item.find(item => item.id === id);
}
export const findByIdFavorite = (state,id) => {
     return state.favorite.find(item => item.id === id)
}