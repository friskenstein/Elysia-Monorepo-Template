import { WebPage } from '@backend/layout/WebPage'

const Icon = ({ icon }: { icon?: string }) => <>{icon === 'fox' ? '🦊' : '🌑'}</>

const userInput: string = '<script>alert("hacked!");</script>LOLOLOLOLOLOLOLOL'

export const Hello = () => (
	<WebPage bodyClass="bg-zinc-900 text-white flex justify-center items-center flex-col h-screen">
		<h1 class={'text-5xl leading-loose text-zinc-300'}>Hello, World</h1>
		<p class={'text-3xl text-zinc-500'}>
			This is <span class={'text-amber-500'}>Elysia</span> <Icon icon={'fox'} />
			<Icon />
		</p>
		<p class={'text-3xl text-zinc-500'}>Let's build something awesome</p>
		<p style={{ backgroundColor: 'red' }}>with JSX</p>
		<input type="text" class={'text-3xl text-zinc-500 border rounded-xl p-2'} />
		<p class={'text-3xl'} safe>
			{' '}
			user says: {userInput}{' '}
		</p>

		<div class={['class-a class-b', true && 'class-c']}>Conditional classes</div>

		<button
			class={
				'text-xl text-zinc-500 hover:bg-zinc-700 rounded-xl bg-zinc-800 px-4 py-2 cursor-pointer'
			}
		>
			click me
		</button>
	</WebPage>
)
