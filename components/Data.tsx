// const features: FeatureTab[] = [
//     {
//         id: 'calendars',
//         title: 'Connect your calendars',
//         icon: <FiLayers className="w-6 h-6" />,
//         description: 'Calendly connects up to six calendars to automate scheduling with real-time availability.',
//         gradient: 'from-[#00D4AA] to-[#00A896]',
//         imageSrc: '/images/connect-calendars.png',
//         content: (
//             <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-120">
//                 <div className="flex items-center gap-3 mb-6">
//                     <div className="w-8 h-8 bg-[#006BFF] rounded-full flex items-center justify-center text-white">
//                         <FiCalendar className="w-4 h-4" />
//                     </div>
//                     <h3 className="text-[#0B3558] text-lg font-semibold">Availability</h3>
//                     <span className="ml-auto text-[#0B3558] font-medium">Connect existing calendar</span>
//                 </div>

//                 <div className="space-y-4">
//                     <div className="border border-gray-200 rounded-xl p-4 hover:border-[#006BFF] transition-colors cursor-pointer">
//                         <div className="flex items-center gap-3">
//                             <Image
//                                 src="/images/google-icon.png"
//                                 width={32}
//                                 height={32}
//                                 alt="Google"
//                                 className="w-8 h-8"
//                             />
//                             <span className="text-[#0B3558] font-semibold text-lg">Google</span>
//                         </div>
//                         <div className="mt-3 flex items-center justify-between text-sm">
//                             <span className="text-[#476788]">Google calendars</span>
//                             <svg className="w-5 h-5 text-[#006BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                             </svg>
//                         </div>
//                     </div>

//                     <div className="border border-gray-200 rounded-xl p-4 hover:border-[#006BFF] transition-colors cursor-pointer">
//                         <div className="flex items-center gap-3">
//                             <Image
//                                 src="/images/microsoft-icon.png"
//                                 width={32}
//                                 height={32}
//                                 alt="Microsoft"
//                                 className="w-8 h-8"
//                             />
//                             <span className="text-[#0B3558] font-semibold text-lg">Microsoft</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     },
//     {
//         id: 'availability',
//         title: 'Add your availability',
//         icon: <FiCalendar className="w-6 h-6" />,
//         description: 'Keep invitees informed of your availability. Take control of your calendar with detailed availability settings, scheduling rules, buffers, and more.',
//         gradient: 'from-[#00D4AA] to-[#00A896]',
//         imageSrc: '/images/availability.png',
//         content: (
//             <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-120">
//                 <div className="flex items-center gap-3 mb-6">
//                     <div className="w-8 h-8 bg-[#006BFF] rounded-full flex items-center justify-center text-white">
//                         <FiCalendar className="w-4 h-4" />
//                     </div>
//                     <h3 className="text-[#0B3558] text-lg font-semibold">Availability</h3>
//                     <span className="ml-auto text-[#0B3558] font-medium">Meeting hours</span>
//                 </div>

//                 <div className="space-y-4">
//                     <div className="border-b border-gray-200 pb-3">
//                         <div className="flex items-center gap-2 mb-3">
//                             <svg className="w-5 h-5 text-[#006BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                             </svg>
//                             <span className="text-[#0B3558] font-semibold">Weekly hours</span>
//                         </div>
//                         <p className="text-sm text-[#476788] mb-3">Set when you are typically available for meetings</p>

//                         <div className="flex items-center gap-3 mb-2">
//                             <div className="w-8 h-8 bg-[#0056D2] rounded-full flex items-center justify-center text-white font-bold text-sm">
//                                 S
//                             </div>
//                             <span className="text-[#476788] text-sm">Unavailable</span>
//                             <button className="ml-auto w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded hover:border-[#006BFF]">
//                                 <span className="text-gray-400">+</span>
//                             </button>
//                         </div>

//                         <div className="flex items-center gap-3 mb-2">
//                             <div className="w-8 h-8 bg-[#006BFF] rounded-full flex items-center justify-center text-white font-bold text-sm">
//                                 M
//                             </div>
//                             <span className="text-[#0B3558] text-sm font-medium">9:00 am</span>
//                             <span className="text-[#476788]">-</span>
//                             <span className="text-[#0B3558] text-sm font-medium">4:30 pm</span>
//                             <div className="ml-auto flex items-center gap-2">
//                                 <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded">×</button>
//                                 <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded">+</button>
//                                 <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded">⊕</button>
//                             </div>
//                         </div>

