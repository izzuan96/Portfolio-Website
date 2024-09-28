import React from 'react';
import Title from '../Title/Title';
import MaybankIcon from '../images/maybank-avatar.svg';
import ApmIcon from '../images/APM.png';
import AccentureIcon from '../images/Accenture.svg.png';
import SlbIcon from '../images/slb.png';
import Separator from '../Separator/Separator';
import './work.css';

const workExperiences = [
  {
    id: 1,
    company: 'Accenture',
    logo: AccentureIcon,
    description: 'I’m like the internet’s peacekeeper – filtering out negativity and keeping the digital neighborhood safe. Think of me as the guardian of good vibes, stepping in to ensure everyone can scroll through a drama-free zone. It’s a tough job, but someone’s got to keep the online world a little kinder!',
  },
  {
    id: 2,
    company: 'Maybank',
    logo: MaybankIcon,
    description: 'I was the front-end wizard at Maybank, turning complex investment projects into sleek, user-friendly experiences. My mission? Making finance look so smooth, you’d forget it’s all about numbers!',
  },
  {
    id: 3,
    company: 'Angkatan Pertahanan Awam Malaysia (APM)',
    logo: ApmIcon,
    description: 'During COVID, I worked with Angkatan Pertahanan Awam Malaysia, overseeing Person under investigation (PUI) from KLIA and various hotels in Kuala Lumpur. I coordinated with key agencies like KKM and PDRM to ensure everything ran smoothly. Think of it as managing a high-stakes operation where every detail was crucial!',
  },
  {
    id: 4,
    company: 'Schlumberger',
    logo: SlbIcon,
    description: 'I started as a Schlumberger intern in the Service Help Desk, supporting global staff with Schlumberger’s online systems. Whether it was office tech glitches or system issues on oil rigs, I was the one ensuring the digital side stayed smooth and seamless – basically, the IT troubleshooter for all things digital!',
  },
];

function Work() {
  return (
    <>
      <div className='work-wrap'>
        <Title text="Career Milestones" className="custom-class" />
        <div className='workList'>
          {workExperiences.map(experience => (
            <div key={experience.id} className='workItem'>
              <div className='imgcontainer'>
                <img src={experience.logo} alt={`${experience.company} logo`} />
              </div>
              <div className='description'>
                <h2>{experience.company}</h2>
                <p>{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Separator nextBgColor="#ABE7FE" height="auto" waveType="wave1" />
      </div>
    </>
  );
}

export default Work;
