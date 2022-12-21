import React from 'react';

const Navbar = () => {
   return (
      <div className="fixed w-[80%] h-20 shadow-xl">
			<div className="shadow-lg hover:shadow-[#a8e2e7] rounded-xl flex justify-center items-center h-full">
				<div>
					<ul className="items-center xs:gap-1 gap-3 flex">
						<ul href="/">
							<li className="text-lg text-[#5EBEC4] center uppercase hover:border-b">
								<p>Memories 🥰</p>
							</li>
						</ul>
					</ul>
				</div>
			</div>
		</div>
   )
}

export default Navbar