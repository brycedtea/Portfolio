import hthaiml from './images/hthaiml.png'
import workout from './images/workout-tracker.png'
import dragon from './images/dragon.png'

const PORTFOLIODATA = [
  {
    id: 1,
    img: hthaiml,
    title: 'REST-rant',
    description:
      'This is a restaurant review website similar to YELP. This was created with React and features full CRUD functionality.',
    github: 'https://github.com/brycedtea/project-REST-rant',
    demo: 'Coming soon',
  },
  {
    id: 2,
    img: workout,
    title: 'Workout Tracker',
    description:
      'This is a workout tracker app built with the MERN stack. This was created with React/Bootstrap and features full CRUD functionality ',
    github: 'https://github.com/0scarC/KSTEC-MP2/tree/JulianNew',
    demo: 'Coming soon',
  },
  {
    id: 3,
    img: dragon,
    title: 'Tale of the Dragon',
    description:
      'This is a web game built with vanilla JavaScript. It was inspired by one of my favorite childhood games: Snake (originally played on the Nokia cell phone). ',
    github: 'https://github.com/brycedtea/milestone-project-1-dragon-game',
    demo: 'Coming soon',
  },
]

export function portfolioData() {
  return PORTFOLIODATA
}

export function getPortfolioId(id) {
  return PORTFOLIODATA.find((portfolio) => portfolio.id === id)
}