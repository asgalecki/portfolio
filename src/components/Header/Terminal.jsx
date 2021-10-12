import React from 'react';

const Terminal = () => {
  return (
    <div className="terminal">
      <div className="terminal__header">
        <span className="terminal__header-crop terminal__header-crop--red"></span>
        <span className="terminal__header-crop terminal__header-crop--yellow"></span>
        <span className="terminal__header-crop terminal__header-crop--green"></span>
      </div>
      <div className="terminal__body">
        <p>
          <span className="terminal__para--emphasis terminal__para--blue">
            const
          </span>
          <span className="terminal__para--green"> aboutMe</span>
          <span className="terminal__para--red"> = </span>
          <span className="terminal__para--emphasis terminal__para--blue">
            function
          </span>
          ()
          {` {`}
        </p>
        <p>
          <span className="terminal__para--red terminal__para--margin-one">
            return
          </span>{' '}
          {` {`}
        </p>
        <p className="terminal__para--margin-two">
          name: <span className="terminal__para--yellow">'Artur Gałecki'</span>,
        </p>
        <p className="terminal__para--margin-two">
          field:{' '}
          <span className="terminal__para--yellow">'frontend-development'</span>
          ,
        </p>
        <p className="terminal__para--margin-two">
          stack: [<span className="terminal__para--yellow">'html'</span>,
          <span className="terminal__para--yellow">'css/scss'</span>,
          <span className="terminal__para--yellow">'js/ts'</span>,
          <span className="terminal__para--yellow">'react/gatsby'</span>,
          <span className="terminal__para--yellow">'jest/testing-library'</span>
          ],
        </p>
        <p className="terminal__para--margin-two">
          linkedIn:
          <span className="terminal__para--yellow">
            '
            <a
              href="https://www.linkedin.com/in/asgalecki/"
              target="_blank"
              className="terminal__para--yellow terminal__link"
              rel="noreferrer noopener"
            >
              linkedin.com/in/asgalecki/
            </a>
            '
          </span>
          ,
        </p>
        <p className="terminal__para--margin-two">
          repo:
          <span className="terminal__para--yellow">
            '
            <a
              href="https://github.com/asgalecki"
              target="_blank"
              className="terminal__para--yellow terminal__link"
              rel="noreferrer noopener"
            >
              https://github.com/asgalecki
            </a>
            '
          </span>
          ,
        </p>
        <p className="terminal__para--margin-one">{`}`}</p>
        <p>{`}`}</p>
      </div>
    </div>
  );
};

export default Terminal;
