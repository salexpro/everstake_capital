import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Spinner } from 'react-bootstrap'
import { useForm } from '@formspree/react'
import cn from 'classnames'

import Icon from '../Icon'

import * as s from './Contact.module.scss'

const Contact = () => {
  const [validated, setValidated] = useState(false)

  const [formState, setformState] = useState(null)

  const [state, handleSubmit] = useForm('myForm')
  const { errors, submitting, succeeded } = state

  const handleForm = (event) => {
    event.preventDefault()
    event.stopPropagation()

    const form = event.currentTarget

    if (form.checkValidity()) {
      handleSubmit(event).then(({ body }) => {
        setValidated(false)
        if (body.error) {
          console.error(body)
        }
      })
    }
    setValidated(true)
  }

  useEffect(() => {
    if (errors?.length || succeeded) {
      setformState(true)
      setTimeout(() => {
        setformState(false)
      }, 3200)
    }
  }, [errors, succeeded])

  return (
    <Container
      as="section"
      className={cn(s.contact, { [s.status]: formState })}
    >
      {formState ? (
        <div className={s.state}>
          <div className={cn(s.state__icon, { [s.success]: succeeded })}>
            {succeeded ? (
              <Icon name="formCheck" size={[106, 80]} />
            ) : (
              <Icon name="formCross" size={84} />
            )}
          </div>
          <span className="h2">
            {succeeded ? (
              <>
                Thank you! <br /> We&apos;ll contact you soon
              </>
            ) : (
              'An error has occurred'
            )}
          </span>
        </div>
      ) : (
        <>
          <h2>Contact us</h2>

          <Form
            className="form"
            validated={validated}
            onSubmit={handleForm}
            noValidate
          >
            <Form.Group className="form-group" controlId="fName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" name="name" required />
            </Form.Group>
            <Form.Group className="form-group" controlId="fEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="example@mail.com"
                required
                pattern="(?![_.-])((?![_.-][_.-])[\w.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}"
              />
            </Form.Group>
            <Form.Group className="form-group" controlId="fTg">
              <Form.Label>Telegram:</Form.Label>
              <Form.Control
                type="text"
                name="telegram"
                placeholder="@nickname"
                required
              />
            </Form.Group>
            <Form.Group className="form-group" controlId="fDet">
              <Form.Label>Project website or other links:</Form.Label>
              <Form.Control as="textarea" rows={2} name="links" required />
            </Form.Group>
            <Button type="submit" disabled={submitting}>
              Send
              {submitting ? (
                <Spinner animation="border" size="sm" />
              ) : (
                <Icon name="plane" size={24} />
              )}
            </Button>
          </Form>
        </>
      )}
    </Container>
  )
}

export default Contact
