export const HAMBURGER_ICON =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png";

export const YOUTUBE_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png";

export const USER_ICON =
  "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg";

export const namesOfButton = [
  "All",
  "Music",
  "Mixes",
  "Live",
  "Train",
  "India",
  "Cooking",
  "Swiggy",
  "Circus",
  "Water",
  "Sky",
  "Fashion",
  "Dj",
  "Podcast",
  "Gym",
];

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${GOOGLE_API_KEY}`;
