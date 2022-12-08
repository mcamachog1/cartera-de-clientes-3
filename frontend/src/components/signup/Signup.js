import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { 
  Container,
	Button,
	Row,
	Col,
	Form,
	FormControl
} from 'react-bootstrap'

function Signup (props) {

	const [credenciales, setCredenciales] = useState( {username: "", password: ""});
  return (
	<Container>
		<Row>
			<Col md="4">
				<h1>Sign up</h1>
				<Form>
					<Form.Group controlId="usernameId">
						<Form.Label>User name</Form.Label>
						<Form.Control
							type="text"
							name="username"
							placeholder="Enter user name"
							value={props.username}
							onChange={props.onChange}
						/>
						<FormControl.Feedback type="invalid"></FormControl.Feedback>
					</Form.Group>

					<Form.Group controlId="passwordId">
						<Form.Label>Your password</Form.Label>
						<Form.Control
							type="password"
							name="password"
							placeholder="Enter password"
							value={props.password}
							onChange={props.onChange}
						/>
						<Form.Control.Feedback type="invalid"></Form.Control.Feedback>
					</Form.Group>
				</Form>
				<Button
					className="mt-2"
					color="primary"
					onClick={props.onSignupClick}  
				>Sign up</Button>
				<p className="mt-2">
					Already have account? <Link to="/login">Login</Link>
				</p>
			</Col>
		</Row>
	</Container>
  )
}

export default Signup;
