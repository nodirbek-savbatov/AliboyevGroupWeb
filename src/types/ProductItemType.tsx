export interface ProductItemType {
    image: string;
    description?: string;
    name: string;
    price: number;
    stock?: number;
    status?: string;
    categoryId: string; 
}