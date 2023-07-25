"use client";
import { Spinner } from "@/utils/MuiServerComponent";
import TextLinkWrap from "@/utils/TextLinkWrap";
import {
  GoogleMap,
  useJsApiLoader,
  InfoWindowF,
  MarkerF,
} from "@react-google-maps/api";
import Link from "next/link";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const Lagos = { lat: 6.465422, lng: 3.406448 };

export type Place = {
  name: string;
  address: string;
  lat: number;
  lng: number;
};

const Map = () => {
  const [places, setPlaces] = useState<Place[]>([
    {
      name: "Ikoyi Store",
      address: "19, Adekunle Street",
      lat: 6.465422,
      lng: 3.406448,
    },
    {
      name: "Idumota Store",
      address: "19, Goat Complex",
      lat: 6.462005834024597,
      lng: 3.3834136407508186,
    },
    {
      name: "VI Store",
      address: "19, Great Road",
      lat: 6.428145539605796,
      lng: 3.44559549730907,
    },
  ]);
  const [selectedPlace, setSelectedPlace] = useState<Place | undefined>(
    undefined
  );
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });
  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={Lagos} zoom={11}>
      {places.map((place) => (
        <MarkerF
          key={`${place.address}-${place.name}-${place.lat}-${place.lng}`}
          onClick={() => {
            place === selectedPlace
              ? setSelectedPlace(undefined)
              : setSelectedPlace(place);
          }}
          position={{ lat: place.lat, lng: place.lng }}
        />
      ))}
      {selectedPlace && (
        <InfoWindowF
          position={{
            lat: selectedPlace.lat,
            lng: selectedPlace.lng,
          }}
          zIndex={1}
          options={{
            pixelOffset: new window.google.maps.Size(0, -40),
          }}
          onCloseClick={() => setSelectedPlace(undefined)}
        >
          <div className=" max-w-[12rem]">
            <h3 className="pb-2 text-xl font-medium">{selectedPlace.name}</h3>
            <p className="pb-2">{selectedPlace.address}</p>
            <TextLinkWrap href="/" scale={false} className="text-primary">
              <small>view store &gt;&gt; </small>
            </TextLinkWrap>
          </div>
        </InfoWindowF>
      )}
    </GoogleMap>
  ) : (
    <div className="flex just-cont h-full w-full">
      <Spinner className="h-16 w-16 text-blue-500/10" />
    </div>
  );
};

export default Map;
