import logo from '@/public/logo.svg';
import Image from 'next/image';

type LogoProps = {
  width: number;
  height: number;
};

function Logo({ width, height }: LogoProps) {
  return <Image src={logo} alt="RiverBenk" width={width} height={height} />;
}

export { Logo, type LogoProps };
