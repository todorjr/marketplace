<template>
  <div class="map-container">
    <GmapMap
      :center="center"
      :zoom="7"
      :options="{styles: mapStyles}"
      style="width: 100%; height: 500px; margin-top: 20px; border-radius: 10px;"
      >
      <!-- You can place markers, shapes, etc. inside the GmapMap component -->
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></GmapMarker>
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'MapComponent',
  data() {
    return {
      center: { lat: 48.8566, lng: 2.3522 },
      markers: [],
      mapStyles: [
        { elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        { elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        { elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    };
  },
  mounted() {
    this.getUserLocation();
  },
  methods: {
      getUserLocation() {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition((position) => {
                  const lat = position.coords.latitude;
                  const lng = position.coords.longitude;
                  this.markers = [];
                  this.markers.push({ position: { lat, lng } });
                  this.center = { lat, lng };
              }, (error) => {
                  console.error("Error fetching location", error);
              });
          } else {
              console.error("Geolocation is not supported by this browser.");
          }
      }
  }


}
</script>

<style scoped>
.map-container {
    display: flex;
    justify-content: center; 
    align-items: center;     
    height: 100vh;
}

</style>

  