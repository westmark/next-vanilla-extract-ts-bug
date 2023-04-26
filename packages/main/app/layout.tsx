import './base.css';
import dns from 'dns';

dns.setDefaultResultOrder('ipv4first');

type RootLayoutProps = React.PropsWithChildren<object>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
