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

export const ChargerData = [
  {
    id: "Wallbox Pulsar Plus",
    name: "Wallbox Pulsar Plus",
    subtitle: "Advanced technology made simple",
    desc:
      "The Wallbox Pulsar Plus offers the ideal balance between a small size and the powerful performance you need for smart charging at home. Connect Pulsar Plus to the MyWallbox App through Wifi or Bluetooth to control your charging sessions in real time and the charger’s LED light color indicates the charging status. Designed to provide a minimalist yet powerful home charging station, it's one of the smallest tethered chargers on the market and comes with built in earthing protection for an easy installation.",
    basePrice: 645,
    olevGrant: 350,
    increments: [
      {
        "upto 10": 0,
        "upto 11-15": 75,
        "upto 16-25": 225,
      },
    ],
  },
  {
    id: "Wallbox Pulsar Plus2",
    name: "Wallbox Pulsar Plus2",
    subtitle: "Advanced technology made simple",
    desc:
      "The Wallbox Pulsar Plus offers the ideal balance between a small size and the powerful performance you need for smart charging at home. Connect Pulsar Plus to the MyWallbox App through Wifi or Bluetooth to control your charging sessions in real time and the charger’s LED light color indicates the charging status. Designed to provide a minimalist yet powerful home charging station, it's one of the smallest tethered chargers on the market and comes with built in earthing protection for an easy installation.",
    basePrice: 945,
    olevGrant: 350,
    increments: [
      {
        "upto 10": 0,
        "upto 11-15": 75,
        "upto 16-25": 225,
      },
    ],
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
