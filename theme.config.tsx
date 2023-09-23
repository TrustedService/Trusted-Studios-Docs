import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';

function useHead() {
    const { asPath } = useRouter();
    const { frontMatter, title } = useConfig();
    const url = `https://docs.trusted-studios.eu${asPath}`;
    const description = frontMatter.description || "Documentation for Trusted Studios' resources";
  
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/imgs/logo.png" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:url" content={url} />
      </>
    );
  }

function useNextSeoProps() {
    const { asPath } = useRouter();
    const arr = asPath.replace(/[-_]/g, ' ').split('/');
    const category = (arr[1][0] !== '#' && arr[1]) || 'Trusted Studios';
    const rawTitle = arr[arr.length - 1];
    const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

    return {
        titleTemplate: `${rawTitle === category ? 'Documentation' : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())} - ${title}`,
    };
}

const config: DocsThemeConfig = {
    logo: (
        <div
          style={{
            paddingLeft: '50px',
            lineHeight: '38px',
            background: "url('/imgs/logo.png') no-repeat left",
            backgroundSize: '38px',
            fontWeight: 550,
          }}
        >
          Trusted Studios
        </div>
      ),
    project: {
        link: 'https://github.com/TrustedService/Trusted-Studios-Docs',
    },
    chat: {
        link: 'https://discord.gg/hmmM89nCdX',
    },
    docsRepositoryBase: 'https://github.com/TrustedService/Trusted-Studios-Docs/blob/main',
    footer: {
        text: 'Trusted Studios',
    },
    useNextSeoProps: useNextSeoProps,
    head: useHead,
    primaryHue: { dark: 30, light: 290 },
}

export default config
