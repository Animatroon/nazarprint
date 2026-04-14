export interface Product {
    id: number;
    name: string;
    price: number;
    images: string[];
    category: string;
    type?: string;
    gender?: 'male' | 'female' | 'unisex';
    sizes?: string[];
    colors?: ProductColor[];
    description?: string[];
    methods?: string[];
    printZones?: PrintZoneConfig[];
}

export interface ProductColor {
    name: string;
    hex: string;
    // TODO: imageIndex или imageUrl для связи цвета с изображением
    // imageIndex?: number;
}

export interface PrintZoneConfig {
    zone: string;
    maxSizes: {
        [key: string]: string | undefined;
        S?: string;
        M?: string;
        L?: string;
        XL?: string;
        XXL?: string;
        'One Size'?: string;
    };
    methods: string[];
}

export interface ProductFilter {
    priceMin?: number;
    priceMax?: number;
    categories?: string[];
    gender?: ('male' | 'female' | 'unisex')[];
    sizes?: string[];
    colors?: string[];
}

export type SortOption = 'default' | 'priceAsc' | 'priceDesc' | 'nameAsc' | 'nameDesc' | 'newest' | 'oldest';