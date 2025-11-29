import { Machine, Testimonial } from './types';

export const machines: Machine[] = [
  {
    id: '1',
    name: 'Laser Pro Cutter X1',
    category: 'Cutting',
    description: 'High-precision laser cutting machine designed for intricate jewelry designs. Features minimal material loss technology.',
    priceRange: '$12,000 - $15,000',
    features: ['0.01mm Precision', 'Auto-Focus Head', 'Water Cooling System'],
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-mKVPip0R8h8uf0dCsmd3cIUD_dJzvLxFBXT80fHWhD5PAAcW0zYCPMaVkO-xWDTZsEP2p_8OuP0_OHmyphRbmGb5l_zYa8Vz3w7nYZtWwoGbDxCqwvFJ6Fxss0hG_cSvYGgBAVFSo0FYZSk06FnIpQxnOsLwIkNXXgAE9UPrwtR6J2431-ubBiX3Rsg/s320/Gemini_Generated_Image_3kfjiu3kfjiu3kfj.png'
  },
  {
    id: '2',
    name: 'GoldSmith Rolling Mill',
    category: 'Forming',
    description: 'Heavy-duty electric rolling mill for flattening and shaping gold and silver ingots with uniform thickness.',
    priceRange: '$3,500 - $5,000',
    features: ['Dual Speed Control', 'Hardened Steel Rolls', 'Emergency Stop'],
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVXto4ccsDR7W5vJfh6ObzTDhZY0ARy68t7HmFch9fd8vSKWB7LAEX-cmJDp4ZWgn91Ft_IHuFS_S5Al-DZabjeqv0ftZ2uD1bPu-5vshVt3BaDpcfB2aGwE21-les1lMzAC6Kmfj2JB1wmDPX7Le5dcW9D-uZXcxmHnWyusi4e4DmvZdp7a2riSpFKW0/s1152/Gemini_Generated_Image_5m0ww55m0ww55m0w.png'
  },
  {
    id: '3',
    name: 'UltraPolish Vibrator 500',
    category: 'Polishing',
    description: 'Industrial grade vibration polishing machine for mass finishing of jewelry pieces. Silent operation.',
    priceRange: '$1,200 - $2,000',
    features: ['5kg Capacity', 'Variable Frequency', 'Noise Reduction'],
    imageUrl: '"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSPNkDeY3Zk-y6LewxGxCa3s4-x8MGjZAbsqZXAc3E0Bbb54nUDOelXnK_upKLIMHGWZhOgYk8X4K7kdx2HsD4G3YNsztV4DNx3-fy35meHzcPtY504MpJtcRvmyasHkVqa7qPwWMv_XJUZkfWkzF0or3YzaV3Xru0UHGnUldsovyDC3xLW9wFjDwzRPM/s320/Gemini_Generated_Image_ak7kb7ak7kb7ak7k.png'
  },
  {
    id: '4',
    name: 'GemSet Microscope Pro',
    category: 'Setting',
    description: 'Advanced optical microscope with articulating arm for precise stone setting and inspection.',
    priceRange: '$800 - $1,200',
    features: ['45x Zoom', 'LED Ring Light', 'Ergonomic Stand'],
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxi3HrcP-pgHxfWJgnKWDPkkS0RooG66jBoVgcIfWE0o548r-FYEEVVjPrUdMioXV4_rWP1YvEUD6ws32wUc-xszu7Icww0vTUO1AYIIbUHjeBIESnGuobkAhThdTbZzZhObL3f_MM1FdOgnUTnHwLotmR5EmBFAvNiVCoLajcPXxgzcGuGk5-C7Nnx14/s320/Gemini_Generated_Image_kvsvtakvsvtakvsv.png'
  },
  {
    id: '5',
    name: 'Casting Furnace Vulcan',
    category: 'Casting',
    description: 'Digital vacuum casting machine compatible with gold, silver, and copper. Ensuring porosity-free castings.',
    priceRange: '$5,500 - $7,000',
    features: ['PID Temp Control', 'Graphite Crucible', 'Rapid Heating'],
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhiOOkomdKHw255ClC07F-t2jK3VWoJSaMHJg2fofN0G2sCQvcaQOC6ZavLMQiVv9ccN_dAAxIEi3X52UhZGW6wW491Hm3kAIFdY_oBcpIh1eyr_Rh54rmArvUoh-hv8SyhlJNC_Ry_HBb-qb68hNiClh474NSJxhR_VbGUba6rOTPWhUKrr6lRoMmqgTk/s320/Gemini_Generated_Image_8d800x8d800x8d80.png'
  },
  {
    id: '6',
    name: 'EngraveMaster CNC',
    category: 'Engraving',
    description: 'Compact CNC engraving machine for rings and bangles. Includes software for custom fonts and patterns.',
    priceRange: '$4,200 - $6,000',
    features: ['3-Axis Control', 'Diamond Tip', 'User-Friendly Interface'],
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSPNkDeY3Zk-y6LewxGxCa3s4-x8MGjZAbsqZXAc3E0Bbb54nUDOelXnK_upKLIMHGWZhOgYk8X4K7kdx2HsD4G3YNsztV4DNx3-fy35meHzcPtY504MpJtcRvmyasHkVqa7qPwWMv_XJUZkfWkzF0or3YzaV3Xru0UHGnUldsovyDC3xLW9wFjDwzRPM/s1152/Gemini_Generated_Image_ak7kb7ak7kb7ak7k.png'
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
