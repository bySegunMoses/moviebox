import React from "react";
import {
    FiTwitter,
    FiFacebook,
    FiInstagram,
    FiYoutube
} from "react-icons/fi";

import fbIcon from '../../assets/facebook.svg';
import igIcon from '../../assets/instagram.svg';
import twIcon from '../../assets/twitter.svg';
import ytIcon from '../../assets/youtube.svg';

import AppFooterCopyright from "./AppFooterCopyright";

const socialLinks = [
    {
        id: 1,
        icon: <img src={fbIcon} />,
        url: '#'
    },
    {
        id: 2,
        icon: <img src={igIcon} />,
        url: '#',
    },
    {
        id: 3,
        icon: <img src={twIcon} />,
		url: 'https://twitter.com/by_segun_moses',
    },
    {
        id: 4,
        icon: <img src={ytIcon} />,
        url: 'https://www.youtube.com/channel/UCrtRFzRoLNMC0PCdjOTvnBQ'
    }
];

const AppFooter = () => {
    return(
        <div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28" style={{marginBottom: 30}}>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer"
                                style={{textDecoration: 'none', justifyContent: 'space-around'}}
							>
								<i className="text-xl sm:text-2xl md:text-3xl" style={{color: '#111827'}}>
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>
                <div style={{display: 'flex', textAlign: 'center', justifyContent: 'space-around', marginBottom: '30px'}}>
                    <a href={"#"} target="__blank"><p style={{color: '#111827', fontWeight: '500', fontSize: '16px'}}>Conditions of Use</p></a>
                    
                    <a href={"#"} target="__blank"><p style={{color: '#111827', fontWeight: '500', fontSize: '16px'}}>Privacy & Policy</p></a>


                    <a href={"#"} target="__blank"><p style={{color: '#111827', fontWeight: '500', fontSize: '16px'}}>Press Room</p></a>
                </div>
				<AppFooterCopyright />
			</div>
        </div>
    )
};

export default AppFooter;