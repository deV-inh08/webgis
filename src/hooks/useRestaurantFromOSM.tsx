// hooks/useRestaurantsFromOSM.ts
import { useEffect, useState } from "react";

interface Restaurant {
    id: number;
    lat: number;
    lon: number;
    name?: string;
}

export const useRestaurantsFromOSM = (center: [number, number]) => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const [lat, lon] = center;
        const delta = 0.01; // ~1km bán kính
        const query = `
      [out:json][timeout:25];
      (
        node["amenity"="restaurant"](${lat - delta},${lon - delta},${lat + delta},${lon + delta});
      );
      out body;
    `;
        const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const results = data.elements.map((el: any) => ({
                    id: el.id,
                    lat: el.lat,
                    lon: el.lon,
                    name: el.tags?.name
                }));
                setRestaurants(results);
            })
            .catch(err => console.error("Overpass API error:", err))
            .finally(() => setLoading(false));
    }, [center]);

    return { restaurants, loading };
};
