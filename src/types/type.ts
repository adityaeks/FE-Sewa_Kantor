export interface Office {
    id: number,
    price: number,
    duration: number,
    name: string,
    slug: string,
    city: City,
    thumbnail: string,
    photos: Photo[],
    benefits: Benefit[],
    about: string,
}

interface Photo {
    id: number,
    photo: string,
}

interface Benefit {
    id:number,
    name: string,
}

export interface City {
    id: number,
    name: string,
    slug: string,
    photo: string,
    officeSpaces_count: number,
    officeSpaces: Office[],
}

export interface Bookingetails {
    id: number,
    name: string;
    phone_number: string;
    boooking_trx_id: string;
    is_paid: boolean;
    duration: number;
    total_amount: number;
    started_at: string;
    started_atended_at: string;
    office: Office;
}