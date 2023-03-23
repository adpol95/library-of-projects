import logo2 from '../refBaseFinalProjects/AD_free-file.png';

function Footer() {
  return (
    <footer>
      <div id="footerMain">
        <div className="footBlocks">
          <p>
            Social
          </p>
          <ul>
            <li>
              <a href="https://www.instagram.com/anton_polegaev/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com/adpol95" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCOPOQAprR867D6L1T_MRGMA" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </li>
            <li>
              <a href="https://vk.com/nbkwar" target="_blank" rel="noreferrer">
                VK
              </a>
            </li>
          </ul>
        </div>

        <div className="footBlocks">
          <img src={logo2} alt="shortLogo"/>
        </div>

        <div className="footBlocks">
          <p>
            Contacts
          </p>
          <ul>
            <li>adpol95@gmail.com</li>
            <li>ant7831@yandex.ru</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;