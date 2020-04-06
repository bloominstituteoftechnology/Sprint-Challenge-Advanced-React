import styled from 'styled-components';

export const HeaderElement = styled.header`
	box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
	padding-bottom: 20px;
	margin-top: 0;
`;

export const Title = styled.h1`
	text-align: center;
	text-transform: uppercase;
	font-size: 1.5rem;
	padding: 2rem;
	letter-spacing: 1px;
	width: 100%;
`;
export const FormWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 80%;
	margin: 0 auto;
	align-items: center;
`;
export const FormElement = styled.form`
	width: 50%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Input = styled.input`
	border: none;
	padding: 5px;
	&[type='text'] {
		flex-grow: 2;
		color: #fc766a;
		width: 150px;
		border-bottom: 1px solid #fc766a;
		margin-right: 10px;
	}
	&[type='checkbox'] {
		margin-left: 10px;
	}
`;

export const Button = styled.button`
	padding: 5px 35px;
	border-radius: 5px;
	margin-left: 10px;
	cursor: pointer;
	border: ${(props) =>
		props.search ? '1px solid #FC766A' : '1px solid transparent'};
	background: ${(props) => (props.search ? 'transparent' : '#FC766A')};
`;

export const Label = styled.label`
	padding: 1rem;
	display: flex;
	align-items: center;
	font-size: 1.3rem;
	flex-grow: 2;
`;

export const List = styled.ul`
	width: 70%;
	margin: 2rem auto;
	list-style: none;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const ListItem = styled.li`
	min-width: 180px;
	border-top: 2px solid #fc766a;
	font-size: 1.6rem;
	background: white;
	margin: 1rem;
	padding: 0 2rem 1rem;
	border-radius: 5px;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	box-shadow: 0 5px 10px -3px rgba(0, 0, 0, 0.1),
		0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const Hashtag = styled.button`
	text-align: center;
	padding: 5px 10px;
	display: inline-block;
	font-size: 0.9rem;
	text-decoration: none;
	background-color: #e2e8f0;
	color: inherit;
	border-radius: 10px;
	border: none;
	min-width: 100px;
	margin-left: 0;
	cursor: pointer;
`;
