import User from './user/User'

export default function Users() {
	return (
		<div className='flex flex-col gap-10 bg-bg'>
			<div className='border text-left p-5'>
				<div>search</div>
			</div>
			<div className='border bg-white flex flex-col p-5 gap-5'>
				<div className='flex flex-row justify-center gap-10'>
					<h2>group 1</h2>
					<h2>direction 2</h2>
				</div>
				<div className='flex flex-row gap-5'>
					<User />
					<User />
					<User />
				</div>
			</div>
			<div className='border bg-white flex flex-col p-5 gap-5'>
				<div className='flex flex-row justify-center gap-10'>
					<h2>group 2</h2>
					<h2>direction 3</h2>
				</div>
				<div className='flex flex-row gap-5'>
					<User />
					<User />
					<User />
					<User />
					<User />
					<User />
					<User />
				</div>
			</div>
		</div>
	)
}
