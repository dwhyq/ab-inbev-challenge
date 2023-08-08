const BASE_URL = "https://fakestoreapi.com"
const PRODUCT_PATH = "/products"

const getFirstFourWords = (sentence) => {
    const words = sentence.trim().split(/\s+/);
    return words.slice(0, 4).join(' ');
}

export { BASE_URL, PRODUCT_PATH, getFirstFourWords };