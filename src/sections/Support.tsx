import LabelTextLink from '../components/shared/LabelTextLink';

const Support = () => (
	<div className='container-inner mx-[auto] flex w-full flex-col gap-[32px] pt-[257px] sm:gap-[58px]'>
		<h1 className='w-full text-center sm:text-left'>How we support you</h1>
		<div className='flex flex-col gap-[32px] border-b-[1px] border-solid border-gray-borders pb-[32px] sm:flex-row sm:pb-[58px]'>
			<LabelTextLink
				label='Host protection programs'
				text='To support you in the rare event of an incident,
            most Roomsy bookings include property damage
            protection and liability insurance of up to $1M
            USD.'
				link='Explore the world of hosting'
			/>
			<LabelTextLink
				label='High guest standards'
				text='To give Hosts peace of mind, we offer guest
            identification and let you check out reviews of
            guests before they book. Our new Guest
            Standards Policy sets higher expectations.'
				link='Steps we take to help Hosts feel confident'
			/>
			<LabelTextLink
				label='Covid-19 safety guidlines'
				text='To help protect from the ongoing pandemic
            we enforce strict dezinfection protocols so
            guests can rest assured and stay safe.'
				link='Get to know the safety policies'
			/>
		</div>
	</div>
);

export default Support;
