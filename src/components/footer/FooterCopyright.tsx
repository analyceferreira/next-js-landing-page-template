import { AppConfig } from '@utils/AppConfig';

const FooterCopyright = () => (
  <div className=" [&_a:hover]:underline [&_a]:text-primary">
    © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
    <a href={AppConfig.createByLink}>{AppConfig.createdBy}</a>.
  </div>
);

export { FooterCopyright };
