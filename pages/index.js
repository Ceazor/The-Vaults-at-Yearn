import	React			from	'react';
import	Link			from	'next/link';
import	Star			from	'components/icons/Star';
import	LogoYearn		from	'components/icons/LogoYearn';

function	Index() {
	return (
		<section>
			<div className={'w-full mt-10 md:mt-20 pt-2'}>
				<div className={'flex flex-col'}>
					<div className={'mb-8'}>
						<LogoYearn />

					</div>
					<h2 className={'text-4xl md:text-6xl text-ygray-100 font-bold'}>
						{'Welcome to '}
					</h2>
					<h1 className={'text-4xl md:text-6xl text-ygray-100 font-bold mb-8'}>
						{'The Vaults at '}
						<span className={'text-yblue'}>{'Yearn'}</span>
					</h1>
					<div className={'max-w-xl space-y-6 mb-8'}>
						<p className={'text-ygray-200'}>
							{'Here you can find in-depth information about how Yearn’s yVaults operate and the actions (strategies) these vaults perform.'}
						</p>
						<p className={'text-ygray-200'}>
							{'This website will maintain a one-stop location for all yVault descriptions. All vaults in production are now version 2 or higher. All version 1 yVaults have been deprecated.'}
						</p>
						<p className={'text-ygray-200'}>
							{'The newest yVaults and strategies are denoted with a '}
							<Star className={'inline mb-1'} />
						</p>
					</div>
					<div>
						<Link href={'/yearn-and-curve'}>
							<button className={'text-white bg-yblue py-2 px-5 text-left font-bold text-sm'} style={{width: 279}}>
								{'See How The Magic Works'}
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Index;
