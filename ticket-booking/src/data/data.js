import rockConcert from '../assets/rock_concert.jpg';
import artExhibition from '../assets/art_exhibition.jpg';
import foodFestival from '../assets/food_festival.jpg';
import marathon from '../assets/marathon.jpg';
import techConference from '../assets/tech_conference.jpg';
import jazzNight from '../assets/jazz_night.jpg';

const events = [
  {
    id: 1,
    title: "Rock Concert",
    description: "Experience an epic night of rock music performances.",
    date: "2025-06-15",
    location: "New York City",
    price: 75,
    thumbnail: rockConcert
  },
  {
    id: 2,
    title: "Art Exhibition",
    description: "Explore the latest modern art installations from around the world.",
    date: "2025-07-02",
    location: "San Francisco",
    price: 40,
    thumbnail: artExhibition
  },
  {
    id: 3,
    title: "Food Festival",
    description: "Enjoy many homemade cuisines from around the world.",
    date: "2025-08-02",
    location: "Wichita",
    price: 20,
    thumbnail: foodFestival
  },
  {
    id: 4,
    title: "Marathon",
    description: "Test your skills and athletic ability in this challenging marathon.",
    date: "2025-08-31",
    location: "Dallas",
    price: 40,
    thumbnail: marathon
  },
  {
    id: 5,
    title: "Tech Conference",
    description: "Hear stories and get inspired by technology and the great minds surrounding it.",
    date: "2025-11-05",
    location: "Kansas CIty",
    price: 25,
    thumbnail: techConference
  },
  {
    id: 6,
    title: "Jazz Night",
    description: "Listen to some of New Orleans best musicians as you have drinks on us.",
    date: "2025-06-15",
    location: "New Orleans",
    price: 30,
    thumbnail: jazzNight
  },
];

export default events;
