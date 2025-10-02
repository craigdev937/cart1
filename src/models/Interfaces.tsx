export interface IProd {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    rating: number,
    reviews: [{
        rating: number,
        comment: string,
        date: string,
        reviewerName: string,
        reviewerEmail: string
    }],
    images: string[],
    thumbnail: string,
};

export interface ICart extends IProd {
    quantity: number
};

export interface ICartState {
    cartItems: ICart[],
    quantity: number,
    total: number
};

export interface IStore {
    limit: number,
    products: [{
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    rating: number,
    reviews: [{
        rating: number,
        comment: string,
        date: string,
        reviewerName: string,
        reviewerEmail: string
    }],
    images: string[],
    thumbnail: string,
}],
    skip: number,
    total: number
};

export interface IDetail {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    rating: number,
    reviews: [{
        rating: number,
        comment: string,
        date: string,
        reviewerName: string,
        reviewerEmail: string
    }],
    images: string[],
    thumbnail: string,
};






