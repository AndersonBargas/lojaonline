export interface IProduct {
    _id: string;
    name: string;
    description: string;
    price: number;
}
  
export interface IProductInputDTO {
    name: string;
    description: string;
    price: number;
}