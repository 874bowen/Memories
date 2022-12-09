import React from 'react';

const Navbar = () => {
   return (
      <div className="fixed my-3 w-[80%] h-20">
			<div className="shadow-lg hover:shadow-[#d296d4] rounded-xl flex justify-center items-center h-full">
				{/* <image
					src={logo}
					alt="/"
					width="70"
					height="70"
				/> */}
				<div>
					<ul className="items-center xs:gap-1 gap-3 flex">
						<ul href="/">
							<li className="text-lg text-[#5EBEC4] center uppercase hover:border-b">
								<p >Memories 🥰</p>
							</li>
						</ul>
					</ul>
				</div>
			</div>
		</div>
   )
}

export default Navbar