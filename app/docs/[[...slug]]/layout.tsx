import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { GithubInfo } from 'fumadocs-ui/components/github-info';

const maps = {
  'Ejunz': <GithubInfo owner="ejunz-dev" repo="Ejunz" />,
  'IoT': <GithubInfo owner="ejunz-dev" repo="Plugins_IoT" />,
  'AI': <GithubInfo owner="ejunz-dev" repo="Plugins_AI" />,
  'KB': <GithubInfo owner="ejunz-dev" repo="Plugins_KB" />,
};

export default async function Layout({ children, params }: { children: ReactNode, params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      links={Object.keys(maps).find((key) => slug?.[0] === key) ? [
        {
          type: 'custom',
          children: maps[slug?.[0] as keyof typeof maps],
        },
      ] : []}
      sidebar={{
        tabs: false,
        banner: (
          <RootToggle
            options={[
              {
                title: 'Ejunz',
                description: 'The Platform',
                url: '/docs/Ejunz',
              },
              {
                title: 'IoT',
                description: 'The Platform',
                url: '/docs/IoT',
              },
              {
                title: 'AI',
                description: 'The Platform',
                url: '/docs/AI',
              },
              {
                title: 'KB',
                description: 'The Platform',
                url: '/docs/KB',
              },  
            ]}
          />
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
