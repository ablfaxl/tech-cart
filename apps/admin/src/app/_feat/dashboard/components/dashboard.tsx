import { Suspense } from 'react';
import {
  CardsSkeleton,
  RevenueChartSkeleton,
} from '../../../_components/skeleton';
import CardWrapper from './card';
import RevenueChart from './revenue-chart';

export const Dashboard = () => {
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 hidden md:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 ">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart
            revenue={[
              {
                month: 'Jan',
                revenue: 1000,
              },
              { month: 'Feb', revenue: 2000 },
              { month: 'Mar', revenue: 3000 },
              { month: 'Mar', revenue: 3000 },
              { month: 'Mar', revenue: 3000 },
              { month: 'Mar', revenue: 2341 },
              { month: 'Mar', revenue: 1342 },
              { month: 'Mar', revenue: 2343 },
              { month: 'Mar', revenue: 3344 },
              { month: 'Mar', revenue: 4345 },
              { month: 'Mar', revenue: 5346 },
            ]}
          />
        </Suspense>
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart
            revenue={[
              {
                month: 'Jan',
                revenue: 1000,
              },
              { month: 'Mar', revenue: 2020 },
              { month: 'Mar', revenue: 3030 },
              { month: 'Feb', revenue: 1010 },
              { month: 'Mar', revenue: 4040 },
              { month: 'Mar', revenue: 2341 },
              { month: 'Mar', revenue: 1342 },
              { month: 'Mar', revenue: 2343 },
              { month: 'Mar', revenue: 3344 },
              { month: 'Mar', revenue: 4345 },
              { month: 'Mar', revenue: 5346 },
            ].reverse()}
          />
        </Suspense>
      </div>
    </main>
  );
};
