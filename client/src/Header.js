import React from 'react';
import Form from './Form';
import './App.css';

import { Title, HeaderElement } from './styles';

const Header = (props) => {
	return (
		<HeaderElement>
			<Title>List of players</Title>
			<Form
				handleSearch={props.handleSearch}
				data-testid="form"
				handleChange={props.handleChange}
				value={props.searchTerm}
				toggleMode={props.toggleMode}
				clearFilterByCountry={props.clearFilterByCountry}
			/>
			{/* <FormWrapper onSubmit={props.handleSearch} data-testid="form">
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
			</FormWrapper>
			<Button onClick={props.clearFilterByCountry}>Clear</Button> */}
		</HeaderElement>
	);
};

export default Header;
