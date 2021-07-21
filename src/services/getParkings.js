import axios from 'axios'
const API_KEY = process.env.REACT_APP_YELP_API_KEY
const API_URL = process.env.REACT_APP_API_URL


export default function getParkings(location) {
    
    return axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
        },
        params: {
            location,
            term: 'parking'
        }
      })
      .then(response => {
        const {businesses} = response.data
        const parkings = businesses.map(parking => {
         return {
          address: parking.location.display_address[0],
          image: parking.image_url,
          yelpPage: parking.url,
          rating: parking.rating,
          reviewCount: parking.review_count,
          lotScore: (parking.review_count * parking.rating) / (parking.review_count + 1),
          }
        })
        return parkings.sort((a,b) => {
          return a.lotScore - b.lotScore
        })
      })
      

}