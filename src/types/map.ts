// types/map.ts
import type { LatLngExpression } from 'leaflet';
import type { Attraction, AttractionCategory } from './attraction';

export interface MapProps {
    attractions: Attraction[];
    selectedCategory?: AttractionCategory | null;
    onAttractionClick?: (attraction: Attraction) => void;
}

export interface MarkerData {
    position: LatLngExpression;
    attraction: Attraction;
}

export interface CategoryFilterProps {
    categories: Record<AttractionCategory, string>;
    selectedCategory: AttractionCategory | null;
    onCategoryChange: (category: AttractionCategory | null) => void;
}