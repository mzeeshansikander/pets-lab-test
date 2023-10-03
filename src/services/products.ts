import { Product } from "@/types";
import axios from "axios";

const URL = process.env.NEXT_PUBLIC_API_URL

export const getProducts = async (queryParams?:any): Promise<Product[] | null> => {
    const { page, query, tag, price, isSubscribed } = queryParams;
    let queryJson:any = {
        _page: page || 1,
        _limit: 6
    };
    if (query) {
        queryJson = {...queryJson, q: query}
    }
    if (tag) {
        queryJson = {...queryJson, tags_like: tag}
    }
    if (price) {
        queryJson = {...queryJson, price_lte: price}
    }
    if (isSubscribed) {
        queryJson = {...queryJson, subscription: true}
    }

    const queryString = new URLSearchParams(queryJson).toString();
    let url = `${URL}/products${queryString ? `?${queryString}` : ''}`;

    try {
        const products = (await axios.get(url)).data;
        return products;
    }catch (error) {
        console.log(error)
        return null;
    }
}

export const getProduct = async (slug:string): Promise<Product[] | null> => {
    try {
        const product = (await axios.get(`${URL}/products?slug_like=${slug}`)).data;
        return product?.length > 0 ? product[0] : null;
    }catch (error) {
        console.log(error)
        return null;
    }
}