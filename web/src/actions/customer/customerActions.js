import axios from 'axios';
export const addFavorite = (id) => async dispatch => {
    console.log("adding" + id + "as favorite");
    await axios.post('/api/addNewFavorite', id);
}