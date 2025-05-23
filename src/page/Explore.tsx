

import { useEffect, useRef } from 'react';
import { Input } from "@/components/ui/input";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { useRestaurantsFromOSM } from '@/hooks/useRestaurantFromOSM';
import { useCurrentLocation } from '@/hooks/useCurrentLocation';
import L from 'leaflet';

const fallbackCenter: [number, number] = [10.762622, 106.660172]; // TP.HCM fallback

// Helper component to move map + open popup
const FlyToUser = ({ location }: { location: [number, number] }) => {
    const map = useMap();
    const markerRef = useRef<L.Marker>(null);

    useEffect(() => {
        if (location) {
            map.flyTo(location, 16, { duration: 1.5 });
            // delay 1s để map load xong rồi mới mở popup
            setTimeout(() => {
                markerRef.current?.openPopup();
            }, 1000);
        }
    }, [location, map]);

    return (
        <Marker position={location} ref={markerRef}>
            <Popup>📍 Đây là vị trí của bạn</Popup>
        </Marker>
    );
};

export const Explore = () => {
    const { location } = useCurrentLocation();
    const center = location || fallbackCenter;

    const { restaurants, loading } = useRestaurantsFromOSM(center);

    return (
        <div className="h-screen relative">
            <Input className="absolute z-10 bg-gray-300/30 top-5 " placeholder="Nhập địa điểm..." />
            <MapContainer center={center} zoom={16} className="h-[50%] w-full z-0 mt-20">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />

                {/* Marker vị trí user và auto open popup */}
                {location && <FlyToUser location={location} />}

                {/* Marker nhà hàng từ OSM */}
                {!loading && restaurants.map(r => (
                    <Marker key={r.id} position={[r.lat, r.lon]}>
                        <Popup>
                            <strong>{r.name || "Nhà hàng không tên"}</strong><br />
                            Vị trí: {r.lat.toFixed(5)}, {r.lon.toFixed(5)}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};
