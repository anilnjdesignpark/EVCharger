export const Actions = {
  CHANGE_SCREEN: "CHANGE_SCREEN",
  SET_OPTIONS: "SET_OPTIONS",
  SET_PROGRESS: "SET_PROGRESS",
  SET_STATE: "SET_STATE",
  RESET: "RESET",
  SET_DONE: "SET_DONE",
};

export const IMAGES_URl =
  "http://localhost/testsite/wp-content/themes/generatepress_child/evcharger/build/images";

export const Screens = {
  START: "START",
  CAR_SELECT: "CAR_SELECT",
  PURCHASE_LEASE: "PURCHASE_LEASE",
  OFFSTREET_PARKING: "OFFSTREET_PARKING",
  HAVE_VEHICLE: "HAVE_VEHICLE",
  FUSEBOX: "FUSEBOX",
  POSTCODE: "POSTCODE",
  CHARGER_INSTALL: "CHARGER_INSTALL",
  CABLING_TYPE: "CABLING_TYPE",
  BOOK_CALLBACK: "BOOK_CALLBACK",
  INSTANT_QUOTE: "INSTANT_QUOTE",
  PRODUCTS: "PRODUCTS",
};

export const CarData = [
  {
    name: "aston martin",
    supported: [],
    unSupported: ["rapide e"],
    icon: "astonmartin.png",
  },
  {
    name: "audi",
    supported: [
      "A3 e-tron",
      "A6 TSFI e",
      "A7 TSFI e",
      "A8 TSFI e",
      "Q5 TSFI e",
    ],
    unSupported: [],
    icon: "audi.png",
  },
  {
    name: "BD",
    supported: [
      "Otomotiv eDoblo",
      "Otomotiv eDucato",
      "Otomotiv eKangoo",
      "Otomotiv eTafffice",
    ],
    unSupported: [],
  },
];

export const Charges = {
  olevGrant: 350,
  increments: {
    "upto 10 meters": 0,
    "upto 11-15 meters": 75,
    "upto 16-25 meters": 225,
  },
};

export const ChargerData = [
  {
    id: "Wallbox Pulsar Plus",
    name: "Wallbox Pulsar Plus",
    subtitle: "Advanced technology made simple",
    desc: `The Wallbox Pulsar Plus offers the ideal balance between a small size and the powerful performance you need for smart charging at home.
Connect Pulsar Plus to the MyWallbox App through Wifi or Bluetooth to control your charging sessions in real time and the charger’s LED light color indicates the charging status.Designed to provide a minimalist yet powerful home charging station, it's one of the smallest tethered chargers on the market and comes with built in earthing protection for an easy installation.`,
    basePrice: 645,
  },
  {
    id: "myenergi Zappi",
    name: "myenergi Zappi",
    subtitle: "British made awesomeness",
    desc: `"Zappi is a smart EV charger with a difference. Not only does it operate as a standard EV charger, but it also has optional charging modes to utilise 100% GREEN energy generated from your Solar PV or wind generation. The three primary modes, Eco, Eco+ and Fast, allow you to determine the behavior of your Zappi and how it uses surplus solar to charge your EV.Paired with the myenergi app, you can set timers to utilise economy tariffs, use the boost function, monitor your devices, and so much more! This future proof, intelligent electric car charging is conceived, evolved, and manufactured in-house right here in the UK."`,
    basePrice: 945,
  },
  {
    id: "Ohme Intelligent Wall Charger",
    name: "Ohme Intelligent Wall Charger",
    subtitle: "An intelligent way to charge",
    desc: `
    It's thinking inside the box. The Ohme home charger is a climate-conscious and convenient way to charge that can sync with your electricity tariff to ensure you automatically charge when electricity is cheapest. This unassuming slender device finds the best charging times and prices, helping you reduce your car running costs. This can cost as low as 2p per mile* compared to more than 10p per mile for most petrol or diesel cars. *Compared to a standard variable tariff.
    `,
    basePrice: 795,
  },
  {
    id: "Easee Home",
    name: "Forward-looking home charging",
    desc: `
    Easee Home is a super intelligent charging station that adapts to all electric vehicles, power supplies and mains. There's no need to think about technical specifications, the Charging Robot will automatically detect what power the vehicle requires and will vary the output accordingly. You can also have upto 3 chargers on one supply, allowing the connected cars to be charged at the same time by adjusting the power dynamically between each vehicle.  
    `,
    basePrice: 995,
  },
  {
    id: "Project EV Pro Earth",
    name: "Project EV Pro Earth",
    subtitle: "Stable. Intelligent. Powerful",
    desc: `
    If you’re looking for a no-frills great all round electric car charger that does what it says, then the Project EV pro earth is a great solution. With a host of features including wifi and ethernet connectivity, built-in earthing protection and scheduled charging, you can set the Project EV to charge at a time to suit your lifestyle or when your electricity rate is at its cheapest.
    `,
    basePrice: 495,
  },
  {
    id: "Andersen A2",
    name: "Andersen A2",
    subtitle: "The Rolls Royce of chargers",
    desc: `
    The Andersen A2 is arugably one of the smartest-looking chargers on the market. Available in many luxury finishes, the Andersen A2 has a style to suit every home. With finishes ranging from the softer, natural look of Accoya Wood to the cleaner, minimalist style of precision metal, you can choose the style to suit your taste. By using the Konnect smart control app, you can see how much energy you're using, schedule charging times to suit your lifestyle or to work around your off-peak energy tariff.
    `,
    basePrice: 1045,
  },
];

export const initialState = {
  currentScreen: Screens.START,
  selectedOptions: {
    [Screens.CAR_SELECT]: {
      value: {
        brand: CarData[1].name,
        model: CarData[1].supported[0],
      },
    },
  },
  progress: 10,
  sent: false,
};

function funnel(state = initialState, action) {
  switch (action.type) {
    case Actions.CHANGE_SCREEN:
      return {
        ...state,
        currentScreen: action.payload.nextScreen,
      };

    case Actions.SET_OPTIONS:
      return {
        currentScreen: state.currentScreen,
        selectedOptions: {
          ...state.selectedOptions,
          [action.payload.screenName]: {
            value: action.payload.value,
          },
        },
        progress: state.progress,
      };

    case Actions.SET_PROGRESS:
      return {
        ...state,
        progress: action.payload.progress,
      };

    case Actions.SET_STATE:
      return action.payload.state;

    case Actions.RESET:
      return initialState;

    case Actions.SET_DONE:
      return {
        ...state,
        done: action.payload.done,
      };
    default:
      return state;
  }
}

export default funnel;
