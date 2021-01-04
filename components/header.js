import Head from 'next/head'

export default function Header({siteTitle}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/fav-192x192.png" />
        <link rel="icon" href="/fav-32x32.png" />
        <link rel="apple-touch-icon-precomposed" href="/fav-180x180.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="msapplication-TileImage" href="/fav-270x270.png" />
        <meta name="description" content="Victor Nwoguru is a frontend developer who is passionate about building amazing digital products and also sharing his knowledge with fellow devs" />
        <meta name="keywords" content="Frontend Developer, Frontend Engineer, Software Engineer, Technical Writer, Content Creator, Web Developer"></meta>
        <meta
          property="og:image"
          content="/fav-270x270.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>
    </>
  )
}