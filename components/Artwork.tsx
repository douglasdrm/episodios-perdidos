import {getImageProps} from 'next/image';
import type {CSSProperties,ReactNode} from 'react';
import type {ResponsiveArtwork} from '@/content/types';

type ArtworkProps = {
  artwork?: ResponsiveArtwork;
  fallback?: ReactNode;
  className?: string;
  eager?: boolean;
  sizes?: string;
};

export function Artwork({artwork,fallback,className='',eager=false,sizes='100vw'}:ArtworkProps){
  if(!artwork)return fallback??null;
  const desktopPosition=artwork.focalPoint?.desktop??'50% 50%';
  const mobilePosition=artwork.focalPoint?.mobile??desktopPosition;
  const common={alt:artwork.alt,fill:true,sizes,priority:eager};
  const {props:desktopImage}=getImageProps({src:artwork.desktop,...common});
  const mobileImage=artwork.mobile?getImageProps({src:artwork.mobile,...common}).props:null;
  const style={
    '--artwork-position-desktop':desktopPosition,
    '--artwork-position-mobile':mobilePosition,
  } as CSSProperties;
  return <picture className={`artwork ${className}`.trim()} style={style}>
    {mobileImage&&<source media={`(max-width: ${artwork.mobileBreakpoint??820}px)`} srcSet={mobileImage.srcSet} sizes={mobileImage.sizes}/>}
    <img {...desktopImage}/>
  </picture>;
}
