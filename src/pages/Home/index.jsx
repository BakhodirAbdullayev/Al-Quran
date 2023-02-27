import React from "react";
import styled from "styled-components";
import { FaMosque, FaKaaba, FaQuran } from "react-icons/fa";
import { mobile, first } from "../../styles/responsive";

const Container = styled.div`
  width: 100%;
  padding: 15px;
`;
const About = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;
`;
const AboutItem = styled.div`
  background-color: #fff;
  border-radius: 15px;
  padding: 10px 15px;
  display: flex;
  gap: 40px;
  align-items: center;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const Icon = styled.div`
  font-size: 180px;
  color: #005036;
  display: grid;
  place-items: center;
  filter: drop-shadow(0 0 2px #5da59b) drop-shadow(0 0 3px #005036);
  ${first({
    fontSize: "130px",
  })}
`;
const Text = styled.p`
  font-size: 16px;
  text-align: justify;

  p {
    margin-top: 8px;
    ${first({
      display: "none",
    })}
  }
`;

const Home = () => {
  return (
    <Container>
      <About>
        <AboutItem>
          <Icon>
            <FaMosque />
          </Icon>
          <Text>
            Al-Masjid an-Nabawī (Arabic: المسجد النبوي; Prophet's Mosque) is a
            mosque established and originally built by the Prophet of Islam
            Muhammad. It is in the city of Medina in Saudi Arabia. Al-Masjid
            an-Nabawi was the third mosque built in the history of Islam and is
            now one of the largest mosques in the world. It is the
            second-holiest site in Islam, after Masjid al-Haram in Mecca.
            <p>
              The site was originally adjacent to Muhammad's house; he settled
              there after his Hijra (emigration) to Medina in 622 CE. He shared
              in the heavy work of building. The original mosque was an open-air
              building. The mosque served as a community center, a court, and a
              religious school. There was a raised platform for the people who
              taught the Quran. Subsequent Islamic rulers greatly expanded and
              decorated it
            </p>
          </Text>
        </AboutItem>
        <AboutItem>
          <Icon>
            <FaKaaba />
          </Icon>
          <Text>
            The Kaaba ("The Cube"), also referred as the Holy Ka'bah), is a
            building at the center of Islam's most important mosque, Al-Masjid
            Al-Ḥarām, The Sacred Mosque), in the Hejazi city of Makkah, Saudi
            Arabia. It is the most sacred site in Islam. It is considered by
            Muslims to be the Bayṫ Allāh ("House of God"), and has a similar
            role to the Tabernacle and Holy of Holies in Judaism. Its location
            determines the qiblah (direction of prayer). Wherever they are in
            the world, Muslims are expected to face the Kaaba when performing
            Salah (Islamic prayer).
            <p>
              One of the Five Pillars of Islam requires every Muslim who is able
              to do so to perform the Hajj (Greater Pilgrimage) at least once in
              their lifetime. Multiple parts of the hajj require pilgrims to
              make Tawaf, (Circumambulation) seven times around the Kaaba in a
              counter-clockwise direction. Tawaf is also performed by pilgrims
              during the ‘Umrah, (Lesser Pilgrimage).
            </p>
          </Text>
        </AboutItem>
        <AboutItem>
          <Icon>
            <FaQuran />
          </Icon>
          <Text>
            The Qur'an, sometimes spelled Koran, (Arabic: القرآن) is the holy
            book of Islam. The Qur'an is considered by Muslims to be "The Word
            of Allah (God)". This book is different from other religious texts
            in that it is believed to be written directly by God, through the
            prophet Muhammad. Some Muslims call it the Final Testament.
            <p>
              {" "}
              It has been written and read only in Arabic for more than 1,400
              years. But, because many Muslims around the world do not
              understand Arabic, the meaning of the Qur'an is also given in
              other languages, so that readers can understand better what the
              Arabic words in the Qur'an mean. These books are like dictionaries
              to the Qur'an - they are not read as part of the religion of
              Islam, to replace the Arabic Qur'an. Muslims believe that these
              translations are not the true Qur'an; only the Arabic copy is the
              true Qur'an. The Quran is used with the hadith to interpret sharia
              law.
            </p>
          </Text>
        </AboutItem>
      </About>
    </Container>
  );
};

export default Home;
