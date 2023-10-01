import { Background } from '@components/background/Background';
import { NavbarTwoColumns } from '@components/navigation/NavbarTwoColumns';
import { Section } from '@layout/Section';
import { Logo } from '@templates/Logo';
import Link from 'next/link';

const Hero = () => (
  <Background color="bg-secondary-background">
    <Section yPadding=" py-6 ">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">Link</Link>
        </li>
        <li>
          <Link href="/">Link</Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
);

export { Hero };
