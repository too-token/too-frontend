import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'TOOSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by TOOSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('TOOSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('TOOSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('TOOSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('TOOSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('TOOSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('TOOSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('TOOSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('TOOSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('TOOSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('TOOSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('TOOSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('TOOSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('TOOSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('TOOSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('TOOSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('TOOSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('TOOSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('TOOSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('TOOSwap Info & Analytics')}`,
        description: 'View statistics for TOOSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('TOOSwap Info & Analytics')}`,
        description: 'View statistics for TOOSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('TOOSwap Info & Analytics')}`,
        description: 'View statistics for TOOSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('TOOSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('TOOSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('TOOSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('TOO Squad')} | ${t('TOOSwap')}`,
      }
    default:
      return null
  }
}
