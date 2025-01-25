import { Elysia } from 'elysia'
import { html, Html } from '@elysiajs/html'

// string unnecessary?
type Children = { children: JSX.Element | JSX.Element[] | string }

const HTMLtemplate = ({ children }: Children) => (
	<html lang="en">
		<head>
			<title>Elysia</title>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<script src="https://unpkg.com/@tailwindcss/browser@4"></script>
		</head>
		<body class="bg-zinc-900 text-white flex justify-center items-center flex-col h-screen">{children}</body>
	</html>
)

const Icon = ({icon}: {icon?: string}) => <>{icon === 'fox'? '🦊' : '🌑'}</>

const Hello = () => (
	<HTMLtemplate>
		<h1 class={'text-5xl leading-loose text-zinc-300'}>Hello, World</h1>
		<p class={'text-3xl text-zinc-500'}>
			This is <span class={'text-amber-500'}>Elysia</span> <Icon icon={'fox'} /><Icon />
		</p>
		<p class={'text-3xl text-zinc-500'}>
			Let's build something awesome
		</p>
		<button class={'text-xl text-zinc-500 hover:bg-zinc-700 rounded-xl bg-zinc-800 px-4 py-2 cursor-pointer'}>click me</button>
	</HTMLtemplate>
)

export const ui = new Elysia().use(html()).get('/', Hello)
