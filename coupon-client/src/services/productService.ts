import axios from 'axios';

const url = 'http://localhost:8080/coupons/product'
const listProducts =  async () => {
    const response = await axios.get(`${url}/list`)
    if (response.status === 200)
        return response.data
}

export { listProducts }