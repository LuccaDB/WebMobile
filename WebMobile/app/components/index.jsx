import React from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker
} from "@react-google-maps/api";
import Popup from "reactjs-popup";

import "../css/styles3.css";

const containerStyle = {
  width: "100%",
  height: "730px"
};

const center = {
  lat: -23.54725, // substitua com a latitude da sua faculdade
  lng: -46.651694, // substitua com a longitude da sua faculdade
  companyId: "college", // um identificador único para a faculdade
  locationId: "college" // um identificador único para a localização da faculdade
};

const otherLocations = [
  { lat: -23.555, lng: -46.64, companyId: "company1", locationId: "loc1" },
  { lat: -23.56, lng: -46.645, companyId: "company2", locationId: "loc2" }
  // Adicione mais coordenadas conforme necessário
];

const options = {
  imagePath:
    "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
};

const mapStyles = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5"
      }
    ]
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161"
      }
    ]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f5f5"
      }
    ]
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd"
      }
    ]
  },
  {
    featureType: "administrative.locality",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#dadada"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e"
      }
    ]
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5"
      }
    ]
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#c9c9c9"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e"
      }
    ]
  }
];

export default function IndexPage() {
  const [locations, setLocations] = React.useState([]);

  // const map = useGoogleMap();

  React.useEffect(() => {
    fetch("https://api.sourcezon.com/v1/app-data/map/locations", {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en,ru;q=0.9,az;q=0.8",
        "cache-control": "no-cache",
        pragma: "no-cache",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site"
      },
      referrer: "https://app.sourcezon.com/",
      referrerPolicy: "no-referrer-when-downgrade",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "omit"
    })
      .then((res) => res.json())
      .then((data) =>
        setLocations(
          data.locations.map((location) => ({
            lat: location.lat,
            lng: location.long,
            companyId: location.companyId,
            locationId: location.locationId
          }))
        )
      )
      .catch((e) => console.log(e));
  }, []);

  // React.useEffect(() => {
  //   locations.map(location => console.log(location.lat));
  // }, [locations.length]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyAeBjRkfSsywTZQIjapMQRcYsDgldO99Ok">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        options={{
          styles: mapStyles
        }}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <MarkerClusterer
          options={options}
          enableRetinaIcons
          maxZoom={18}
          // clusterClass="custom-clustericon"
          // styles={[
          //   {
          //     width: 30,
          //     height: 30,
          //     className: "custom-clustericon-1"
          //   },
          //   {
          //     width: 40,
          //     height: 40,
          //     className: "custom-clustericon-2"
          //   },
          //   {
          //     width: 50,
          //     height: 50,
          //     className: "custom-clustericon-3"
          //   }
          // ]}
        >
          {(clusterer) =>
            locations.map((location) => (
              <Marker
                key={location.locationId}
                position={location}
                clusterer={clusterer}
                onClick={(e) =>
                  console.log(
                    e.latLng.lat(),
                    e.latLng.lng(),
                    location.companyId
                  )
                }
              />
            ))
          }
        </MarkerClusterer>
        <></>
      </GoogleMap>
    </LoadScript>
  );
}