import '../../styles/Landing.module.css';

export default function Landing() {
  return (
    <div>
      <head>
        <title>webOS TV Developer</title>
      </head>
      <body>
        <div className='header-wrap'>
          <div className='header-container'>
            <h1>
              <a href='#'>
                <img
                  src='/images/icon/lg-logo.png'
                  alt='webOS TV Developer'
                />
              </a>
            </h1>
          </div>
        </div>

        <div className='menu-wrap'>
          <div className='menu-container'></div>
        </div>

        <div className='contents-wrap'>
          <div className='contents-area-01'>
            <div className='contents-inner-01'>
              <div className='conts-container'>
                <h2 className='sub-01'>Developer-Friendly, Best-Performance</h2>
                <h2>
                  webOS
                  <br />
                  TV Platform
                </h2>

                <h2 className='sub-02'>
                  Turn your imagination into reality on webOS TV
                </h2>
                <div className='btn-area'>
                  <a
                    href='http://webostv.developer.lge.com/sdk/installation/'
                    className='type01 fadeInRight'
                  >
                    DOWNLOAD SDK
                  </a>
                  <a
                    href='http://webostv.developer.lge.com/discover/getting-started/'
                    className='type02'
                  >
                    GET STARTED!
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='contents-area-02'>
            <div className='contents-inner-02'>
              <div className='conts-container'>
                <h3>SDK & APIS</h3>
                <p className='sub-01'>
                  Check out our various software development kits and APIs.
                </p>
                <div className='conts-list'>
                  <div className='list-container list-01'>
                    <a href='http://webostv.developer.lge.com/sdk/tools/using-webos-tv-cli/'>
                      <div className='img-area'>
                        <img
                          src='images/icon/icon-interface.png'
                          alt='CLI icon'
                        />
                      </div>
                      <h4 className='sub-01'>Command Line Interface</h4>
                      <p className='sub-02'>
                        Develop webOS TV apps <br />
                        simply with a collection of commands.
                      </p>
                    </a>
                  </div>

                  <div className='list-container list-02'>
                    <a href='http://webostv.developer.lge.com/sdk/tools/ide/'>
                      <div className='img-area'>
                        <img src='images/icon/icon-ide.png' alt='IDE icon' />
                      </div>
                      <h4 className='sub-01'>Eclipse-based IDE</h4>
                      <p className='sub-02'>
                        Develop webOS TV apps <br />
                        easily on a popular tool.
                      </p>
                    </a>
                  </div>

                  <div className='list-container list-03'>
                    <a href='http://webostv.developer.lge.com/sdk/tools/emulator/introduction-emulator/'>
                      <div className='img-area'>
                        <img
                          src='images/icon/icon-emulator.png'
                          alt='Emulator icon'
                        />
                      </div>
                      <h4 className='sub-01'>webOS TV Emulator</h4>
                      <p className='sub-02'>
                        Test your webOS TV apps
                        <br />
                        on a computer without a real device.
                      </p>
                    </a>
                  </div>

                  <div className='list-container list-04'>
                    <a href='http://webostv.developer.lge.com/api/web-api/supported-standard-web-api/'>
                      <div className='img-area'>
                        <img
                          src='images/icon/icon-webapi.png'
                          alt='Web API icon'
                        />
                      </div>
                      <h4 className='sub-01'>Web API</h4>
                      <p className='sub-02'>
                        It allows you to use core web technologies <br />
                        and familiar web frameworks on webOS TV.
                      </p>
                    </a>
                  </div>

                  <div className='list-container list-05'>
                    <a href='http://webostv.developer.lge.com/api/webos-service-api/'>
                      <div className='img-area'>
                        <img
                          src='images/icon/icon-luna.png'
                          alt='Luna API icon'
                        />
                      </div>
                      <h4 className='sub-01'>Luna Service API</h4>
                      <p className='sub-02'>
                        You can handle a variety of webOS services <br />
                        and functions with this API.
                      </p>
                    </a>
                  </div>

                  <div className='list-container list-06'>
                    <a href='http://webostv.developer.lge.com/api/webostvjs/'>
                      <div className='img-area'>
                        <img
                          src='images/icon/icon-webos.png'
                          alt='webOS.JS icon'
                        />
                      </div>
                      <h4 className='sub-01'>webOS. JS Library</h4>
                      <p className='sub-02'>
                        This library helps you configure DRM
                        <br />
                        and other required settings of webOS TV.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='contents-area-03'>
            <div className='contents-inner-03'>
              <div className='conts-container'>
                <h4 className='sub-01'>Before getting started,</h4>
                <h4 className='sub-02'>
                  Find out the supported specifications of the webOS TV
                  Platform.
                </h4>
                <div className='btn-area'>
                  <a
                    href='http://webostv.developer.lge.com/discover/specifications/'
                    className='type02'
                  >
                    CHECK SPECIFICATIONS
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='contents-area-04'>
            <div className='contents-inner-04'>
              <div className='conts-container'>
                <h3>Debugging Tools</h3>
                <p className='sub-01'>
                  Here are tools to test and bebug your app on webOS TV.
                </p>
                <div className='conts-link'>
                  <div className='dev-sub'>
                    <a href='http://webostv.developer.lge.com/develop/app-test/'>
                      <div className='sub-inner'>
                        <div className='img-area'>
                          <img
                            src='images/icon/icon-devapp.png'
                            alt='Dev Mod icon'
                          />
                        </div>
                        <div>
                          <h4 className='sub-02'>Developer Mode Apps</h4>
                          <p className='sub-03'>
                            Install, debug, and test your app faster on a real
                            TV device.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className='dev-sub'>
                    <a href='http://webostv.developer.lge.com/sdk/tools/beanviser/'>
                      <div className='sub-inner'>
                        <div className='img-area'>
                          <img
                            src='images/icon/icon-beanviser.png'
                            alt='Beanviser icon'
                          />
                        </div>
                        <div>
                          <h4 className='sub-02'>Beanviser</h4>
                          <p className='sub-03'>
                            Measure the performance of your app running on a
                            real TV device.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='contents-area-05'>
            <div className='contents-inner-05'>
              <div className='conts-container'>
                <h4 className='sub-01'>
                  Having problems in developing an app?
                </h4>
                <h4 className='sub-02'>
                  Post questions and the community will help you out.
                </h4>
                <div className='btn-area'>
                  <a
                    href='https://developer.lge.com/community/forums/RetrieveForumList.dev?prodTypeCode=TV'
                    className='type02'
                  >
                    GO TO FORUM
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='contents-area-06'>
            <div className='contents-inner-06'>
              <div className='conts-container'>
                <h3>Whats New?</h3>
                <div className='new-list'>
                  <div className='new-conts'>
                    <div className='new-inner'>
                      <div className='data'>
                        <span className='icon'></span>
                        <p>21 August, 2020</p>
                      </div>
                      <h4 className='sub-01'>Code Sample Published</h4>
                      <p className='sub-02'>
                        Code samples of DB8 and webOSTV.js are published. The
                        code samples show how to use DB8 API and webOSTV.js
                        library. For more information, see{' '}
                        <a
                          className='TED_hyperlink'
                          href='http://webostv.developer.lge.com/develop/code-samples/db8/'
                        >
                          DB8
                        </a>
                        &nbsp;and{' '}
                        <a
                          className='TED_hyperlink'
                          href='http://webostv.developer.lge.com/develop/code-samples/webostvjs-library/'
                        >
                          webOSTV.js
                        </a>
                        code samples.
                      </p>
                    </div>
                  </div>

                  <div className='new-conts'>
                    <div className='new-inner'>
                      <div className='data'>
                        <span className='icon'></span>
                        <p>21 August, 2020</p>
                      </div>
                      <h4 className='sub-01'>webOSTV.js Library Updated</h4>
                      <p className='sub-02'>
                        <a
                          className='TED_hyperlink'
                          href='http://webostv.developer.lge.com/index.php?cID=6898'
                        >
                          webOSTV.js v1.2.3
                        </a>
                        , a set of APIs for your app to use on webOS TV, is
                        released. The bug of&nbsp;
                        <a
                          className='TED_hyperlink'
                          href='http://webostv.developer.lge.com/api/webostvjs/webos/?wos_flag=isShowing#isShowing'
                        >
                          keyboard.isShowing()
                        </a>
                        &nbsp; method&nbsp;is fixed.&nbsp;For more information,
                        see the{' '}
                        <a
                          className='TED_hyperlink'
                          href='http://webostv.developer.lge.com/api/webostvjs/?wos_flag=releasenotes#releasenotes'
                        >
                          release note
                        </a>
                        .
                      </p>
                    </div>
                  </div>

                  <div className='new-conts'>
                    <div className='new-inner'>
                      <div className='data'>
                        <span className='icon'></span>
                        <p>11 June, 2020</p>
                      </div>
                      <h4 className='sub-01'>
                        Luna API Updated
                        <br />
                        Released
                      </h4>
                      <p className='sub-02'>
                        Luna APIs are updated. The{' '}
                        <a
                          className='TED_hyperlink'
                          href='http://webostv.developer.lge.com/api/webos-service-api/application-manager/?wos_flag=getAppLoadStatus#getAppLoadStatus'
                        >
                          getAppLoadStatus
                        </a>
                        method that checks an app installation is added. In
                        addition, more keys are added to retrieve TV system
                        settings on the{' '}
                        <a
                          className='TED_hyperlink'
                          href='http://webostv.developer.lge.com/api/webos-service-api/settings-service/?wos_flag=getsystemsettings#getsystemsettings'
                        >
                          getSystemSettings
                        </a>
                        method.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='contents-area-07'>
            <div className='contents-inner-07'>
              <div className='conts-container'>
                <h3>Family Sites</h3>
                <ul className='site-area'>
                  <li>
                    <a href='https://www.lgappstv.com/'>
                      <img
                        src='images/icon/img-fs-01.png'
                        alt='LG Content Store logo'
                      />
                    </a>
                  </li>
                  <li>
                    <a href='https://seller.lgappstv.com/'>
                      <img
                        src='images/icon/img-fs-02.png'
                        alt='LG Seller Lounge logo'
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='footer-wrap'></div>
      </body>
    </div>
  );
}
