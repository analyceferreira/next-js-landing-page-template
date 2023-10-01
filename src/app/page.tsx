import '@styles/global.css';

import { Meta } from '@layout/Meta';
import { Section } from '@layout/Section';
import { Footer } from '@templates/Footer';
import { Hero } from '@templates/Hero';
import { AppConfig } from '@utils/AppConfig';

const Base: React.FC = () => {
  return (
    <div className="antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <Section className="min-h-[65vh]"> Content here </Section>

      <Footer />
    </div>
  );
};

export default Base;
