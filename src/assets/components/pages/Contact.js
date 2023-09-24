import React, { useState } from "react";
import { validateEmail } from '../../../utils/helpers';

export default function ContactForm() {
	const [formState, setFormState] = useState({ name: '', email: '', message: '' });
	const { name, email, message } = formState;
	const [errorMessage, setErrorMessage] = useState('');

	function handleChange(e) {
		if (e.target.name === 'email') {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage('Your email is invalid');
			} else {
				setErrorMessage('');
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`Please fill out the form`);
			} else {
				setErrorMessage('');
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formState);
	}

	return (
		<section style={styles.container}>
			<h1 style={styles.header}>Contact me</h1>
			<form id="contact-form" onSubmit={handleSubmit}>
				<div style={styles.formGroup}>
					<label htmlFor="name" style={styles.label}>Name:</label>
					<input type='text' defaultValue={name} onBlur={handleChange} name='name' style={styles.input} />
				</div>
				<div style={styles.formGroup}>
					<label htmlFor="email" style={styles.label}>Email Address:</label>
					<input type='email' defaultValue={email} onBlur={handleChange} name='email' style={styles.input} />
				</div>
				<div style={styles.formGroup}>
					<label htmlFor="message" style={styles.label}>Message:</label>
					<textarea type='message' defaultValue={message} onBlur={handleChange} rows='5' style={styles.textarea} />
				</div>
				{errorMessage && (
					<div style={styles.errorContainer}>
						<p className="error-text" style={styles.errorText}>{errorMessage}</p>
					</div>
				)}
				<button type="submit" style={styles.button}>Submit</button>
			</form>
		</section>
	);
}

const styles = {
	container: {
		margin: '20px auto',
		padding: '20px',
		width: '80%',
		border: '1px solid #ccc',
		borderRadius: '5px',
	},

	header: {
		textAlign: 'center',
		fontSize: '24px',
		marginBottom: '20px',
	},

	formGroup: {
		marginBottom: '20px',
	},

	label: {
		display: 'block',
		fontSize: '16px',
	},

	input: {
		width: '100%',
		padding: '10px',
		fontSize: '16px',
		border: '1px solid #ccc',
		borderRadius: '5px',
	},

	textarea: {
		width: '100%',
		padding: '10px',
		fontSize: '16px',
		border: '1px solid #ccc',
		borderRadius: '5px',
		resize: 'vertical',
	},

	errorContainer: {
		backgroundColor: '#ffe6e6',
		border: '1px solid #ff9999',
		padding: '10px',
		borderRadius: '5px',
		marginTop: '10px',
	},

	errorText: {
		color: '#ff0000',
		fontSize: '14px',
		margin: '0',
	},

	button: {
		backgroundColor: '#007bff',
		color: '#fff',
		padding: '10px 20px',
		border: 'none',
		borderRadius: '5px',
		fontSize: '18px',
		cursor: 'pointer',
	},
};
