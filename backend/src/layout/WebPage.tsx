export const WebPage = (props: {
	title?: string
	head?: JSX.Element
	bodyClass?: string
	children?: JSX.Element | JSX.Element[]
}) => (
	<>
		{'<!doctype html>'}
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{props.title || 'Elysia'}</title>
				<script src="https://unpkg.com/@tailwindcss/browser@4"></script>
				{props.head}
			</head>
			<body class={props.bodyClass}>{props.children}</body>
		</html>
	</>
)

export const HelloWorldExample = (
	<WebPage
		head={
			<>
				<link rel="stylesheet" href="/style.css" />
				<script src="/script.js" />
			</>
		}
	>
		<div>Hello World</div>
		<div>Bye World</div>
	</WebPage>
)
