export default function Messages() {
	return (
		<div className='flex flex-row border h-full'>
			<div className='w-1/4'>chats</div>
			<div className='flex flex-col h-full'>
				<div className='flex flex-row gap-10'>
					<div>name lastname</div>
					<div> avatar</div>
				</div>
				<div>
					<div>main</div>
				</div>
				<div className='justify-end'>
					<div>send message</div>
				</div>
			</div>
		</div>
	)
}
