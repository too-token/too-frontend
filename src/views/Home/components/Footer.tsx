import React from 'react'
import styled from 'styled-components'
import {Flex, Heading, Text, Link, BackgroundImage} from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Container from 'components/Layout/Container'
import { useWeb3React } from '@web3-react/core'
import SunburstSvg from './SunburstSvg'
import useTheme from "../../../hooks/useTheme";

const BgWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: ${({ theme }) => (theme.isDark ? 'linear-gradient(180deg, rgba(14, 10, 23, 1) 0%, rgba(17, 196, 124, 1) 100%)' : 'white')};
  background-image: url("/images/home/flying-pancakes/tree.png");
  background-position: bottom;
  background-size: cover;
`

const StyledSunburst = styled(SunburstSvg)`
  height: 350%;
  width: 350%;

  ${({ theme }) => theme.mediaQueries.xl} {
    height: 400%;
    width: 400%;
  }
`

const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const FloatingPancakesWrapper = styled(Container)`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  visibility: hidden;

  ${({ theme }) => theme.mediaQueries.md} {
    visibility: visible;
  }
`

const Footer = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()

  return (
    <>
      <BgWrapper>
        <></>
      </BgWrapper>
      <Wrapper>
        <></>
      </Wrapper>
    </>
  )
}

export default Footer
