import React from 'react';
import { Award, Globe, Rocket } from 'lucide-react';

export default function ExperiencePoints() {
  const points = [
    {
      icon: <Award className="w-7 h-7 text-[#B68D40]" />,
      text: "10+ Jahre Erfahrung in digitaler Transformation"
    },
    {
      icon: <Globe className="w-7 h-7 text-[#B68D40]" />,
      text: "Global Lead in über 12 internationalen Märkten"
    },
    {
      icon: <Rocket className="w-7 h-7 text-[#B68D40]" />,
      text: "Strategische Expertise aus Top-Unternehmen weltweit"
    }
  ];

  return (
    <div className="w-full space-y-3 mt-6">
      {points.map((point, index) => (
        <div key={index} className="flex items-center space-x-3">
          {point.icon}
          <span className="text-gray-700 text-sm">{point.text}</span>
        </div>
      ))}
    </div>
  );
}