import { Header } from "./UI/header"
import styles from '../styles/Home.module.css'
import resumeStyles from '../styles/Resume.module.css'
import { Footer } from "./UI/footer"

const keySkills = [
  'React',
  'Node',
  'TypeScript',
  'Javascript',
  'CSS/SCSS',
  'Redux',
  'React Native',
  'Jest /  React Testing Library',
  'Ruby on Rails',
  'GraphQL',
  'AWS',
  'Infrastructure as Code',
  'Docker',
  'PostgreSQL',
]

const Resume = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={resumeStyles.main}>
        <div >Key Skills</div>
        <div className={resumeStyles.keySkills}>
          <ul>{
            keySkills.map((skill: string) => {
              return <li>{skill}</li>
            })}
            </ul>
        </div>

        <div className={resumeStyles.header}>Experience</div>
        <div className={resumeStyles.companyHeader}>
          <div>One Study Team, Boston MA (remote) </div>
          <div>November 2021 – present</div>
        </div>
                                  
        Senior Software Engineer
        <div>
          <ul>
            <li>As lead frontend engineer (Typescript / React) for team, build software to manage clinical trials, while keeping customer experience in the forefront</li>
            <li>Delivered complex form-building software while collaborating with product and design teams, refining and iterating on specifications as the feature took shape</li>
            <li>Contribute to organization-wide strategies for frontend testing and architecture</li>
            <li>Plan and break down new feature initiatives according to Agile workflow</li>
            <li>Elevate frontend technical bar of teammates</li>
          </ul>
        </div>
        <div className={resumeStyles.companyHeader}>
        <div>Development Guild, Boston MA (remote)	</div>		<div> May 2020 – November 2021</div>	
        </div>

        Full Stack Web Engineer
        <div>
          <ul>
            <li>Worked across the stack to rapidly develop features for collective intelligence application (devguild.com) (TypeScript / React / Redux / Express / PosgreSQL / AWS)</li>
            <li>Collaborated with team to sustain fast feature development while maintaining code quality</li>
            <li>Initiated frontend testing using React Testing Library and Cypress; integrated automated testing into the continuous integration process</li>
            <li>Maintained AWS infrastructure using Terraform (Infrastructure as Code)</li>
          </ul>
        </div>
        <div className={resumeStyles.companyHeader}>
        EvidenceCare, Nashville TN							Jan 2018 – May 2020
        </div>

        Software Development Engineer II
        <div>
          <ul>
            <li>Completed features for patient-focused application, embedded in Electronic Health Record (EHR) systems including Epic and Cerner</li>
            <li>Implemented SMART-on-FHIR/HL7 technologies, enabling the application to interact with patient records and practitioner information within hospitals’ networks</li>
            <li>With one other developer, built a REST web API to manage placing medical orders from within the EHR (TypeScript / Node / Express / TypeOrm / PSQL)</li>
            <li>Designed and built EvidenceCare’s release management system, which included automatically generating Semantic Version tags, build-artifacts and new releases of software (Docker, Node) </li>
          </ul>
        </div>

        <div className={resumeStyles.companyHeader}>
        <div>Sleep Solutions & Services, Nashville, TN	</div>			<div>	 Jan 2016 – Jan 2018</div>
        </div>

        Web Developer
        <div>
          <ul>
            <li>Built frontend features for call center application (React / Redux / Redux-Saga)</li>
            <li>Designed and wrote mobile app for iOS and Android in React Native</li>
            <li>Led maintenance of legacy applications (Ruby / Rails / React-Redux / MongoDb / Nginx) </li>
            <li>Created Ruby gem (library) that logs data to comply with HIPPA (federal healthcare regulations) </li>
          </ul>
        </div>

        <div className={resumeStyles.header}>International Non-Profits</div>

        <div className={resumeStyles.companyHeader}>
        <div>Sites of Conscience, New York, NY	</div>			<div>	Nov 2011 – July 2015</div>	
        </div>

        Director of Institutional Advancement
        <div>
        <ul>
          <li>Raised over $2.5 million annually for international human rights non-profit through cultivating relationships with individual and institutional donors</li>
          <li>Managed staff including consultants, administrative assistant and grant-writers</li>
        </ul>

        </div>
        <div className={resumeStyles.companyHeader}>

        <div>Hunger Project, New York, NY	</div><div>			July 2009 – Nov 2011</div>		
        </div>
        Director of Foundation Relations
        <div>
          <ul>
            <li>Worked with partners around the world and managed portfolio of foundations supporting economic development programs</li>
          </ul>
        </div>

        <div className={resumeStyles.header}>Education</div>

        <p>Web Development Immersive, General Assembly, New York, NY</p>
        <p>M.A. Latin American Studies, New York University</p>
        <p>B.A. English Literature, University of Tennessee at Chattanooga</p>

      </main>
      <Footer />
    </div>
  )
}

export default Resume