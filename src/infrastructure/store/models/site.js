import LocalFsDB from '../../fake-db/LocalFsDB.js'

const features = [
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.043929, 38.910525],
    },
    properties: {
      phoneFormatted: '(202) 387-9338',
      phone: '2023879338',
      address: '1512 Connecticut Ave NW',
      city: 'Washington DC',
      country: 'United States',
      crossStreet: 'at Dupont Circle',
      postalCode: '20036',
      state: 'D.C.',
      id: 2,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.0672, 38.90516896],
    },
    properties: {
      phoneFormatted: '(202) 337-9338',
      phone: '2023379338',
      address: '3333 M St NW',
      city: 'Washington DC',
      country: 'United States',
      crossStreet: 'at 34th St NW',
      postalCode: '20007',
      state: 'D.C.',
      id: 3,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.002583742142, 38.887041080933],
    },
    properties: {
      phoneFormatted: '(202) 547-9338',
      phone: '2025479338',
      address: '221 Pennsylvania Ave SE',
      city: 'Washington DC',
      country: 'United States',
      crossStreet: 'btwn 2nd & 3rd Sts. SE',
      postalCode: '20003',
      state: 'D.C.',
      id: 4,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-76.933492720127, 38.99225245786],
    },
    properties: {
      address: '8204 Baltimore Ave',
      city: 'College Park',
      country: 'United States',
      postalCode: '20740',
      state: 'MD',
      id: 5,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.097083330154, 38.980979],
    },
    properties: {
      phoneFormatted: '(301) 654-7336',
      phone: '3016547336',
      address: '4831 Bethesda Ave',
      cc: 'US',
      city: 'Bethesda',
      country: 'United States',
      postalCode: '20814',
      state: 'MD',
      id: 6,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.359425054188, 38.958058116661],
    },
    properties: {
      phoneFormatted: '(571) 203-0082',
      phone: '5712030082',
      address: '11935 Democracy Dr',
      city: 'Reston',
      country: 'United States',
      crossStreet: 'btw Explorer & Library',
      postalCode: '20190',
      state: 'VA',
      id: 7,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.10853099823, 38.880100922392],
    },
    properties: {
      phoneFormatted: '(703) 522-2016',
      phone: '7035222016',
      address: '4075 Wilson Blvd',
      city: 'Arlington',
      country: 'United States',
      crossStreet: 'at N Randolph St.',
      postalCode: '22203',
      state: 'VA',
      id: 8,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-75.28784, 40.008008],
    },
    properties: {
      phoneFormatted: '(610) 642-9400',
      phone: '6106429400',
      address: '68 Coulter Ave',
      city: 'Ardmore',
      country: 'United States',
      postalCode: '19003',
      state: 'PA',
      id: 9,
    },
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-75.20121216774, 39.954030175164],
    },
    properties: {
      phoneFormatted: '(215) 386-1365',
      phone: '2153861365',
      address: '3925 Walnut St',
      city: 'Philadelphia',
      country: 'United States',
      postalCode: '19104',
      state: 'PA',
      id: 10,
    },
  }
]

class Site extends LocalFsDB {
  constructor() {
    super()
    this.document = features
  }

  #latency = 10

  get store() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const featureCollection = {
          type: 'FeatureCollection',
          features
        }
        resolve(featureCollection)
      }, this.#latency)
    })
  }
}

export default Site