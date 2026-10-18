import type {ReactNode} from 'react';
import type {ResponsiveArtwork} from '@/content/types';
import {Artwork} from './Artwork';

type HeroArtworkProps={
  artwork?:ResponsiveArtwork;
  fallback?:ReactNode;
  priority?:boolean;
  className?:string;
};

export function HeroArtwork({artwork,fallback,priority=false,className=''}:HeroArtworkProps){
  return <Artwork artwork={artwork} fallback={fallback} eager={priority} className={`hero-artwork ${className}`.trim()}/>;
}
