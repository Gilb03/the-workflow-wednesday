import Layout from '../components/layout'
import Header from '../components/header'
import SubmitForm from '../components/form'
import Organizers from '../components/organizers'
/* import Location from '../components/location'*/
import WhatToExpect from '../components/what-to-expect'
import Description from '../components/description'
import Footer from '../components/footer'
import GroupBanner from '../components/group-banner'
import Tagline from '../components/tagline'
import Navbar from '../components/navbar'

export default () => (
  <Layout>
    <Navbar />
    <Header />
    <Tagline />
    <GroupBanner />
    <Description />
    <SubmitForm />
    <WhatToExpect />
    <Location /> 
    <Organizers />
    <Footer />
  </Layout>
)

