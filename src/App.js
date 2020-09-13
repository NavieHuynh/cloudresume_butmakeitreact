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
        <Section title="Welcome to my Cloud Resume!">
          <div className="introduction">
            <p>Howdy. This is my portfolio website built with React and hosted on AWS.  I am learning how AWS works by completing their certificates in order to build scalable systems. I've cleared the Cloud Practictioner and Solutions Architect Associate Certificates and am working on Systems Adminsitrations Associate next. At my day job, I write automated test cases and automate manual tasks using Python. </p>
            <p>Outside of work, I love listening to music, going on walks with my dog, weight lifting and video games.</p>
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
              <br/>
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
              <br/>
              </SectionItem>
          </Section>
          <hr/>
          <Section title="Education">
          <SectionItem 
              logo={GTLogo}
              company="Georgia Tech" 
              companyurl="https://www.gatech.edu/"
              title="Masters of Science in Computer Science" 
              location="Atlanta"
              startdate="January 2021"
              enddate="December 2023"
              >
              <b>Specialization in Machine Learning</b>
              <br/>
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
              <b>Minor in Mathematics and Astrophysics</b>
              <br/>
              </SectionItem>
          </Section>
          <hr/>
          <Section title="Professional Certifications">
          <SectionItem 
              logo={SALogo}
              company="Amazon Web Services" 
              companyurl="https://www.youracclaim.com/earner/earned/badge/a21f90cf-e417-4354-bc2c-95ad2974e6ea"
              title="AWS Certified Solutions Architect Associate" 
              enddate="July 2020"
              >
                <p>Earners of this certification have a comprehensive understanding of AWS services and technologies. They demonstrated the ability to build secure and robust solutions using architectural design principles based on customer requirements. Badge owners are able to strategically design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant.</p>
              <br/>
              </SectionItem>

          <SectionItem 
              logo={CPLogo}
              company="Amazon Web Services" 
              companyurl="https://www.youracclaim.com/earner/earned/badge/af3e2d65-83a5-4b48-be7a-d038af60d039"
              title="AWS Certified - Cloud Practioner" 
              enddate="March 2020"
              >
              <p>Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.</p>
              <br/>
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
              <br/>
              </SectionItem>
          <SectionItem 
              logo={IBMDSLogo}
              company="Coursera" 
              companyurl="https://www.youracclaim.com/earner/earned/badge/53eae1f7-bb0c-4d8e-a9f9-164eb7373494"
              title="Applied Data Science Capstone by IBM" 
              enddate="January 2020"
              >
              <p>The badge earner has demonstrated proficiency in applying Data Science and some Machine Learning concepts including identifying and clearly defining a problem that can be solved using location data, working with and making calls to APIs, and using location data to solve the problem defined. The individual has also demonstrated proficiency in documenting their work and preparing a full formal data science project report.</p>
              <br/>
              </SectionItem>
          </Section>
      </Container>
    </div>
  );
}

export default App;
