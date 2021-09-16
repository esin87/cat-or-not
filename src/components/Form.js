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
	return (
		<StyledForm>
			<label htmlFor='url'>URL: </label>
			<input
				type='text'
				id='url'
				placeholder='Paste your URL here'
				name='url'
			/>
			<label htmlFor='cat-image'>File upload: </label>
			<input type='file' id='cat-image' name='cat-image' />
			<SubmitButton type='submit'>Submit</SubmitButton>
		</StyledForm>
	);
};

export default Form;
