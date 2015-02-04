class HelloMessage extends React.Component {	
	render() {
		return <div>{this.props.name}</div>;
	}
}

React.render(
	<HelloMessage name="hello from react" />,
	document.getElementById('foo')
);
