import { Button } from '@/components/ui/button';
import {
  Activity,
  BadgeDollarSign,
  Gauge,
  LogIn,
  Shield,
  Waves,
} from 'lucide-react';

const infoCards = [
  {
    title: 'Flood Warning',
    description: 'Get notified when water levels are rising.',
    icon: <Waves />,
  },
  {
    title: 'Water Level Insights',
    description: 'Understand how water levels are changing over time.',
    icon: <Gauge />,
  },
  {
    title: '100% accurate',
    description: 'Our apis are always on and always accurate.',
    icon: <Activity />,
  },
  {
    title: '100% realtime',
    description: 'Our apis are always on and always accurate.',
    icon: <Activity />,
  },
  {
    title: '100% secure',
    description: 'Our apis are always on and always accurate.',
    icon: <Shield />,
  },
  {
    title: '100% free',
    description: 'Our apis are always on and always accurate.',
    icon: <BadgeDollarSign />,
  },
];

export default function Home() {
  return (
    <div className="w-75">
      <div className="max-w-3xl">
        <div className="mb-6">
          <h1 className="font-bold text-5xl md:text-8xl tracking-tight ">
            Riverbenk
          </h1>

          <h1 className="font-bold text-1xl md:text-5xl tracking-tight">
            Keep your head above water.
            <br />
          </h1>
        </div>
        <h2 className="text-slate-600 text-xl">
          Riverbenk is a a flood warning, and water level insights application.
          With weather becoming more unpredictable, it&apos;s important to stay
          ahead of the curve. Riverbenk provides you with the tools to do just
          that.
        </h2>
        <div className="flex items-center gap-2 mt-3">
          <Button size="lg">
            <LogIn className="mr-2 h-4 w-4" /> Sign in
          </Button>
          <Button size="lg" variant="outline">
            Find out more
          </Button>
        </div>
      </div>
      <div className="mt-28">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <h2 className="text-slate-600 text-xl mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          libero vel nunc ultricies ultricies. Nullam nec libero vel nunc
          ultricies ultricies. Nullam nec libero vel nunc ultricies ultricies.
        </h2>
      </div>
      <div className="mt-28 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {infoCards.map((card) => (
          <div className="flex gap-4 items-start" key={card.title}>
            <div>{card.icon}</div>
            <div>
              <h2 className="font-bold text-2xl">{card.title}</h2>
              <p className="text-slate-600 mt-1">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
