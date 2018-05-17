export interface IProduct {
    "productId": number; 
    "productName": string;
    "productCode": string;
    "releaseDate": string;
    "description": string;
    "price": number;
    "starRating": number; 
    "imageUrl": string;
}

export interface IMigrationLog{
    "oldAssetNumber": number;
    "newAssetNumber": number;
    "fullName": string;
    "userName": string;
    "contactNumber": number;
    "logNotes": string;
    "completion": number;
    "technician": string;
}