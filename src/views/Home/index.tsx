import React from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import {useWeb3React} from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import {PageMeta} from 'components/Layout/Page'
import {Flex, Heading, Link, Text} from "@pancakeswap/uikit";
import Hero from './components/Hero'
import {swapSectionData, earnSectionData, cakeSectionData} from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import {WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight} from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import ConnectWalletButton from "../../components/ConnectWalletButton";
import {useTranslation} from "../../contexts/Localization";

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;
  ${({theme}) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({theme}) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Wrapper = styled(Flex)`
  padding-top: 10rem;
  padding-bottom: 8rem;
  z-index: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const Home: React.FC = () => {
    const {t} = useTranslation()
    const {theme} = useTheme()
    const {account} = useWeb3React()

    const HomeSectionContainerStyles = {margin: '0', width: '100%', maxWidth: '968px'}

    return (
        <>
            <PageMeta/>
            <StyledHeroSection
                innerProps={{style: {margin: '0', width: '100%'}}}
                background={
                    theme.isDark
                        ? 'linear-gradient(90deg, rgba(14, 10, 23, 0.41) 0%, rgba(97, 208, 139, 0.41) 100%)'
                        : 'linear-gradient(139.73deg, #ECF7C4 0%, #FEF4D0 100%)'
                }
                index={2}
                hasCurvedDivider={false}
            >
                {account && (
                    <UserBannerWrapper>
                        <UserBanner/>
                    </UserBannerWrapper>
                )}
                <Hero/>
            </StyledHeroSection>
            <PageSection
                innerProps={{style: {margin: '0', width: '100%'}}}
                background={
                    theme.isDark
                        ? 'linear-gradient(180deg, rgba(14, 10, 23, 0.27) 0%, rgba(97, 208, 139, 0.27) 100%)'
                        : 'linear-gradient(180deg, #FFFFFF 22%, #F5FAE1 100%)'
                }
                index={2}
                hasCurvedDivider={false}
            >
                <MetricsSection/>
            </PageSection>
            <PageSection
                innerProps={{style: HomeSectionContainerStyles}}
                background={theme.isDark ? '#0E0A17' : '#FFFFFF'}
                index={2}
                hasCurvedDivider={false}
            >
                <OuterWedgeWrapper>
                    <InnerWedgeWrapper top fill={theme.isDark ? 'rgba(97, 208, 139, 0.288)' : '#F5FAE1'}>
                        <WedgeTopLeft/>
                    </InnerWedgeWrapper>
                </OuterWedgeWrapper>
                <SalesSection {...swapSectionData} />
            </PageSection>
            <PageSection
                innerProps={{style: HomeSectionContainerStyles}}
                background={
                    theme.isDark
                        ? 'linear-gradient(180deg, #0E0A17 0%, #243F36 100%)'
                        : 'linear-gradient(109deg, #F7FAE2 0%, #FEFAE9 100%)'
                }
                index={2}
                hasCurvedDivider={false}
            >
                <OuterWedgeWrapper>
                    <InnerWedgeWrapper width="150%" top fill={theme.isDark ? '#0E0A17' : '#FFFFFF'}>
                        <WedgeTopRight/>
                    </InnerWedgeWrapper>
                </OuterWedgeWrapper>
                <SalesSection {...earnSectionData} />
                <FarmsPoolsRow/>
            </PageSection>
            <PageSection
                innerProps={{style: HomeSectionContainerStyles}}
                background={
                    theme.isDark
                        ? 'linear-gradient(180deg, #0B4576 0%, #091115 100%)'
                        : 'linear-gradient(180deg, #6FB6F1 0%, #EAF2F6 100%)'
                }
                index={2}
                hasCurvedDivider={false}
            >
                <WinSection/>
            </PageSection>
            <PageSection
                innerProps={{style: HomeSectionContainerStyles}}
                background={
                    theme.isDark
                        ? 'linear-gradient(180deg, rgba(14, 10, 23, 0.14) 0%, rgba(17, 196, 124, 0.14) 100%)'
                        : 'linear-gradient(180deg, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 0%)'
                }
                index={2}
                hasCurvedDivider={false}
            >
                <img src="/images/home/flying-pancakes/tree.png" alt="Tree" style={{
                    'position' : 'absolute',
                    'top': 0,
                    'left' : 0,
                    'width' : '100%',
                    'height' : '100%',
                }}/>
                <SalesSection {...cakeSectionData} />
                <CakeDataRow/>
                <Wrapper>
                    <Heading mb="24px" scale="xl" color={theme.colors.secondary}>
                        {t('Start in seconds.')}
                    </Heading>
                    <Text textAlign="center" color={(theme.isDark) ? 'white' : 'black'}>
                        {t('Connect your crypto wallet to start using the app in seconds.')}
                    </Text>
                    <Text mb="24px" bold color={(theme.isDark) ? 'white' : 'black'}>
                        {t('No registration needed.')}
                    </Text>

                    <Link external href="https://docs.pancakeswap.finance/">
                        {t('Learn how to start')}
                    </Link>
                    {!account && <ConnectWalletButton mt="24px"/>}
                </Wrapper>
            </PageSection>
        </>
    )
}

export default Home
