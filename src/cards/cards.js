export const cards = [
  {
    id: 0,
    name: 'YouTube',
    description: 'Add YouTube functionality to your sites and apps',
  },
  {
    id: 1,
    name: 'Behance',
    description: 'Design',
  },
  {
    id: 2,
    name: 'Vimeo',
    description: 'Vimeo Developer API',
  },
  {
    id: 3,
    name: 'Spotify',
    description:
      "View Spotify music catalog, manage users' libraries, get recommendations and more",
  },
  {
    id: 4,
    name: 'Apple Music',
    description:
      'Web service that lets you access information about the media found in the Apple Music Catalog',
  },
  {
    id: 5,
    name: 'Genius',
    description: 'Crowdsourced lyrics and music knowledge',
  },
  {
    id: 6,
    name: 'LibGen',
    description: 'Library Genesis search engine',
  },
  {
    id: 7,
    name: 'Cat Facts',
    description: 'Daily cat facts',
  },
  {
    id: 8,
    name: 'Dog API',
    description: 'Based on the Stanford Dogs Dataset',
  },
];

export function getCardById(id) {
  return cards.find(card => {
    if (card.id === id) {
      return true;
    }
    return false;
  });
}

export default cards;
