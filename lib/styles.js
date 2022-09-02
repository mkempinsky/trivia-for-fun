export const globalStyles = `
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;

	}
	html, body {
		height: 100%;
		font-family: 'Poppins', sans-serif;
		color: #1C2838;
		font-size: 16px;
		background: #E0EAFC;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #CFDEF3, #E0EAFC);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #CFDEF3, #E0EAFC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


	}
	html {
		-webkit-font-smoothing: antialiased;
	}
	:root {
		--primary: #8370A8;
		--primary-100: #cdc5dc;
		--primary-200: #a89ac2;
		--primary-300: #8370A8;
		--primary-400: #685986;
		--primary-500: #4e4364;
	}
`;
