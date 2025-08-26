import { GithubInfo } from 'fumadocs-ui/components/github-info';
import Link from 'next/link';
import Image from 'next/image';
import { ImageCarousel } from './images';
import { Rocket, Zap, Box, Shield, Puzzle, Github, MousePointer } from 'lucide-react';

const contributors = ['Jacka10086'];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col max-w-3xl mx-auto px-4 py-16 overflow-x-hidden">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-12 h-12">
          <Image
            src="/favicon.png"
            alt="Ejunz Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold">
          Ejunz Development Team
        </h1>
      </div>
      <p className="text-fd-muted-foreground text-lg mb-8">
        多功能一站式平台。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="group block p-6 rounded-lg border border-fd-border hover:shadow-lg transition-all">
          <Link
            href="/docs/Ejunz"
            className="hover:border-fd-border-hover"
          >
            <h3 className="text-xl font-semibold mb-2">
              EJUNZ - 多功能一站式平台
            </h3>
            <p className="text-fd-muted-foreground">
              xxx,xxx,xxx,xxx,xxx
            </p>
          </Link>
          <GithubInfo
            owner="ejunz-dev"
            repo="Ejunz"
          />
        </div>
        {/* <div className="group block p-6 rounded-lg border border-fd-border hover:shadow-lg transition-all">
          <Link
            href="/docs/Tools"
            className="hover:border-fd-border-hover"
          >
            <h3 className="text-xl font-semibold mb-2">
              IoT - 物联网支持
            </h3>
            <p className="text-fd-muted-foreground">
              多平台支持、状态监控、设备管理
            </p>
          </Link>
          <GithubInfo
            owner="ejunz-dev"
            repo="Plugins_IoT"
          />
        </div> */}
      </div>
      <ImageCarousel />

      <div className="col-span-full flex flex-row items-start justify-center border-l border-t p-8 pb-2 text-center">
        <h2 className="bg-fd-primary text-fd-primary-foreground px-1 text-2xl font-semibold">优势特性</h2>
        <MousePointer className="w-6 h-6 -ml-1 mt-8" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-2">
            <Rocket className="w-6 h-6" />
            <h3 className="text-xl font-semibold">xxx</h3>
          </div>
          <p className="text-fd-muted-foreground">
            XXXX
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-6 h-6" />
            <h3 className="text-xl font-semibold">xxx</h3>
          </div>
          <p className="text-fd-muted-foreground">
            XXXX
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-2">
            <Box className="w-6 h-6" />
            <h3 className="text-xl font-semibold">xxx</h3>
          </div>
          <p className="text-fd-muted-foreground">
            XXXX
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-6 h-6" />
            <h3 className="text-xl font-semibold">xxx</h3>
          </div>
          <p className="text-fd-muted-foreground">
            XXXX
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-2">
            <Puzzle className="w-6 h-6" />
            <h3 className="text-xl font-semibold">xxx</h3>
          </div>
          <p className="text-fd-muted-foreground">
            XXXX
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-2">
            <Github className="w-6 h-6" />
            <h3 className="text-xl font-semibold">xxx</h3>
          </div>
          <p className="text-fd-muted-foreground">
            XXXX
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <p className="text-fd-muted-foreground text-lg mb-8">
          <span className="text-red-500">❤</span> EJUNZ 由开源社区驱动。
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {contributors.map((username) => (
            <div
              key={username}
              className="w-12 h-12 rounded-full overflow-hidden bg-fd-subtle relative group"
            >
              <Image
                src={`https://github.com/${username}.png`}
                alt={`Contributor ${username}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <p className="text-fd-muted-foreground">
          活跃贡献者
        </p>
      </div>
    </main>
  );
}
