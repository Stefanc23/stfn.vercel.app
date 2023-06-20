import React from 'react';

import Card from '@/components/Card';

export interface ExperienceCardProps {
  from: string;
  until?: string;
  title: string;
  type?: string;
  company: string;
  location: string;
  detail: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  from,
  until = 'Present',
  type = '',
  title,
  company,
  location,
  detail,
}) => {
  return (
    <Card
      overline={`${from} - ${until}`}
      title={type ? `${title} (${type})` : title}
      subTitle={`${company} (${location})`}
    >
      {detail}
    </Card>
  );
};

export default ExperienceCard;
