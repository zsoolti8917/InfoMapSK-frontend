// src/SlovakiaMap.js

import React, { useEffect, useState, useRef, useContext } from 'react';
import { MapContainer, TileLayer, useMap, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-boundary-canvas';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import { DataContext } from './DataContext';
import { useNavigate, useParams } from 'react-router-dom';

// Component to apply the boundary canvas using the GeoJSON
const BoundaryLayer = ({ geojsonData }) => {
  const map = useMap();
  useEffect(() => {
    if (geojsonData) {
      const boundaryLayer = new L.TileLayer.BoundaryCanvas('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        boundary: geojsonData,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      });

      boundaryLayer.addTo(map);
    }
  }, [geojsonData, map]);

  return null;
};

// Define a style for the hover effect
const hoverStyle = {
  fillColor: 'red',
  fillOpacity: 0.7,
};

const selectedRegionStyle = {
  fillColor: 'blue',
  fillOpacity: 0.7,
};

// Define normal style
const normalStyle = {
  fillColor: 'white',
  fillOpacity: 0.2,
};



const RegionsLayer = ({ data , setActiveRegionIDN4, setActiveDistrictName, handleRegionClick }) => {

const activeRegionRef = useRef(null);
const map = useMap();

const resetActiveRegion = () => {
  if (activeRegionRef.current) {
    activeRegionRef.current.setStyle(normalStyle);
  }
};

const onEachFeature = (feature, layer) => {
  layer.bindTooltip(feature.properties.NM4, { permanent: false, direction: 'top', offset: L.point(0, -10) });

  layer.on({
    mouseover: (e) => {
      const layer = e.target;
      layer.openTooltip();
      if (layer !== activeRegionRef.current) {
        layer.setStyle(hoverStyle);
      }
    },
    mouseout: (e) => {
      const layer = e.target;
      if (layer !== activeRegionRef.current) {
        layer.setStyle(normalStyle);
      }
      layer.closeTooltip();
    },
    click: (e) => {
      const clickedLayer = e.target;
      setActiveRegionIDN4(clickedLayer.feature.properties.IDN4);
      resetActiveRegion();
      clickedLayer.setStyle(hoverStyle);
      activeRegionRef.current = clickedLayer;
      handleRegionClick(clickedLayer.feature.properties.IDN4);
      const bounds = clickedLayer.getBounds();
      const center = bounds.getCenter();
      map.flyTo(center, map.getZoom(), {
        animate: true,
        duration: 0.5 // Duration in seconds, adjust as needed
      });
    },
  });
};
  return (
    <>
      <GeoJSON
        data={data}
        style={normalStyle}
        onEachFeature={onEachFeature}
      />
    </>
  );
};

const DistrictsLayer = ({ data, activeRegionIDN4, setActiveDistrictName, handleDistrictClick }) => {
  const map = useMap();
  const activeDistrictRef = useRef(null);

  const resetActiveDistrict = () => {
    if (activeDistrictRef.current) {
      activeDistrictRef.current.setStyle(normalStyle); // Revert to normal style
    }
  };

  const onEachFeature = (feature, layer) => {
    layer.bindTooltip(feature.properties.NM3, { permanent: false, direction: 'top', offset: L.point(0, -10) });

    layer.on({
      mouseover: (e) => {
        const layer = e.target;
        layer.setStyle(hoverStyle);
        layer.openTooltip();
      },
      mouseout: (e) => {
        const layer = e.target;
        if (layer !== activeDistrictRef.current) {
          layer.setStyle(normalStyle); // Only revert style if it's not the active district
        }
        layer.closeTooltip();
      },
      click: (e) => {
        const clickedLayer = e.target;
        setActiveDistrictName(clickedLayer.feature.properties.NM3);
        
        resetActiveDistrict(); // Reset style of previously active district
        handleDistrictClick(clickedLayer.feature.properties.IDN4);
        clickedLayer.setStyle({
          // Define the style for the active district
          fillColor: 'blue', // Example color, adjust as needed
          fillOpacity: 1, // Example opacity, adjust as needed
        });

        activeDistrictRef.current = clickedLayer; // Set the clicked layer as the active district
        const bounds = clickedLayer.getBounds();
        map.fitBounds(bounds); // Zoom to the district
      },
    });
  };

  useEffect(() => {
    if (!activeRegionIDN4) return; // Do not display districts if there's no active region IDN4

    const filteredData = {
      ...data,
      features: data.features.filter(district => String(district.properties.IDN3)[0] === String(activeRegionIDN4)) // Filter districts by matching the first digit of IDN3 with IDN4 of the active region
    };

    

    L.geoJSON(filteredData, {
      style: normalStyle, // Define as needed
      onEachFeature: onEachFeature,
    }).addTo(map);

    // Return a cleanup function to remove the layer when the component unmounts or activeRegionIDN4 changes
    return () => {
      map.eachLayer(layer => {
        if (layer.feature && String(layer.feature.properties.IDN3)[0] === String(activeRegionIDN4)) {
          map.removeLayer(layer);
        }
      });
    };
  }, [activeRegionIDN4, data, map]);

  return null;
};

const CitiesLayer = ({ data, activeDistrictName, handleCityClick }) => {
  const map = useMap();

  useEffect(() => {
    let citiesLayer;

    if (activeDistrictName) {
      const filteredData = {
        ...data,
        features: data.features.filter(city =>
          city.properties.district === activeDistrictName && city.properties.IDN5)
      };

      citiesLayer = L.geoJSON(filteredData, {
        id: 'citiesLayer',
        pointToLayer: (feature, latlng) => {
          const marker = L.circleMarker(latlng, {
            radius: 5,
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
          });

          // Bind a Tooltip with the city's name
          marker.bindTooltip(feature.properties.name, { permanent: false, direction: 'top', offset: L.point(0, -10) });

          // Event listeners for hover effect
          marker.on('mouseover', (e) => {
            const layer = e.target;
            layer.setStyle({
              fillColor: "#ffff00", // Change the color on hover
              fillOpacity: 1, // Adjust the opacity
            });
            layer.openTooltip(); // Show the tooltip with the city's name
          });

          marker.on('mouseout', (e) => {
            const layer = e.target;
            layer.setStyle({
              fillColor: "#ff7800", // Revert to original color
              fillOpacity: 0.8, // Revert to original opacity
            });
            layer.closeTooltip(); // Hide the tooltip
          });

          marker.on('click', () => {
            handleCityClick(feature.properties.IDN5);
          });

          return marker;
        }
      }).addTo(map);
    }

    return () => {
      if (citiesLayer) {
        citiesLayer.remove();
      }
    };
  }, [activeDistrictName, data, map]);

  return null;
};
// Main map component
const SlovakiaMap = () => {
  const [slovakiaData, setSlovakiaData] = useState(null);
  const [RegionsData, setRegionsData] = useState(null);
  const [districtsData, setDistrictsData] = useState(null);
  const [activeRegionIDN4, setActiveRegionIDN4] = useState(null); // Now tracking the IDN4 of the active region
  const [citiesData, setCitiesData] = useState(null);
  const [activeDistrictName, setActiveDistrictName] = useState(null);
  const { updateSelection, safeSetItem } = useContext(DataContext);
  const navigate = useNavigate();

  const handleRegionClick = (id) => {
    updateSelection('region', id);
    navigate(`/data/region/${id}`);

    console.log(id);
  };

  const handleDistrictClick = (id) => {
    updateSelection('district', id);
   navigate(`/data/district/${id}`);
    console.log(id);
  };

  const handleCityClick = (id) => {
    updateSelection('city', id);
    navigate(`/data/city/${id}`);
    console.log(id);
  };

const corner1 = L.latLng(47.205, 13.996); // Southwest corner of Slovakia
const corner2 = L.latLng(50.149, 23.862); // Northeast corner of Slovakia
// Create a LatLngBounds object
const bounds = L.latLngBounds(corner1, corner2);


useEffect(() => {
  const fetchData = async () => {
    const slovakiaGeoJsonKey = 'slovakiaGeoJson';
    const regionsGeoJsonKey = 'regionsGeoJson';
    const districtsGeoJsonKey = 'districtsGeoJson';
    const citiesGeoJsonKey = 'citiesGeoJson';

    // A helper function to fetch and cache data
    const fetchAndCacheData = async (url, key) => {
      const cachedData = localStorage.getItem(key);
      if (cachedData) {
        return JSON.parse(cachedData);
      } else {
        try {
          const response = await axios.get(url);
          const data = response.data;
          safeSetItem(key, JSON.stringify(data)); // Use the safeSetItem for storage
          return data;
        } catch (error) {
          console.error(`Error loading the GeoJSON from ${url}:`, error);
          return null;
        }
      }
    };

    // Use the helper function to fetch and set data
    const slovakiaData = await fetchAndCacheData('https://infomapsk-91a6bb6050b3.herokuapp.com/get-slovakia-geojson', slovakiaGeoJsonKey);
    if (slovakiaData) setSlovakiaData(slovakiaData);

    const regionsData = await fetchAndCacheData('https://infomapsk-91a6bb6050b3.herokuapp.com/get-regions-geojson', regionsGeoJsonKey);
    if (regionsData) setRegionsData(regionsData);

    const districtsData = await fetchAndCacheData('https://infomapsk-91a6bb6050b3.herokuapp.com/get-districts-geojson', districtsGeoJsonKey);
    if (districtsData) setDistrictsData(districtsData);

    const citiesData = await fetchAndCacheData('https://infomapsk-91a6bb6050b3.herokuapp.com/get-cities-geojson', citiesGeoJsonKey);
    if (citiesData) setCitiesData(citiesData);
  };

  fetchData();
}, []); // The empty array ensures this effect runs only once when the component mounts.


  useEffect(() => {
    // Reset the active district name when the active region changes
    setActiveDistrictName(null);
  }, [activeRegionIDN4]);

  return (
    <div className="w-full h-full bg-primary-700">
      <MapContainer center={[48.669, 19.699]} minZoom={8} zoom={8} scrollWheelZoom={false}  style={{ height: '50vh', width: '100%' }} className='bg-secondary-600'>
        {slovakiaData && <BoundaryLayer geojsonData={slovakiaData} />}
        {RegionsData && <RegionsLayer data={RegionsData} setActiveRegionIDN4={setActiveRegionIDN4} handleRegionClick={handleRegionClick}/>}
        {districtsData && activeRegionIDN4 && <DistrictsLayer data={districtsData} activeRegionIDN4={activeRegionIDN4} setActiveDistrictName={setActiveDistrictName} handleDistrictClick={handleDistrictClick} />}
        {citiesData && activeDistrictName && <CitiesLayer data={citiesData} activeDistrictName={activeDistrictName} handleCityClick={handleCityClick} />}
      </MapContainer>
    </div>
  );
};

export default SlovakiaMap;
