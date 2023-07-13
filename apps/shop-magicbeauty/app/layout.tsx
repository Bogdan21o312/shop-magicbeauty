import '../../../libs/common/src/shared/assets/styles/globals.scss';
import { MainLayout } from '../widgets';

export const metadata = {
  title: 'Welcome to shop-magicbeauty',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