//                         <div className="flex items-center gap-3 mb-2">
//                             <div className="w-8 h-8 bg-[#0056D2] rounded-full flex items-center justify-center text-white font-bold text-sm">
//                                 T
//                             </div>
//                             <span className="text-[#476788] text-sm">Unavailable</span>
//                             <button className="ml-auto w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded hover:border-[#006BFF]">
//                                 <span className="text-gray-400">+</span>
//                             </button>
//                         </div>

//                         <div className="flex items-center gap-3">
//                             <div className="w-8 h-8 bg-[#4B5EFC] rounded-full flex items-center justify-center text-white font-bold text-sm">
//                                 W
//                             </div>
//                             <span className="text-[#0B3558] text-sm font-medium">9:30 am</span>
//                             <span className="text-[#476788]">-</span>
//                             <span className="text-[#0B3558] text-sm font-medium">5:00 pm</span>
//                             <div className="ml-auto flex items-center gap-2">
//                                 <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded">×</button>
//                                 <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded">+</button>
//                                 <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded">⊕</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     },
//     {
//         id: 'conferencing',
//         title: 'Connect conferencing tools',
//         icon: <FiVideo className="w-6 h-6" />,
//         description: 'Sync your video conferencing tools and set preferences for in-person meetings or calls.',
//         gradient: 'from-[#C850C0] to-[#4158D0]',
//         imageSrc: '/images/conferencing.png',
//         content: (
//             <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-120">
//                 <div className="flex items-center gap-3 mb-6 border-b pb-4">
//                     <button className="text-[#006BFF] font-semibold text-sm border-b-2 border-[#006BFF] pb-2">Meeting location</button>
//                     <button className="text-[#476788] font-medium text-sm pb-2 hover:text-[#0B3558]">Video conferencing</button>
//                 </div>

//                 <div className="space-y-3">
//                     <div className="border border-gray-200 rounded-xl p-4 hover:border-[#006BFF] transition-colors cursor-pointer flex items-center justify-between">
//                         <div className="flex items-center gap-3">
//                             <div className="w-10 h-10 bg-[#2D8CFF] rounded flex items-center justify-center">
//                                 <FiVideo className="w-5 h-5 text-white" />
//                             </div>
//                             <span className="text-[#0B3558] font-semibold">Zoom</span>
//                         </div>
//                         <svg className="w-5 h-5 text-[#006BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                         </svg>
//                     </div>

//                     <div className="border border-gray-200 rounded-xl p-4 hover:border-[#006BFF] transition-colors cursor-pointer flex items-center justify-between">
//                         <div className="flex items-center gap-3">
//                             <Image
//                                 src="/images/teams-icon.png"
//                                 width={40}
//                                 height={40}
//                                 alt="Microsoft Teams"
//                                 className="w-10 h-10"
//                             />
//                             <span className="text-[#0B3558] font-semibold">Microsoft Teams</span>
//                         </div>
//                         <svg className="w-5 h-5 text-[#006BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                         </svg>
//                     </div>

//                     <div className="border border-gray-200 rounded-xl p-4 hover:border-[#006BFF] transition-colors cursor-pointer flex items-center justify-between">
//                         <div className="flex items-center gap-3">
//                             <Image
//                                 src="/images/meet-icon.png"
//                                 width={40}
//                                 height={40}
//                                 alt="Google Meet"
//                                 className="w-10 h-10"
//                             />
//                             <span className="text-[#0B3558] font-semibold">Google Meet</span>
//                         </div>
//                         <svg className="w-5 h-5 text-[#006BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                         </svg>
//                     </div>

//                     <div className="border border-gray-200 rounded-xl p-4 hover:border-[#006BFF] transition-colors cursor-pointer flex items-center justify-between">
//                         <div className="flex items-center gap-3">
//                             <Image
//                                 src="/images/webex-icon.png"
//                                 width={40}
//                                 height={40}
//                                 alt="Webex"
//                                 className="w-10 h-10"
//                             />
//                             <span className="text-[#0B3558] font-semibold">Webex</span>
//                         </div>
//                         <svg className="w-5 h-5 text-[#006BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                         </svg>
//                     </div>
//                 </div>
//             </div>
//         )
//     },
//     {
//         id: 'events',
//         title: 'Customize your event types',
//         icon: <FiBox className="w-6 h-6" />,
//         description: 'Choose from pre-built templates or quickly create custom event types for any meeting you need to schedule.',
//         gradient: 'from-[#FFAA00] to-[#FF6B00]',
//         imageSrc: '/images/event-types.png',
//         content: (
//             <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-120">
//                 <div className="flex items-center gap-3 mb-6 border-b pb-4">
//                     <button className="text-[#006BFF] font-semibold text-sm border-b-2 border-[#006BFF] pb-2 flex items-center gap-2">
//                         <FiLink className="w-4 h-4" />
//                         Event types
//                     </button>
//                     <button className="text-[#476788] font-medium text-sm pb-2 hover:text-[#0B3558]">Ways to meet</button>
//                 </div>

