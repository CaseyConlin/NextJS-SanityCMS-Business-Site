export const maxLengthRule = (text: string | undefined, max: number) => {
  if (!text) return 'Title is required'
  if (text.length > max) {
    return `Title must be less than ${max} characters`
  }
  return true
}

export const getJSONLD = (data?: any) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'Macs Iron Works NY',
    location: {
      '@type': 'Place',
      name: 'Macs Iron Works NY',
      telephone: '(845) 706-6905',
      url: 'https://macsironworksny.com',
      email: 'MacsIronWorks@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '115 Old Rte 209',
        addressLocality: 'Hurley',
        postalCode: '12433',
        addressRegion: 'NY',
        addressCountry: 'US',
        openingHours: 'Mo,Tu,We,Th,Fr 09:00-17:00',
      },
    },
    image: [`/logos/miw-updated-logo-light.png`],
  }
  return jsonLd
}
