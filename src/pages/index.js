import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import CountUp from 'react-countup'

const IndexPage = () => (
  <Layout>
    <SEO title="Why I Should Be At Your Hackathon" />
    <h5>
      <span class="byline">By Jonathan Wong</span>
    </h5>
    <p>Hi peeps. I'm <span class="highlight">Jonathan</span>, a hacker based in NYC.<br />
      First the numbers.
      <br />
      <h2>
        <CountUp end={22} delay={1} />+ hackathons<br />
        <CountUp end={20} delay={1.5} />+ where I presented<br />
        <CountUp end={23} delay={2} /> hours spent on a bus going to one hackathon<br />
        <CountUp end={5} delay={2.5} /> hours of sleep for an entire weekend<br />
        <CountUp start={-1} end={0} delay={3} /> coffee consumed
      
      </h2>
        
    </p>
    <p>
      I go to a ton of hackathons, even when travel was terrible. The 23 hours was spent on Greyhounds going from my college to NYC to Boston to New Hampshire and then back. I had to transfer buses at each of these stops, often in the middle of the night. 
    </p>
    <p>
      When I go to hackathons, there is a > <CountUp end={90} />% chance that I will present in some form or fashion. The ones where I did not present were when I was just getting into hackathons and was unsure of my capabilities.
    </p>
    <p>
      I care about social issues, particularly regarding the privacy and medical tracks due to personal relevance to me.
    </p>
    <p>
      Other random notes include my involvement with my local tech community (attending meetups) and me having my own blog where I (sometimes) catalogue and document the hackathons I've been to. I do some AI stuff so there's that.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
