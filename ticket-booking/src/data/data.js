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
    description: "Taste dishes from over 50 international cuisines.",
    date: "2025-08-20",
    location: "Chicago",
    price: 30,
    thumbnail: foodFestival
  },
  {
    id: 4,
    title: "Marathon 2025",
    description: "Join thousands of runners in this annual marathon event.",
    date: "2025-09-10",
    location: "Boston",
    price: 20,
    thumbnail: marathon
  },
  {
    id: 5,
    title: "Tech Conference",
    description: "Attend keynotes and workshops by leading tech experts.",
    date: "2025-10-05",
    location: "Seattle",
    price: 120,
    thumbnail: techConference
  },
  {
    id: 6,
    title: "Jazz Night",
    description: "Enjoy a night of smooth jazz performances in an intimate setting.",
    date: "2025-11-18",
    location: "New Orleans",
    price: 55,
    thumbnail: jazzNight
  },
];

export default events;
