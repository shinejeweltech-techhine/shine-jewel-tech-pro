import { Machine, Testimonial } from './types';

export const machines: Machine[] = [
  {
    id: '1',
    name: 'Laser Pro Cutter X1',
    category: 'Cutting',
    description: 'High-precision laser cutting machine designed for intricate jewelry designs. Features minimal material loss technology.',
    priceRange: '$12,000 - $15,000',
    features: ['0.01mm Precision', 'Auto-Focus Head', 'Water Cooling System'],
    imageUrl: 'https://github.com/shinejeweltech-techhine/shine-jewel-tech-pro/blob/main/imags/machine1.png'
  },
  {
    id: '2',
    name: 'GoldSmith Rolling Mill',
    category: 'Forming',
    description: 'Heavy-duty electric rolling mill for flattening and shaping gold and silver ingots with uniform thickness.',
    priceRange: '$3,500 - $5,000',
    features: ['Dual Speed Control', 'Hardened Steel Rolls', 'Emergency Stop'],
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjvr89rJZDT8cNf4qGayJBSPsiRYlnqghEKEVuylncYRBhHwoUlO4ESxtXgx3Ivz43GcZLc80-7i8GfKUuLLRApF_5oA_yp0zM8XcsjvJ84XhOVg9kTFSPTUNnYDqxcPupubApNC0dDRBc7Hi4sPccPAFufkmVIDlY4vzgdgz1D610mchMjwcV9Gyz6ms/s1024/machine2.png'
  },
  {
    id: '3',
    name: 'UltraPolish Vibrator 500',
    category: 'Polishing',
    description: 'Industrial grade vibration polishing machine for mass finishing of jewelry pieces. Silent operation.',
    priceRange: '$1,200 - $2,000',
    features: ['5kg Capacity', 'Variable Frequency', 'Noise Reduction'],
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvgoju6xOnq9BbemRjK9bDWcw0HIzhCb7ttk9P0vKHDWcKtCnT5aEFuE5WuCxW00-7J_SaCqz9EG7lBTzSZACZzR8iXAi3yfkjjM7uh2sJ_valJSjWOOsdFW1tntaxpO0lpKGZgaeLBdF_SLPKRCtJKstWlkID3zfkeQZ1E8fnBtcapRmjbVrHcxza0tc/s1024/machine3.png'
  },
  {
    id: '4',
    name: 'GemSet Microscope Pro',
    category: 'Setting',
    description: 'Advanced optical microscope with articulating arm for precise stone setting and inspection.',
    priceRange: '$800 - $1,200',
    features: ['45x Zoom', 'LED Ring Light', 'Ergonomic Stand'],
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIXB5KXHr4GxuXRy-I8dYP0b6U52Y2w7znPoUSOcvdcUKxzFwaYYn8c43UrLqc6O7x4TbUd_WZOKyk2MUURnVkqD-gWq0k6uMHmTRJl-BKjhTkDiVM-K6CRzb4Hl62myL_WyEakcRCZDp9XcCYrmU0Oes5oVF8lWRbR8fuE5XJ2p4QFEb99k0fM4Jf970/s1056/machine4.png'
  },
  {
    id: '5',
    name: 'Casting Furnace Vulcan',
    category: 'Casting',
    description: 'Digital vacuum casting machine compatible with gold, silver, and copper. Ensuring porosity-free castings.',
    priceRange: '$5,500 - $7,000',
    features: ['PID Temp Control', 'Graphite Crucible', 'Rapid Heating'],
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwlQIo2na-QZ8tZ83Q0P07kqJBzew9HuH9K3CFD0VW6QCAT59Jo9yEO7am-j018sO37IH58PFRWtvDRdzfmrY3CCUqsU8AKFfNWYpN7MQQYhz9zLJFcH8ghARVYX0aSuJ24ds0IdfyuDeLx82PxYuFBg5lG32LezDZOeq21KJ5cWMqhyt6xYgFdtb-USo/s1024/machine5.png'
  },
  {
    id: '6',
    name: 'EngraveMaster CNC',
    category: 'Engraving',
    description: 'Compact CNC engraving machine for rings and bangles. Includes software for custom fonts and patterns.',
    priceRange: '$4,200 - $6,000',
    features: ['3-Axis Control', 'Diamond Tip', 'User-Friendly Interface'],
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjoDt08_SELP80srBGhMTqNZ-RIV9RIm-KPpu9UJpkeBxX_UctGfEERUD_fuRYe-v-_4ow5Vmnht1s6UU-7kNFmDoxE2M1h8PPFrQd7q8HToPmmbyFpUHQGvXQ_WJgn4lCUq6j6jWda5QSX9cESaq58lGIsksXX-dLV-X_LP1Gyuq9q_JNt-N_vmvNA-nE/s1120/machine6.png'
  },
 {
    id: '7',
    name: 'EngraveMaster CNC',
    category: 'Engraving',
    description: 'Compact CNC engraving machine for rings and bangles. Includes software for custom fonts and patterns.',
    priceRange: '$4,200 - $6,000',
    features: ['3-Axis Control', 'Diamond Tip', 'User-Friendly Interface'],
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRXzbdi5AdV8eOaXC6me0dcjMzphcJzj28zh__Bmm2yLc8SaCvacARq2bF55thmZXg9ZajDS-vTfIsm2j0PIwYdtWh0MjoEvnHFKjk2qyfNqLhuDlb-aBr-W5QMdzO_ntP7-ZYJnvg8HWskkTQ-zGmHstQt240r_9hkuzE8tH-ROVTIaMVAEgHonyxjl8/s1024/machine7.png'
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
