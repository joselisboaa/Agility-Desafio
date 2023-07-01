"use client";
import { GoogleMap, Marker, useJsApiLoader, MarkerClusterer } from "@react-google-maps/api";
import { useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { useFetch } from "@/hooks/useFetch";
import { IStoresBody } from "@/provider";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: -3.8016459262844875,
  lng: -38.564730421914305,
};

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_ACL_GOOGLE_API_KEY as string;

export default function Map() {
  const sendHttpRequest = useFetch<IStoresBody[]>({ method: "GET", endpoint: "stores" });

  const { data } = useQuery({
    queryKey: ["store"],
    queryFn: async () => await sendHttpRequest(),
  });

  const coordsData = data?.map((city) => {
    const latitude = city.lat;
    const longitude = city.lng;

    return { lat: latitude, lng: longitude };
  });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_API_KEY,
    language: "pt-BR",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map: any) {
    const options = {
      styles: [
        {
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [
            {
              saturation: 36,
            },
            {
              color: "#333333",
            },
            {
              lightness: 40,
            },
          ],
        },
        {
          featureType: "all",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#ffffff",
            },
            {
              lightness: 16,
            },
          ],
        },
        {
          featureType: "all",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#fefefe",
            },
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#fefefe",
            },
            {
              lightness: 17,
            },
            {
              weight: 1.2,
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5",
            },
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5",
            },
            {
              lightness: 21,
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#dedede",
            },
            {
              lightness: 21,
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 17,
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 29,
            },
            {
              weight: 0.2,
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 18,
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 16,
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#f2f2f2",
            },
            {
              lightness: 19,
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#e9e9e9",
            },
            {
              lightness: 17,
            },
          ],
        },
      ],
    };
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    map.setOptions(options);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded && data ? (
    <div>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onLoad={onLoad} onUnmount={onUnmount}>
        <MarkerClusterer>
          {(clusterer) =>
            coordsData.map((coord, index) => {
              return (
                <Marker
                  key={index}
                  icon={{
                    path: google.maps.SymbolPath.CIRCLE,
                    fillColor: "#2382A0",
                    fillOpacity: 1,
                    strokeColor: "#ffffff",
                    strokeWeight: 1,
                    scale: 6,
                  }}
                  clusterer={clusterer}
                  position={coord}
                />
              );
            })
          }
        </MarkerClusterer>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}
