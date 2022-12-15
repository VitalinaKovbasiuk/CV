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
        src="https://avatars.githubusercontent.com/u/103022423?v=4"
        alt="avatar"
        width="350"
        height="350"
      />
      <SideBarContext>
        <ContactContext>
          <MyContact>Contacts</MyContact>
          <TelMail>
            <MyLink href="tel:+38 093 987 63 53">
              <ContactIcon>
                <BiPhoneCall />
              </ContactIcon>
              <MyLink href="tel:+38 093 987 63 53">+38 093 987 63 53</MyLink>
            </MyLink>
          </TelMail>

          <TelMail>
            <MyLink href="mailto:barabashsan4ik@gmail.com">
              <ContactIcon>
                <BiMailSend />
              </ContactIcon>
              <MyLink href="mailto:barabashsan4ik@gmail.com">
                barabashsan4ik@gmail.com
              </MyLink>
            </MyLink>
          </TelMail>

          <TelMail>
            <MyLink href="https://t.me/Oleksandr_Barabash">
              <ContactIcon>
                <FaTelegramPlane />
              </ContactIcon>
              <MyLink href="https://t.me/Oleksandr_Barabash">
                Oleksandr_Barabash
              </MyLink>
            </MyLink>
          </TelMail>

          <TelMail>
            <MyLink href="https://www.linkedin.com/in/olexandr-barabash-034812139/">
              <ContactIcon>
                <FaLinkedin />
              </ContactIcon>
              <MyLink href="https://www.linkedin.com/in/olexandr-barabash-034812139/">
                Linkedin.com
              </MyLink>
            </MyLink>
          </TelMail>

          <TelMail>
            <MyLink href="https://github.com/OleksandrB93">
              <ContactIcon>
                <GoMarkGithub />
              </ContactIcon>
              <MyLink href="https://github.com/OleksandrB93">
                github.com/OleksandrB93
              </MyLink>
            </MyLink>
          </TelMail>

          <TelMail>
            <MyLink href="https://goo.gl/maps/XX8wchQXqgXEHBqV9">
              <ContactIcon>
                <MdMyLocation />
              </ContactIcon>
              <MyLink href="https://goo.gl/maps/XX8wchQXqgXEHBqV9">
                Chornomorsk, Odessa Oblast
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
