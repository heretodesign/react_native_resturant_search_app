import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 
            'Bearer DIDsJ1l2_5BQN8wCyyMedHm9V3e047Jr1ZZ4VDQcnSGknzCuubQDoyBS0a-bt3aGXJ4QC2SGH61qaH7oRFffxV4fUkaxa9svaK3WUafRywitswoF4Z6r5C2KEx1vXnYx'
    }
});
