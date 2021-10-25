import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://t.me/tooofficial2',
      },
      {
        label: t('Blog'),
        href: 'https://tootoken.vip/',
      },
      {
        label: t('Community'),
        href: 'https://t.me/tooofficial2',
      },
      {
        label: t('TOO token'),
        href: 'https://tootoken.vip/',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://tootoken.vip/',
        isHighlighted: true,
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://t.me/tooofficial2',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://t.me/tooofficial2',
      },
      {
        label: t('Guides'),
        href: 'https://t.me/tooofficial2',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/too-token/too-frontend.git',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.tooswap.io',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://t.me/tooofficial2',
      },
      {
        label: t('Audits'),
        href: 'https://t.me/tooofficial2',
      },
      {
        label: t('Careers'),
        href: 'https://t.me/tooofficial2',
      },
    ],
  },
]
