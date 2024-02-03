import axios from 'axios';

const url = 'http://localhost:8080/coupons/product'
const listProducts =  async () => {
    const response = await axios.get(`${url}/list`)
    console.log(response)
}

export { listProducts }