//                 <div className="space-y-6">
//                     <div className="border-l-4 border-[#006BFF] pl-4">
//                         <h4 className="text-[#006BFF] font-bold text-lg mb-1">One-on-one</h4>
//                         <p className="text-[#0B3558] text-sm mb-1">1 host → 1 invitee</p>
//                         <p className="text-[#476788] text-sm">Good for 1:1 check-ins, screening calls, etc.</p>
//                     </div>

//                     <div className="border-l-4 border-[#00A896] pl-4">
//                         <h4 className="text-[#00A896] font-bold text-lg mb-1">Collective</h4>
//                         <p className="text-[#0B3558] text-sm mb-1">Multiple hosts → 1 invitee</p>
//                         <p className="text-[#476788] text-sm">Co-host meetings, group interviews, etc.</p>
//                     </div>

//                     <div className="border-l-4 border-[#9333EA] pl-4">
//                         <h4 className="text-[#9333EA] font-bold text-lg mb-1">Round robin</h4>
//                         <p className="text-[#0B3558] text-sm mb-1">Rotating hosts → 1 invitee</p>
//                         <p className="text-[#476788] text-sm">Distribute between team members</p>
//                     </div>

//                     <div className="border-l-4 border-[#EC4899] pl-4">
//                         <h4 className="text-[#EC4899] font-bold text-lg mb-1">Group</h4>
//                         <p className="text-[#0B3558] text-sm mb-1">1 host → Multiple invitees</p>
//                         <p className="text-[#476788] text-sm">Webinars, training sessions, etc.</p>
//                     </div>
//                 </div>
//             </div>
//         )
//     },
//     {
//         id: 'share',
//         title: 'Share your scheduling link',
//         icon: <FiLink className="w-6 h-6" />,
//         description: 'Easily book meetings by embedding scheduling links on your website, landing pages, or emails.',
//         gradient: 'from-[#00D4AA] to-[#4158D0]',
//         imageSrc: '/images/share-link.png',
//         content: (
//             <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-120">
//                 <div className="flex items-center gap-3 mb-6">
//                     <button className="text-[#006BFF] font-semibold text-sm border-b-2 border-[#006BFF] pb-2">Share</button>
//                     <span className="text-[#0B3558] font-medium text-sm">Offer time slots via email</span>
//                 </div>

//                 <div className="bg-[#F8FAFB] rounded-xl p-4 mb-4">
//                     <div className="bg-white rounded-lg p-4 shadow-sm">
//                         <div className="mb-4">
//                             <h4 className="text-[#0B3558] font-semibold mb-3">Recently shared event types</h4>

//                             <div className="space-y-3">
//                                 <div className="border-l-4 border-[#00A896] pl-3 py-2">
//                                     <p className="text-[#0B3558] font-semibold">Client onboarding</p>
//                                 </div>

//                                 <div className="border-l-4 border-[#006BFF] pl-3 py-2">
//                                     <p className="text-[#0B3558] font-semibold">Client check-in</p>
//                                     <p className="text-[#476788] text-xs mt-1">30 min · One-on-one</p>
//                                     <div className="flex gap-2 mt-2">
//                                         <button className="text-[#006BFF] text-xs font-medium">Insert link</button>
//                                         <button className="text-[#006BFF] text-xs font-medium">Offer time slots</button>
//                                     </div>
//                                 </div>

//                                 <div className="border-l-4 border-[#0056D2] pl-3 py-2">
//                                     <p className="text-[#0B3558] font-semibold">Quarterly business review</p>
//                                 </div>
//                             </div>

//                             <button className="text-[#006BFF] text-sm font-medium mt-3">View all event types</button>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="flex items-center gap-2 flex-wrap">
//                     <span className="bg-[#E8F3FF] text-[#006BFF] px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
//                         <FiBox className="w-3 h-3" /> Event types
//                     </span>
//                     <span className="bg-[#E8F3FF] text-[#006BFF] px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
//                         <FiCalendar className="w-3 h-3" /> One-off meeting
//                     </span>
//                     <span className="bg-[#E8F3FF] text-[#006BFF] px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
//                         <FiLayers className="w-3 h-3" /> Meeting poll
//                     </span>
//                 </div>
//             </div>
//         )
//     }
// ];