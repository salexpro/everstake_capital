/* eslint-disable jsx-a11y/no-autofocus, react/no-array-index-key */
import React, { useState, useEffect } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { useForm as useFormSpree } from '@formspree/react'
import { useForm } from 'react-hook-form'

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
const RENDERER_CONTACT = 'contact'

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

// contact from renderer changes terminal state
const contactRenderer = ({
  content: {
    data: { header, form },
    setContact,
  },
}) => {
  // console.log(setContact)
  const [step, setStep] = useState(0)

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    shouldUseNativeValidation: false,
  })

  const [formState, handleForm] = useFormSpree('moqrepyk')

  const { errors: fsErrors, submitting, succeeded } = formState

  const onSubmit = (data, event) => {
    console.log('submitted', data, event)
    if (step < 4) {
      setStep((prev) => prev + 1)
    }
    if (step === 5) {
      handleForm(event).then(({ body }) => {
        window.scrollTo(0, document.body.scrollHeight)
        setContact(false)
        if (body.error) {
          console.error(body)
        }
      })
    }
  }

  const handleAction = (e) => {
    if (e.code === 'Tab' || e.key === 'Tab') {
      e.preventDefault()
    }
    const { value } = e.target

    const val = value.toLowerCase()

    console.log(val)

    if (e.code === 'Enter' || e.key === 'Enter') {
      if (val !== 'yes') e.preventDefault()
      // eslint-disable-next-line default-case
      switch (val) {
        case 'yes':
          setStep(5)
          break
        case 'edit':
          setStep(0)
          break
        case 'no':
          setStep(6)
          setContact(false)
          break
      }
    }
  }

  useEffect(() => {
    if (step < 4) {
      setContact(true)
      document.querySelector('.terminalOutput input').focus()

      if (step === 2)
        reset({
          keepValues: true,
        })
    }
    window.scrollTo(0, document.body.scrollHeight)

    console.log(step)
  }, [step])

  return (
    <>
      <form
        className={s.form}
        // validated={validated}
        // onSubmit={handleForm}
        id="contactForm"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className={s.form__header}>
          <span>{header}</span>
        </div>
        {form.map(
          ({ label, name, type, pattern }, i) =>
            i <= step && (
              <div key={name} className={s.form__item}>
                <div className={s.form__item__content}>
                  <span>{label}:</span>&nbsp;
                  <Form.Control
                    id={`cnt${name}`}
                    as={step === i ? 'input' : 'textarea'}
                    type={type}
                    readOnly={step !== i}
                    name={name}
                    required
                    autoFocus
                    autoComplete="off"
                    aria-invalid="false"
                    aria-haspopup="false"
                    spellCheck="false"
                    bsPrefix={s.form__input}
                    {...register(name, {
                      required: true,
                      pattern,
                    })}
                    className={cn({
                      [s.invalid]: errors?.[name],
                    })}
                  />
                </div>
              </div>
            )
        )}
        {step >= 3 && (
          <div className={s.form__footer}>
            <span>
              <span />
            </span>
            <span>
              <span />
            </span>
          </div>
        )}
      </form>
      {step >= 4 && (
        <>
          Send? Yes/No/Edit
          <br />
          <br />${' '}
          <input
            className={s.form__input}
            type="text"
            onKeyDown={handleAction}
            form="contactForm"
            autoFocus
            readOnly={step !== 4}
          />
        </>
      )}

      {submitting && <span className={s.loader} />}
      {succeeded || fsErrors.length ? (
        <>
          <br />
          <br />
          === === === === === === === === ===
          <br />
          {succeeded && "Thank you! We'll contact you soon."}
          {fsErrors.length && (
            <span style={{ color: '#fa5252' }}>
              An error occured: {fsErrors?.[0]?.message}
            </span>
          )}
          <br />
          === === === === === === === === ===
          <br />
          <br />
        </>
      ) : (
        ''
      )}
    </>
  )
}

const isTouchDevice = () => {
  return typeof window !== 'undefined'
    ? window.ontouchstart !== undefined
    : false
}

const Terminal = ({ openWebsite }) => {
  const [isSpacebar, setSpacebar] = useState(true)

  const [isContact, setContact] = useState(null)

  const [controls, setControls] = useState(null)

  // Initial Terminal state
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
        contact: {
          function: () => {
            return {
              output: new OutputFactory.OutputRecord({
                type: RENDERER_CONTACT,
                content: {
                  data: COMMAND_OUTPUTS.CONTACT,
                  setContact,
                },
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
    acceptInput: true,
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
            acceptInput={!isContact}
            clickToFocus={!isContact}
            autoFocus={!isTouchDevice()}
            emulatorState={state.emulatorState}
            inputStr={state.inputStr}
            onInputChange={(inputStr) =>
              setState({ ...state, inputStr: inputStr.toLowerCase() })
            }
            onStateChange={(emulatorState) => {
              setState({
                emulator: state.emulator,
                emulatorState,
                acceptInput: state.acceptInput,
              })

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
              [RENDERER_CONTACT]: contactRenderer,
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
                  disabled={isContact}
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
