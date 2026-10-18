import type {Metadata,Viewport} from 'next';
import './globals.css';
import {SiteHeader} from '@/components/SiteHeader';
import {SiteFooter} from '@/components/SiteFooter';
import {siteConfig} from '@/lib/site-config';
const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||(process.env.VERCEL_PROJECT_PRODUCTION_URL?`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`:'http://localhost:3000');
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:siteConfig.name,template:`%s | ${siteConfig.name}`},description:siteConfig.description,openGraph:{title:siteConfig.name,description:siteConfig.description,type:'website',locale:siteConfig.locale},twitter:{card:'summary_large_image',title:siteConfig.name,description:siteConfig.description}};
export const viewport:Viewport={themeColor:siteConfig.themeColor,colorScheme:'dark light'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR" data-theme="dark"><body><SiteHeader/><main>{children}</main><SiteFooter/></body></html>}
