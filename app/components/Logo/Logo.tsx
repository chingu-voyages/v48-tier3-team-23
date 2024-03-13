import Image from 'next/image';
import logo from '../../Logo.svg';

type LogoProps = {
  width: number;
  height: number;
};

function Logo({ width, height }: LogoProps) {
  return <Image src={logo} alt="RiverBenk" width={width} height={height} />;
}

export { Logo, type LogoProps };
