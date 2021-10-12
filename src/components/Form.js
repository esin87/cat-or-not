import { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: 2fr 2fr 1fr;
	gap: 25px;
	width: 50%;
	min-width: 400px;
	margin-right: auto;
	margin-left: auto;
`;

const SubmitButton = styled.button`
	grid-column: 1 / span 2;
	max-width: 200px;
	margin-right: auto;
	margin-left: auto;
	padding: 0.5em 1em;
	transition: all 0.5s;
	border: none;
	border-radius: 5px;

	&:hover {
		background-color: goldenrod;
		color: white;
	}
`;

const Form = () => {
	const initialState = {
		url: '',
		imageFile: '',
	};
	const [formState, setFormState] = useState(initialState);

	function handleChange(event) {
		setFormState((prevState) => {
			return { ...prevState, [event.target.id]: event.target.value };
		});
	}

	function handleFileUpload(event) {
		setFormState((prevState) => {
			return { ...prevState, imageFile: event.target.files[0] };
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		const data = new FormData();
		const imageData = formState.imageFile;
		data.append('data', imageData);
		data.append('url', formState.url);
	}

	return (
		<StyledForm encType='multipart/form-data' action='' onSubmit={handleSubmit}>
			<label htmlFor='url'>URL: </label>
			<input
				type='text'
				id='url'
				placeholder='Paste your URL here'
				name='url'
				onChange={handleChange}
			/>
			<label htmlFor='cat-image'>File upload: </label>
			<input
				type='file'
				id='imageFile'
				name='cat-image'
				size='60'
				onChange={handleFileUpload}
			/>
			<SubmitButton type='submit'>Submit</SubmitButton>
		</StyledForm>
	);
};

export default Form;
