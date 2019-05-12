import axios from 'axios';

export default axios.create({
    headers: new Headers({
        'Content-Type': 'multipart/form-data'
    }),
    baseURL: 'https://uxcandy.com/~shapoval/test-task-backend'
});
