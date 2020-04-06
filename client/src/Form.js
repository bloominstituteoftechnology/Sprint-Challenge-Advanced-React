import React from 'react';
import './App.css';
import { Button, Label, FormElement, FormWrapper, Input } from './styles';

const Form = (props) => {
	return (
		<FormWrapper>
			<FormElement onSubmit={props.handleSearch} data-testid="form">
				<Input
					type="text"
					onChange={props.handleChange}
					placeholder="Type name..."
					value={props.searchTerm}
				/>
				<Button search>Search</Button>

				<Label>
					Change mode
					<Input type="checkbox" onClick={props.toggleMode} data-testid="toggle" />
				</Label>
			</FormElement>
			<Button onClick={props.clearFilterByCountry}>Clear</Button>
		</FormWrapper>
	);
};

export default Form;
