import * as S from './styles';
import HomeIcon from 'assets/svg/icon-home';
import CallIcon from 'assets/svg/icon-call';
import MailIcon from 'assets/svg/icon-mail';
import ClockIcon from 'assets/svg/icon-clock';
import InstagramIcon from 'assets/svg/icon-instagram';
import FacebookIcon from 'assets/svg/icon-facebook';

const Contact = () => {
  return (
    <S.Container>
      <S.Title>COME JOIN US!</S.Title>
      <S.InfoWrap>
        <S.InfoItems>
          <HomeIcon />
          <p>
            <span>46 Lackey Street</span>
            <span>Summer Hill NSW 2130</span>
          </p>
        </S.InfoItems>
        <S.InfoItems>
          <ClockIcon />
          <S.TextWrap>
            <p>
              <span>Monday - Friday</span>
              <span>7am - 3pm</span>
            </p>
            <p>
              <span>Saturday - Sunday</span>
              <span>8am - 3pm</span>
            </p>
          </S.TextWrap>
        </S.InfoItems>
        <S.InfoItems>
          <CallIcon />
          <a href="tel:+61297999666">
            <p>02 9799 9666</p>
          </a>
        </S.InfoItems>
        <S.InfoItems>
          <a
            href="https://www.instagram.com/plunge46/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.facebook.com/plunge46"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
        </S.InfoItems>
        <S.InfoItems>
          <MailIcon />
          <a href="mailto:info@plunge46.com">
            <p>info@plunge46.com</p>
          </a>
        </S.InfoItems>
      </S.InfoWrap>
      <S.MapWrap>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.9242446829317!2d151.13566317734342!3d-33.891604820243195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ba9f8820d4d7%3A0x1e81ae4510938fd!2sPlunge%2046!5e0!3m2!1sen!2skr!4v1733463398107!5m2!1sen!2skr"
          title="Plunge 46 Location Map"
        />
      </S.MapWrap>
    </S.Container>
  );
};

export default Contact;
