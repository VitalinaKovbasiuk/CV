import React from 'react';
import { BiPhoneCall } from '@react-icons/all-files/bi/BiPhoneCall';
import { BiMailSend } from '@react-icons/all-files/bi/BiMailSend';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { GoMarkGithub } from '@react-icons/all-files/go/GoMarkGithub';
import { FaTelegramPlane } from '@react-icons/all-files/fa/FaTelegramPlane';
import { MdMyLocation } from '@react-icons/all-files/md/MdMyLocation';

import {
  Avatar,
  SideBarContext,
  MyContact,
  ContactContext,
  TelMail,
  ContactIcon,
  MyLink,
  MySkills,
  SillsItem,
} from './SideBar.styled';

export default function SideBar() {
  return (
    <div>
      <Avatar
        src="https://avatars.githubusercontent.com/u/101979968?v=4"
        alt="avatar"
        width="350"
        height="350"
      />
      <SideBarContext>
        <ContactContext>
          <MyContact>Contacts</MyContact>
          <TelMail>
             <MyLink href="tel:+38 066 572 15 94">
              <ContactIcon>
                <BiPhoneCall />
              </ContactIcon>
              <MyLink href="tel:+38 066 572 15 94">+38 066 572 15 94</MyLink>
            </MyLink>
          </TelMail>

          <TelMail>
            <MyLink href="mailto:kovbasiukvitalina@gmail.com">
              <ContactIcon>
                <BiMailSend />
              </ContactIcon>
              <MyLink href="mailto:kovbasiukvitalina@gmail.com">
                kovbasiukvitalina@gmail.com
              </MyLink>
            </MyLink>
          </TelMail>

          <TelMail>
            <MyLink href="https://t.me/Vitalina_Kovbasiuk">
              <ContactIcon>
                <FaTelegramPlane />
              </ContactIcon>
              <MyLink href="https://t.me/Vitalina_Kovbasiuk">
                Vitalina Kovbasiuk
              </MyLink>
            </MyLink>
          </TelMail>

          <TelMail>
            <MyLink href="https://www.linkedin.com/in/vitalina/">
              <ContactIcon>
                <FaLinkedin />
              </ContactIcon>
              <MyLink href="https://www.linkedin.com/in/vitalina/">
                Linkedin
              </MyLink>
            </MyLink>
          </TelMail>

          <TelMail>
            <MyLink href="https://github.com/VitalinaKovbasiuk">
              <ContactIcon>
                <GoMarkGithub />
              </ContactIcon>
              <MyLink href="https://github.com/VitalinaKovbasiuk">
                github.com/VitalinaKovbasiuk
              </MyLink>
            </MyLink>
          </TelMail>

          <TelMail>
            <MyLink href="https://www.google.com.ua/maps/place/Kotlyarevs'koho+St,+Irpin,+Kyivs'ka+oblast,+08200/">
              <ContactIcon>
                <MdMyLocation />
              </ContactIcon>
              <MyLink href="https://www.google.com.ua/maps/place/Kotlyarevs'koho+St,+Irpin,+Kyivs'ka+oblast,+08200/">
                Irpin, Kyiv region
              </MyLink>
            </MyLink>
          </TelMail>
        </ContactContext>
        <div>
          <MyContact>Tech Skills</MyContact>
          <MySkills>
            <SillsItem>HTML</SillsItem>
            <SillsItem>CSS</SillsItem>
            <SillsItem>GIT</SillsItem>
            <SillsItem>Sass</SillsItem>
            <SillsItem>JavaScript</SillsItem>
            <SillsItem>React Hooks & Components</SillsItem>
            <SillsItem>React Redux Toolkit</SillsItem>
            <SillsItem>REST API</SillsItem>
          </MySkills>
        </div>
        <div>
          <MyContact>Soft Skills</MyContact>
          <MySkills>
            <SillsItem>Agile</SillsItem>
            <SillsItem>Goal-oriented</SillsItem>
            <SillsItem>Attention to detail</SillsItem>
            <SillsItem>Team Work</SillsItem>
            <SillsItem>Adaptation Skills</SillsItem>
            <SillsItem>Communicative</SillsItem>
          </MySkills>
        </div>

        <div>
          <MyContact>Languages</MyContact>
          <MySkills>
            <SillsItem>English: intermediate</SillsItem>
            <SillsItem>Ukranian: native</SillsItem>
            <SillsItem>Russian: native</SillsItem>
          </MySkills>
        </div>
      </SideBarContext>
    </div>
  );
}
