import axios from 'axios';

// get users
export const getUsers = async () => {
    const response = await axios.get( 'https://jsonplaceholder.typicode.com/users' );

    return response.data;
};
