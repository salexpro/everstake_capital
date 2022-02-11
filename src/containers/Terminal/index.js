/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import {
  ReactTerminalStateless,
  ReactOutputRenderers,
} from 'react-terminal-component'
import {
  Emulator,
  EmulatorState,
  OutputFactory,
  CommandMapping,
  Outputs,
  // defaultCommandMapping,
} from 'javascript-terminal'
import cn from 'classnames'

import Icon from '~components/Icon'

import logo from './img/logo.svg'

import { COMMAND_LIST, COMMAND_OUTPUTS } from './constants'

import * as s from './Terminal.module.scss'

const RENDERER_DEFAULT = 'default'
const RENDERER_PORTFOLIO = 'portfolio'

const defaultCustomRenderer = ({ content }) => (
  <div className={s.render}>
    {content.map(({ color, text }) => (
      <div key={text} style={{ color }}>
        {text}
      </div>
    ))}
  </div>
)

const portfolioRenderer = ({ content }) => (
  <div className={s.portfolio}>
    {content.map(({ header, descr, table }) => (
      <div key={header} className={s.portfolio__item}>
        <div className={s.portfolio__header}>{header}</div>
        {descr && <p className={s.portfolio__descr}>{descr}</p>}
        {table && (
          <div className={s.portfolio__tables}>
            {/* eslint-disable-next-line no-shadow */}
            {table.map(({ header, body }, i) => (
              <table key={`tbl${i}`} className={s.portfolio__table}>
                {header && (
                  <thead>
                    <tr>
                      <th colSpan={3}>{header}</th>
                    </tr>
                  </thead>
                )}
                <tbody>
                  {body.map((r, j) => (
                    <tr key={`tr${j}`}>
                      {r.map((d, k) => (
                        <td key={`td${k}`}>
                          {typeof d === 'object' ? (
                            <a href={d.link}>{d.label}</a>
                          ) : (
                            d
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
)

const isTouchDevice = () => {
  return typeof window !== 'undefined'
    ? window.ontouchstart !== undefined
    : false
}

const Terminal = ({ openWebsite }) => {
  const [isSpacebar, setSpacebar] = useState(true)

  const [controls, setControls] = useState(null)

  const [state, setState] = useState({
    emulator: new Emulator(),
    emulatorState: EmulatorState.create({
      commandMapping: CommandMapping.create({
        // ...defaultCommandMapping,
        help: {
          function: () => {
            return {
              output: OutputFactory.makeTextOutput(
                `\n${COMMAND_OUTPUTS.HELP.reduce(
                  (acc, l) => `${acc}${l}\n`,
                  ''
                )}\n`
              ),
            }
          },
          optDef: {},
        },
        about: {
          function: () => {
            return {
              output: new OutputFactory.OutputRecord({
                type: RENDERER_DEFAULT,
                content: COMMAND_OUTPUTS.ABOUT,
              }),
            }
          },
          optDef: {},
        },
        why: {
          function: () => {
            return {
              output: new OutputFactory.OutputRecord({
                type: RENDERER_DEFAULT,
                content: COMMAND_OUTPUTS.WHY,
              }),
            }
          },
          optDef: {},
        },
        portfolio: {
          function: () => {
            return {
              output: new OutputFactory.OutputRecord({
                type: RENDERER_PORTFOLIO,
                content: COMMAND_OUTPUTS.PORTFOLIO,
              }),
            }
          },
          optDef: {},
        },
        gui: {
          function: () => {
            openWebsite()
            return false
          },
          optDef: {},
        },
      }),
    }),
  })

  useEffect(() => {
    const lines = [
      'EVERSTAKE CAPITAL DOS V.1.0',
      '=== === === === === === ===',
      '',
      'Press SPACEBAR to launch the website or type HELP to list all available commands in terminal',
      '',
    ]

    lines.reduce((acc, l, i) => {
      const output = `${acc}${l}\n`

      setTimeout(() => {
        const defaultOutputs = state.emulatorState.getOutputs()
        const newOutputs = Outputs.addRecord(
          defaultOutputs,
          OutputFactory.makeTextOutput(output)
        )
        setState({
          ...state,
          emulatorState: state.emulatorState.setOutputs(newOutputs),
        })
      }, (i + 1) * 150)
      return output
    }, '')
  }, [])

  const handleSpace = (e) => {
    if ((e.code === 'Space' || e.key === ' ') && isSpacebar) {
      e.preventDefault()
      openWebsite()
    } else {
      // console.log(e.code, e.key, isSpacebar)
      setSpacebar(false)
    }
  }

  const handleControls = () => {
    setControls((prev) => !prev)
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight)
    }, 0)
  }

  const handleCommand = (e, cmd) => {
    e.preventDefault()
    e.stopPropagation()
    const emulatorState = state.emulator.execute(state.emulatorState, cmd, [])
    setState({ ...state, emulatorState })

    if (cmd === 'gui') {
      window.scrollTo(0, 0)
    } else {
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight)
      }, 0)
    }
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-tabindex
    <div className={s.wrap} tabIndex="0" onKeyDown={handleSpace}>
      <Container className={s.content}>
        <img className={s.logo} src={logo} alt="Everstake Capital" />
        <div className={s.terminal}>
          <ReactTerminalStateless
            clickToFocus
            autoFocus={!isTouchDevice()}
            emulatorState={state.emulatorState}
            inputStr={state.inputStr}
            onInputChange={(inputStr) => setState({ ...state, inputStr })}
            onStateChange={(emulatorState) => {
              setState({ emulator: state.emulator, emulatorState })

              if (
                document.querySelector('.terminalInput input').value === 'gui'
              ) {
                window.scrollTo(0, 0)
              } else {
                setTimeout(() => {
                  window.scrollTo(0, document.body.scrollHeight)
                }, 0)
              }
            }}
            outputRenderers={{
              ...ReactOutputRenderers,
              [RENDERER_DEFAULT]: defaultCustomRenderer,
              [RENDERER_PORTFOLIO]: portfolioRenderer,
            }}
            theme={{
              background: '#000005',
              promptSymbolColor: '#fff',
              commandColor: '#fcfcfc',
              outputColor: '#fcfcfc',
              errorOutputColor: '#fa5252',
              // fontSize: '18px',
              // spacing: '1%',
              fontFamily: '"IBM Plex Mono", monospace',
              height: '100%',
            }}
          />
        </div>
        <div className={cn(s.controls, { [s.open]: controls })}>
          {!controls ? (
            <Button variant="dark" onClick={handleControls}>
              I don&apos;t have a keyboard
              <Icon name="keyboard" />
            </Button>
          ) : (
            <>
              {COMMAND_LIST.map((cmd) => (
                <Button
                  key={cmd}
                  variant="dark"
                  onClick={(e) => handleCommand(e, cmd.toLowerCase())}
                >
                  {cmd}
                </Button>
              ))}

              <Button variant="dark" onClick={handleControls}>
                Hide
              </Button>
            </>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Terminal
