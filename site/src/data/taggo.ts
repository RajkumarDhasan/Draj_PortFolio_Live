// Taggo content for the Stage 4 first slice.
// Copy and role line as agreed in the Stage 4 reassessment ("First-slice details").
// Screens: only the six approved Taggo customer ride screens (1x, 440 x 956).
import confirmPickup from '../assets/taggo/01-confirm-pickup.png';
import fareBeforeYouBook from '../assets/taggo/02-fare-before-you-book.png';
import findingADriver from '../assets/taggo/03-finding-a-driver.png';
import driverAssigned from '../assets/taggo/04-driver-assigned.png';
import rideCompleted from '../assets/taggo/05-ride-completed.png';
import receipt from '../assets/taggo/06-receipt.png';

export const taggo = {
  label: 'Mobility app · Abu Dhabi, UAE',
  name: 'Taggo',
  description:
    'Taggo brings rides, car rental, cargo and car recovery into one UAE app. This ride journey shows the fare and payment method before the rider confirms.',
  role: 'UX/UI designer · iOS and Android',
  cta: 'View the Taggo case study',
  colour: '#F0DD50',
};

export const taggoSteps = [
  {
    n: '01',
    label: 'Confirm pickup',
    image: confirmPickup,
    alt: 'Map of Abu Dhabi with the pickup set to Al Nahyan St and a “Where to?” field below.',
  },
  {
    n: '02',
    label: 'Fare before you book',
    image: fareBeforeYouBook,
    alt: 'Vehicle choices with their fares (Comfort AED 24, Economy AED 40, Premium AED 60), the Visa payment method, and a Confirm & pay button.',
  },
  {
    n: '03',
    label: 'Finding a driver',
    image: findingADriver,
    alt: 'Map with a highlighted search area while the app looks for a driver, and a Cancel ride button.',
  },
  {
    n: '04',
    label: 'Driver assigned',
    image: driverAssigned,
    alt: 'Driver Ahmed K., rated 4.9, in a Toyota Camry, arriving in 3 minutes, with the route shown on the map.',
  },
  {
    n: '05',
    label: 'Ride completed',
    image: rideCompleted,
    alt: 'Ride completed: total fare AED 45.00, 8.2 km in 22 minutes, with a star rating and tip options.',
  },
  {
    n: '06',
    label: 'Receipt',
    image: receipt,
    alt: 'Trip details with pickup and drop-off times, a payment summary of AED 45 paid by Visa, and the driver’s details.',
  },
];

export type TaggoStep = (typeof taggoSteps)[number];
