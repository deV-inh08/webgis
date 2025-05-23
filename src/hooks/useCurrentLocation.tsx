// hooks/useCurrentLocation.ts
import { useEffect, useState } from 'react';

export const useCurrentLocation = () => {
    const [location, setLocation] = useState<[number, number] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError('Trình duyệt không hỗ trợ Geolocation.');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation([position.coords.latitude, position.coords.longitude]);
            },
            (err) => {
                setError('Không thể lấy vị trí: ' + err.message);
            }
        );
    }, []);

    return { location, error };
};
