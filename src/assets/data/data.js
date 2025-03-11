import od1 from "../images/outdoor-image-03.jpg";
import od2 from "../images/services-2.jpg";
import od3 from "../images/services-3.jpg";
import od4 from "../images/outdoor-image-01.jpg";

import he1 from "../images/hiking-v1.jpg";
import he2 from "../images/walking-v1.jpg";

import uj1 from "../images/outdoor-image-04.jpg";
import uj2 from "../images/image-1.jpg";
import uj3 from "../images/snow-1.jpg";
import uj4 from "../images/outdoor-image-01.jpg";

import ws1 from "../images/water-sports-01.jpg";
import ws2 from "../images/water-sports-02.jpg";
import ws3 from "../images/water-sports-03.jpg";
import ws4 from "../images/water-sports-04.jpg";

import wis1 from "../images/winter-sports-01.jpg";
import wis2 from "../images/winter-sports-02.jpg";
import wis3 from "../images/winter-sports-03.jpg";
import wis4 from "../images/winter-sports-04.jpg";

import camp1 from "../images/camp-1.jpg";
import camp2 from "../images/camp-3.jpg";
import camp3 from "../images/camp-3.jpg";
import camp4 from "../images/camp-4.jpg";

const eventsData = [
  {
    image: od1,
    eventLink: "#",
    eventName: "Backpacking Trips",
    eventDescription:
      "Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.",
  },
  {
    image: od2,
    eventLink: "#",
    eventName: "Family Hiking Trips",
    eventDescription:
      "Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.",
  },
  {
    image: od3,
    eventLink: "#",
    eventName: "Water Sports",
    eventDescription:
      "Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.",
  },
  {
    image: od4,
    eventLink: "#",
    eventName: "Winter Sports",
    eventDescription:
      "Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.",
  },
];

const homeEventsData = [
  {
    image: he1,
    eventLink: "#",
    eventName: "Everest Camp Trek",
    eventDescription:
      "Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.",
  },
  {
    image: he2,
    eventLink: "#",
    eventName: "Walking Holidays",
    eventDescription:
      "Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.",
  },
];

const upcomingJourneys = [uj1, uj2, uj3, uj4];

const adventures = [
  {
    type: "Adventure",
    title: "Water Sports",
    description:
      "Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.",
    images: [ws1, ws2, ws3, ws4],
  },
  {
    type: "Snow Adventure",
    title: "Winter Sports",
    description:
      "Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.",
    images: [wis1, wis2, wis3, wis4],
  },
  {
    type: "Forest Tours",
    title: "Camping",
    description:
      "Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.",
    images: [camp1, camp2, camp3, camp4],
  },
];

export { eventsData, homeEventsData, upcomingJourneys, adventures };
