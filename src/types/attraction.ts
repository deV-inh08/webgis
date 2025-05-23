// types/attraction.ts
export interface Attraction {
    id: number;
    name: string;
    category: AttractionCategory;
    description: string;
    address: string;
    district: District;
    latitude: number;
    longitude: number;
    rating: number;
    image_url: string;
    phone?: string;
    opening_hours: string;
    entry_fee: string;
    website?: string;
    best_time?: string;
    facilities?: string[];
    created_at: string;
}

export type AttractionCategory =
    | 'historical'
    | 'nature'
    | 'food'
    | 'shopping'
    | 'entertainment'
    | 'religious'
    | 'museum'
    | 'nightlife';

export type District =
    | 'Quận 1'
    | 'Quận 2'
    | 'Quận 3'
    | 'Quận 4'
    | 'Quận 5'
    | 'Quận 6'
    | 'Quận 7'
    | 'Quận 8'
    | 'Quận 9'
    | 'Quận 10'
    | 'Quận 11'
    | 'Quận 12'
    | 'Quận Bình Thạnh'
    | 'Quận Phú Nhuận'
    | 'Quận Tân Bình'
    | 'Quận Tân Phú'
    | 'Quận Gò Vấp'
    | 'Quận Bình Tân'
    | 'Huyện Hóc Môn'
    | 'Huyện Củ Chi'
    | 'Huyện Bình Chánh'
    | 'Huyện Nhà Bè'
    | 'Huyện Cần Giờ';

export interface Contact {
    id?: number;
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    status?: 'new' | 'processing' | 'resolved';
    created_at?: string;
}

export interface ApiResponse<T> {
    data: T;
    message?: string;
    error?: string;
}