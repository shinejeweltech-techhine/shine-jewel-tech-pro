import { Machine, Testimonial } from './types';

export const machines: Machine[] = [
  {
    id: '1',
    name: 'Laser Pro Cutter X1',
    category: 'Cutting',
    description: 'High-precision laser cutting machine designed for intricate jewelry designs. Features minimal material loss technology.',
    priceRange: '$12,000 - $15,000',
    features: ['0.01mm Precision', 'Auto-Focus Head', 'Water Cooling System'],
    imageUrl: 'https://picsum.photos/seed/laser1/800/600'
  },
  {
    id: '2',
    name: 'GoldSmith Rolling Mill',
    category: 'Forming',
    description: 'Heavy-duty electric rolling mill for flattening and shaping gold and silver ingots with uniform thickness.',
    priceRange: '$3,500 - $5,000',
    features: ['Dual Speed Control', 'Hardened Steel Rolls', 'Emergency Stop'],
    imageUrl: 'https://picsum.photos/seed/roll1/800/600'
  },
  {
    id: '3',
    name: 'UltraPolish Vibrator 500',
    category: 'Polishing',
    description: 'Industrial grade vibration polishing machine for mass finishing of jewelry pieces. Silent operation.',
    priceRange: '$1,200 - $2,000',
    features: ['5kg Capacity', 'Variable Frequency', 'Noise Reduction'],
    imageUrl: 'https://picsum.photos/seed/polish1/800/600'
  },
  {
    id: '4',
    name: 'GemSet Microscope Pro',
    category: 'Setting',
    description: 'Advanced optical microscope with articulating arm for precise stone setting and inspection.',
    priceRange: '$800 - $1,200',
    features: ['45x Zoom', 'LED Ring Light', 'Ergonomic Stand'],
    imageUrl: 'https://picsum.photos/seed/micro1/800/600'
  },
  {
    id: '5',
    name: 'Casting Furnace Vulcan',
    category: 'Casting',
    description: 'Digital vacuum casting machine compatible with gold, silver, and copper. Ensuring porosity-free castings.',
    priceRange: '$5,500 - $7,000',
    features: ['PID Temp Control', 'Graphite Crucible', 'Rapid Heating'],
    imageUrl: 'https://picsum.photos/seed/cast1/800/600'
  },
  {
    id: '6',
    name: 'EngraveMaster CNC',
    category: 'Engraving',
    description: 'Compact CNC engraving machine for rings and bangles. Includes software for custom fonts and patterns.',
    priceRange: '$4,200 - $6,000',
    features: ['3-Axis Control', 'Diamond Tip', 'User-Friendly Interface'],
    imageUrl: 'https://picsum.photos/seed/engrave1/800/600'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'Owner',
    company: 'Golden Era Jewelers',
    content: "The Laser Pro Cutter has revolutionized our production speed. Shine Jewel Tech provided excellent installation support."
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'Production Manager',
    company: 'Artisan Silvers',
    content: "Reliable machinery and durable build quality. We have been using their Rolling Mill for 3 years without issues."
  }
];