import React, { createContext } from 'react'
import notes_app_img from '../assets/img/app_notes.png'
import bank_app_img from '../assets/img/bank-app.png'
import calculator_app_img from '../assets/img/calculator-app.png'
import porfolio_app_img from '../assets/img/portfolio-app.png'
import ticket_app_img from '../assets/img/tip-ticket-app.png'
import twitch_finder_app_img from '../assets/img/twitch-finder-app.png'

export const DataContext = createContext()

export const DataContextProvider = ({ children }) => {
  // data of all proyects
  const info = [
    {
      id: 1,
      name: 'yourNotes',
      description:
        'A web application to save, edit and delete your notes based on a user registration and login.',
      tech: ['JavaScript', 'HBS', 'Css', 'SQL', 'Railway.app'],
      img: notes_app_img,
      github: 'https://github.com/valenne/notes-app',
      'external link': 'https://notes-app-production-1a7e.up.railway.app/'
    },
    {
      id: 2,
      name: 'Banco Digital de Chile',
      description:
        'Clone application of a banking institution, which allows you to make money transfers, balance review, update personal data and others.',
      tech: ['JavaScript', 'HBS', 'Css', 'SQL', 'Railway.app'],
      img: bank_app_img,
      github: 'https://github.com/valenne/bank-app',
      'external link': 'https://bank-app-production-68d0.up.railway.app/'
    },
    {
      id: 3,
      name: 'Portfolio: Nelson Venegas',
      description:
        'Website similar to a personal curriculum, disclosing personal contact information and completed projects.',
      tech: ['JavaScript', 'React', 'Css', 'GitHub Pages'],
      img: porfolio_app_img,
      github: 'https://github.com/valenne/valentin-portfolio',
      'external link': 'https://valenne.github.io/valentin-portfolio/'
    },
    {
      id: 4,
      name: 'Age Calculator App',
      description:
        'Choose a DATE, we calculate the number of years, months, and days that have passed since that date.',
      tech: ['JavaScript', 'React', 'TypeScript', 'CSS', 'NextJS'],
      img: calculator_app_img,
      github: 'https://github.com/valenne/age-calculator',
      'external link': 'https://age-calculator-valenne.vercel.app/'
    },
    {
      id: 5,
      name: 'Tip Ticket App',
      description:
        "Don't you have a calculator? You have to use your smartphone to calculate the total of your bill. Do it in a simple way with this application, enter the total consumption, percentage of tip and number of people, and that's it.",
      tech: ['JavaScript', 'React', 'TypeScript', 'CSS', 'NextJS'],
      img: ticket_app_img,
      github: 'https://github.com/valenne/tip-ticket-app',
      'external link': 'https://tip-ticket-app.vercel.app/'
    },
    {
      id: 6,
      name: 'Twitch Finder App',
      description:
        "Twitch Finder is the easiest way to discover new Twitch channels. Simply enter a game, streamer name, or keyword, and we'll show you a list of channels that match your criteria. You can also browse channels by category, game, or popularity.",
      tech: ['JavaScript', 'React', 'TypeScript', 'CSS', 'NextJS'],
      img: twitch_finder_app_img,
      github:
        'https://github.com/valenne/twitch-finder/tree/main/astro-landing-page',
      'external link': 'https://twitch-finder-valenne.vercel.app/'
    }
  ]
  return <DataContext.Provider value={info}>{children}</DataContext.Provider>
}
