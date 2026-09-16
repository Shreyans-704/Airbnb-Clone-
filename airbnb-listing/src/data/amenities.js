// Amenities data organized by category
// From screenshots: Kitchen, Wifi, Dedicated workspace, Free parking,
// Pool, Hot tub, Pets allowed, Exterior security cameras, Carbon monoxide alarm, Smoke alarm
// Amenities modal shows categories: Bathroom, Bedroom and laundry, etc.

export const amenitiesPreview = [
  { name: 'Kitchen', icon: 'utensils-crossed', available: true },
  { name: 'Wifi', icon: 'wifi', available: true },
  { name: 'Dedicated workspace', icon: 'laptop', available: true },
  { name: 'Free parking on premises', icon: 'car', available: true },
  { name: 'Pool', icon: 'waves', available: true },
  { name: 'Hot tub', icon: 'bath', available: true },
  { name: 'Pets allowed', icon: 'paw-print', available: true },
  { name: 'Exterior security cameras on property', icon: 'camera', available: true },
  { name: 'Carbon monoxide alarm', icon: 'alarm-smoke', available: true },
  { name: 'Smoke alarm', icon: 'alarm-smoke', available: true },
];

export const amenitiesAll = [
  {
    category: 'Bathroom',
    items: [
      { name: 'Hairdryer', icon: 'wind', available: true },
      { name: 'Cleaning products', icon: 'spray-can', available: true },
      { name: 'Shampoo', icon: 'droplets', available: true },
      { name: 'Hot water', icon: 'thermometer', available: true },
      { name: 'Shower gel', icon: 'droplets', available: true },
    ]
  },
  {
    category: 'Bedroom and laundry',
    items: [
      { name: 'Washing machine', icon: 'washing-machine', available: true },
      { name: 'Hangers', icon: 'hanger', available: true },
      { name: 'Bed linen', icon: 'bed', available: true },
      { name: 'Cotton linen', icon: 'bed', available: true },
      { name: 'Extra pillows and blankets', icon: 'pillow', available: true },
      { name: 'Iron', icon: 'iron', available: true },
      { name: 'Clothes drying rack', icon: 'shirt', available: true },
    ]
  },
  {
    category: 'Entertainment',
    items: [
      { name: 'TV', icon: 'tv', available: true },
      { name: 'Books and reading material', icon: 'book-open', available: true },
    ]
  },
  {
    category: 'Family',
    items: [
      { name: 'Baby bath', icon: 'bath', available: true },
      { name: 'Baby monitor', icon: 'monitor', available: true },
    ]
  },
  {
    category: 'Heating and cooling',
    items: [
      { name: 'Air conditioning', icon: 'snowflake', available: true },
      { name: 'Ceiling fan', icon: 'fan', available: true },
      { name: 'Portable fans', icon: 'fan', available: true },
    ]
  },
  {
    category: 'Home safety',
    items: [
      { name: 'Smoke alarm', icon: 'alarm-smoke', available: true },
      { name: 'Carbon monoxide alarm', icon: 'alarm-smoke', available: true },
      { name: 'Fire extinguisher', icon: 'flame', available: true },
      { name: 'First aid kit', icon: 'cross', available: true },
      { name: 'Exterior security cameras on property', icon: 'camera', available: true },
    ]
  },
  {
    category: 'Internet and office',
    items: [
      { name: 'Wifi', icon: 'wifi', available: true },
      { name: 'Dedicated workspace', icon: 'laptop', available: true },
    ]
  },
  {
    category: 'Kitchen and dining',
    items: [
      { name: 'Kitchen', icon: 'utensils-crossed', available: true },
      { name: 'Refrigerator', icon: 'thermometer', available: true },
      { name: 'Microwave', icon: 'microwave', available: true },
      { name: 'Cooking basics', icon: 'chef-hat', available: true },
      { name: 'Dishes and cutlery', icon: 'utensils', available: true },
      { name: 'Stove', icon: 'flame', available: true },
      { name: 'Oven', icon: 'cooking-pot', available: true },
      { name: 'Kettle', icon: 'cup-soda', available: true },
      { name: 'Toaster', icon: 'sandwich', available: true },
      { name: 'Dining table', icon: 'armchair', available: true },
      { name: 'Wine glasses', icon: 'wine', available: true },
      { name: 'Coffee maker', icon: 'coffee', available: true },
    ]
  },
  {
    category: 'Location features',
    items: [
      { name: 'Beach access', icon: 'umbrella', available: true },
      { name: 'Resort access', icon: 'building', available: true },
    ]
  },
  {
    category: 'Outdoor',
    items: [
      { name: 'Private patio or balcony', icon: 'fence', available: true },
      { name: 'Outdoor furniture', icon: 'armchair', available: true },
      { name: 'Outdoor dining area', icon: 'utensils', available: true },
      { name: 'BBQ grill', icon: 'flame', available: true },
    ]
  },
  {
    category: 'Parking and facilities',
    items: [
      { name: 'Free parking on premises', icon: 'car', available: true },
      { name: 'Pool', icon: 'waves', available: true },
      { name: 'Hot tub', icon: 'bath', available: true },
      { name: 'Gym', icon: 'dumbbell', available: true },
      { name: 'Elevator', icon: 'arrow-up-down', available: true },
    ]
  },
  {
    category: 'Services',
    items: [
      { name: 'Pets allowed', icon: 'paw-print', available: true },
      { name: 'Luggage dropoff allowed', icon: 'luggage', available: true },
      { name: 'Long term stays allowed', icon: 'calendar', available: true },
      { name: 'Self check-in', icon: 'key', available: true },
      { name: 'Building staff', icon: 'user', available: true },
    ]
  },
];

export const totalAmenityCount = 50;
