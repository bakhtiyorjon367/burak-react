import { OrderStatus } from "../enums/order.enum";
import { Product } from "./product";


export interface OrderItemInput {
    itemQuantity: number;
    itemPrice:    number;
    salePrice?:   number;
    productId:    string;
    orderId?:     string;
}

export interface OrderItem {
    _id: string;
    itemQuantity: number;
    itemPrice: number;
    salePrice: number;
    orderId: string;
    productId: string;
    createAt: Date;
    updateAt: Date;
}

export interface Order{
    _id:    string;
    orderTotal:   number;
    salePrice: number;
    orderDelivery:number;
    orderStatus:  OrderStatus;
    memberId:     string;
    createAt:     Date;
    updateAt:     Date;
    // from aggregation
    orderItems: OrderItem[];
    productData: Product[];
}

export interface OrderInquiry {
    page:number;
    limit: number;
    orderStatus:OrderStatus;
}

export interface OrderUpdateInput{
    orderId:string;
    orderStatus:OrderStatus;    
}
