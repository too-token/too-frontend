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
  {
    sousId: 222,
    stakingToken: serializedTokens.too,
    earningToken: serializedTokens.wbnb,
    contractAddress: {
      97: '',
      56: '0x32b9b30c9dF30d33777194A7EDcef70e282BE0e9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00011111',
    sortOrder: 1,
    isFinished: false,
    isLp: false,
    isUnlimited: false,
  },
  {
    sousId: 223,
    stakingToken: serializedTokens.too,
    earningToken: serializedTokens.goo,
    contractAddress: {
      97: '',
      56: '0xaA35A2cc2B1dD4975520f19021002c728BEEaec2',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '444.444444',
    sortOrder: 1,
    isFinished: false,
    isLp: false,
    isUnlimited: false,
  },
  {
    sousId: 224,
    stakingToken: serializedTokens.too,
    earningToken: serializedTokens.too,
    contractAddress: {
      97: '',
      56: '0x789dFd971F3e3d85b1F9d68E4beEE4c924D5DDd4',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '444.444444',
    sortOrder: 1,
    isFinished: false,
    isLp: false,
    isUnlimited: false,
  },
]

export default pools
