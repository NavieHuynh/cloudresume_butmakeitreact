import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section from './components/Section';
import SectionItem from './components/SectionItem';
import {Container} from 'react-bootstrap';
import OmnitracsLogo from './media/omnitracslogo.png';
import C2EducationLogo from './media/c2logo.png';
import TAMULogo from './media/tamulogo.png';
import SALogo from './media/AWS-SolArchitect-Associate.png';
import CPLogo from './media/AWS-CloudPractitioner.png';
import GITLogo from './media/GIT_201.png';
import IBMDSLogo from './media/Applied_Data_Science_Capstone.png';
import GTLogo from './media/gt-logo.svg';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Container id="maincontainer" fluid>
        <Section title="">
          <div className="introduction">
            <p>Howdy. This is my portfolio website built with React and hosted on AWS.  This website uses github and AWS Amplify as a continuous deployment pipeline. I've cleared the Cloud Practictioner and Solutions Architect Associate Certificates and am working on Systems Adminsitrations Associate next. At my day job, I write automated test cases and automate manual tasks using Python. </p>
            <p>Outside of work, I love listening to music, going on walks with my dog, weight lifting and video games. I will also be enrolled at Georgia Tech's Online Masters of Science in Computer Science program January 2021.</p>
            <p>Feel free to send me an email: <b>huynhnavie@gmail.com</b></p>
          </div>
        </Section>
        <hr/>
          <Section title="Professional Work">
            <SectionItem 
              logo={OmnitracsLogo} 
              company="Omnitracs LLC" 
              companyurl="https://www.omnitracs.com/"
              title="Software QA Engineer" 
              location="Dallas, TX"
              startdate="August 2018"
              enddate="Present"
              >
              <ul>
                <li>Subject matter expert for android mobile device management host and mobile system, including managing software deployments, configuration changes, data collection, monitoring, data generation and device upgrade management. </li>
                <li>Automated data collection, report generating and software deployment management using custom Python modules built with requests, selenium and pandas library.</li>
                <li>Documented python modules usage using Jupyter Notebooks, unit tests and Postman API for fast team collaberation.</li>
                <li>Maintained mobile device management documentation and test cases for onboarding new members.</li>
                <li>Troubleshoot software upgrade related issues and other device issues via device application and os logs</li>
                <li>Execute manual test cases for various SDLC stages, including unit, smoke, sanity, regression, integration etc.</li>
              </ul>
              
              </SectionItem>

            <SectionItem 
              logo={C2EducationLogo}
              company="C2 Education" 
              companyurl="https://www.c2educate.com/"
              title="C2 Teacher" 
              location="College Station, TX"
              startdate="May 2017"
              enddate="January 2018"
              >
                <ul>
                <li>Tutor and mentor underperforming students in mathematics, particularly focusing on SAT Maths</li>
                <li>Provide weekly math lessons and assignments to measure student performance</li>
                <li>Help students learn how to create sustainable study schedule</li>
              </ul>
              
              </SectionItem>
          </Section>
          <hr/>
          <Section title="Projects">
            <SectionItem
              company="https://navie.info"
              companyurl="https://navie.info"
              title="Portfolio Website"
              enddate="September 2020"
            >
              <p>This portfolio website was designed using React for front end, React-bootstrap for styling, github for source control, AWS Amplify for CI/CD pipeline and Route53 for DNS Registry and hosting.</p>
            </SectionItem>
            <SectionItem
              company="Github Repo"
              companyurl="https://github.com/NavieHuynh/Coursera_Capstone/blob/master/DallasMarketAnalysis.ipynb"
              title="Dallas Market Cluster Analysis - IBM Data Science Capstone Project "
              enddate="January 2020"
            >
            <p>This was the capstone project for IBM's <a href="https://www.coursera.org/professional-certificates/ibm-data-science">Data Science Professional Certificate</a> program for tying together data science techniques from previous courses into a practical example. </p>
            </SectionItem>
          </Section>
          <hr/>
          <Section title="Education">
          <SectionItem 
              logo={GTLogo}
              company="Georgia Tech" 
              companyurl="https://www.gatech.edu/"
              title="Masters of Science in Computer Science" 
              location="Atlanta, GA"
              startdate="January 2021"
              enddate="December 2023"
              >
              <p>Specialization in Machine Learning and Intelligent Interactions</p>
              
              </SectionItem>
          <SectionItem 
              logo={TAMULogo}
              company="Texas A&M University" 
              companyurl="https://www.tamu.edu/"
              title="Bachelors of Science in Physics" 
              location="College Station, TX"
              startdate="August 2014"
              enddate="May 2018"
              >
              <p>Minor in Mathematics and Astrophysics</p>
              
              </SectionItem>
          </Section>
          <hr/>
          <Section title="Professional Certifications">
          <SectionItem 
              logo={SALogo}
              company="Amazon Web Services" 
              companyurl="http://aws.amazon.com/verification"
              title="AWS Certified Sysops Administrator Associate" 
              location="Validation Number: 2Q40WQ4L1FR116GH"
              startdate="September 2020"
              enddate="September 2023"
              >
                <p>Earners of this certification have a comprehensive understanding on how to deploy, manage, and operate IT systems on the AWS Cloud. They demonstrated the ability to migrate on-premises workloads to AWS and monitor, scale, and secure systems on the AWS platform. Badge owners are able to provide guidance on implementing best practices for cloud operations.</p>
              
              </SectionItem>
          <SectionItem 
              logo={SALogo}
              company="Amazon Web Services" 
              companyurl="http://aws.amazon.com/verification"
              title="AWS Certified Solutions Architect Associate" 
              location="Validation Number: D1NEW5N2NJBQ1PCJ"
              startdate="July 2020"
              enddate="July 2023"
              >
                <p>Earners of this certification have a comprehensive understanding of AWS services and technologies. They demonstrated the ability to build secure and robust solutions using architectural design principles based on customer requirements. Badge owners are able to strategically design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant.</p>
              
              </SectionItem>

          <SectionItem 
              logo={CPLogo}
              company="Amazon Web Services" 
              companyurl="http://aws.amazon.com/verification"
              title="AWS Certified - Cloud Practioner" 
              location="Validation Number: FNZDC0Y2M2RE1Z5H"
              startdate="March 2020"
              enddate= "September 2023"
              >
              <p>Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.</p>
              
              </SectionItem>
          </Section>
          <hr/>
          <Section title="MOOC Certifications">
          <SectionItem 
              logo={GITLogo}
              company="Coursera" 
              companyurl="https://www.youracclaim.com/earner/earned/badge/af3e2d65-83a5-4b48-be7a-d038af60d039"
              title="Google IT Automation Professional Certificate" 
              enddate="June 2020"
              >
              <p>This six-course certificate, developed by Google, is designed to provide IT professionals with in-demand skills -- including Python, Git, and IT automation -- that can help them advance their careers. The hands-on curriculum is designed to teach learners how to write code in Python, with a special focus on how this applies to automating tasks in the world of IT support and systems administration.</p>
              
              </SectionItem>
          <SectionItem 
              logo={IBMDSLogo}
              company="Coursera" 
              companyurl="https://www.youracclaim.com/earner/earned/badge/53eae1f7-bb0c-4d8e-a9f9-164eb7373494"
              title="Applied Data Science Capstone by IBM" 
              enddate="January 2020"
              >
              <p>The badge earner has demonstrated proficiency in applying Data Science and some Machine Learning concepts including identifying and clearly defining a problem that can be solved using location data, working with and making calls to APIs, and using location data to solve the problem defined. The individual has also demonstrated proficiency in documenting their work and preparing a full formal data science project report.</p>
              
              </SectionItem>
          </Section>
        
      </Container>
    </div>
  );
}

export default App;
