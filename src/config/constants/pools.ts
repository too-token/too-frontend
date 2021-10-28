import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    isUnlimited: true,
    isLp: false
  },
  {
    sousId: 1,
    stakingToken: serializedTokens.mole,
    earningToken: serializedTokens.mole,
    contractAddress: {
      97: '',
      56: '0x978b25c4Df40cc4cF1B59E5819130e998Aa2138A',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.12',
    sortOrder: 1,
    isFinished: false,
    isLp: false,
    isUnlimited: true,
    rewardsToken: 1200000000000000000000000,
  },
  
]

export default pools
