import Nav from './_components/nav';
import './global.css';

export const metadata = {
  title: 'Welcome to store',
  description: 'Generated by nx monorepo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
