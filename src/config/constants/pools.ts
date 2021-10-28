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
    sousId: 221,
    stakingToken: serializedTokens.too,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '',
      56: '0xd190d1D80823a5975BeF7e73174d8aCf75B9e774',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0015',
    sortOrder: 1,
    isFinished: false,
    isLp: false,
    isUnlimited: false,
  },
  
]

export default pools
