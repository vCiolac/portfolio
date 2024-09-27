import { SeoInterface } from "@/interfaces/SeoInterface";
import Head from "next/head";

const Seo = ({ title, description }: SeoInterface) => {
    return (
        <Head>
            <meta name="author" content="Victor Ciolac" />
            <meta name="keywords" content="Javascript" />
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <title>{title}</title>

            <link rel="shortcut icon" href="/favicon.png" type="x-icon" />
            <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" />
            <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="vciolac" />
            <meta property="og:type" content="website" key="ogtype" />
            <meta property="og:url" content="https://vciolac.vercel.app/" />
            <meta property="og:image:alt" content={description} />
            <meta property="og:image" content="/contact-bg-2.webp" />

            <meta property="al:ios:app_name" content="vciolac" />
            <meta property="al:ios:url" content="https://vciolac.vercel.app/" />
            <meta property="al:android:app_name" content="vciolac" />
            <meta property="al:android:url" content="https://vciolac.vercel.app/" />

            <link rel="canonical" href="https://vciolac.vercel.app/" />
            <link rel="manifest" href={"/manifest.webmanifest"} />

            <meta name="theme-color" content="#000000" />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="msapplication-navbutton-color" content="#000000" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
            
            <meta name="robots" content="index,follow" />
            <meta name="googlebot" content="index, follow" />
        </Head>
    );
};

export default Seo;
