import Layout from '../components/layout'
import Header from '../components/header'
import SubmitForm from '../components/form'
// import Carousel from '../components/carousel'
import Socials from '../components/socials'
import Portfolio from '../components/portfolio'
import Podcasts from '../components/podcasts'
import Description from '../components/description'
import Footer from '../components/footer'
import GroupBanner from '../components/group-banner'
import Tagline from '../components/tagline'
import Navbar from '../components/navbar'

export default () => (
  <Layout>
    <Navbar />
    <Header />
   {/* <Carousel /> */} 
    <Tagline />
    <GroupBanner />
    <Description />
    <SubmitForm />
    <Portfolio />
    <Podcasts />
    <Socials />
    <Footer />
  </Layout>
)

