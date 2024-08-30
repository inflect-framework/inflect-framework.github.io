---
layout: page
title: Inflect Team
sidebar: false
---

<h2 class='centered centered-title'>Our Team</h2>
<p class='centered'>Inflect was created by a fully remote pair of engineers based in the US</p>

<div class="team-container">
  <TeamMember 
    name="Ben Hancock" 
    tagline="Software Engineer"
    image="./public/ben_pfp.jpg"
    link="https://www.linkedin.com/in/benhancock-dev/"
  />

  <TeamMember 
    name="Chris Douglass" 
    tagline="Software Engineer"
    image="https://gravatar.com/avatar/ba3ab3db98d33b0944b95cb35389b5e5?size=256&cache=1724781517483"
    link="https://www.linkedin.com/in/christopheredouglass/"
  />

  <!-- Add more TeamMember components for additional team members -->
</div>

<style>
.team-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
.centered {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.centered-title {
  padding-top: 4rem;
  font-size: 2rem;
}

p.centered {
  padding: 3rem;
}

</style>