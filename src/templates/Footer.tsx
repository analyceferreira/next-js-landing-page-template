import { Background } from '@components/background/Background';
import { CenteredFooter } from '@components/footer/CenteredFooter';
import { Section } from '@layout/Section';
import { Logo } from '@templates/Logo';
import Link from 'next/link';

const Footer: React.FC = () => (
  <Background color="bg-secondary-background">
    <Section>
      <CenteredFooter logo={<Logo />}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Docs</Link>
        </li>
        <li>
          <Link href="/">GitHub</Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
