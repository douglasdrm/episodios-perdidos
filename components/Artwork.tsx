import type {CSSProperties,ReactNode} from 'react';
import type {ResponsiveArtwork} from '@/content/types';

type ArtworkProps = {
  artwork?: ResponsiveArtwork;
  fallback?: ReactNode;
  className?: string;
  eager?: boolean;
};

export function Artwork({artwork,fallback,className='',eager=false}:ArtworkProps){
  if(!artwork)return fallback??null;
  const desktopPosition=artwork.focalPoint?.desktop??'50% 50%';
  const mobilePosition=artwork.focalPoint?.mobile??desktopPosition;
  const style={
    '--artwork-position-desktop':desktopPosition,
    '--artwork-position-mobile':mobilePosition,
  } as CSSProperties;
  return <picture className={`artwork ${className}`.trim()} style={style}>
    {artwork.mobile&&<source media="(max-width: 760px)" srcSet={artwork.mobile}/>} 
    <img src={artwork.desktop} alt={artwork.alt} loading={eager?'eager':'lazy'} fetchPriority={eager?'high':'auto'} decoding="async"/>
  </picture>;
}
