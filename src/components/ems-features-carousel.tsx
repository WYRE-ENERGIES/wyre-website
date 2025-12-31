'use client'

import type { ReactNode } from 'react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

interface Feature {
  id: string
  title: string
  description: string
  icon: ReactNode
}

const features: Feature[] = [
  {
    id: '1',
    title: 'Real-Time Monitoring',
    description: 'Track all your energy usage Utility, Diesel, Gas, or Solar in real time from anywhere. Instantly detect faults, unauthorized operations, or inefficiencies across your entire network.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.97949 23.6436C6.97453 23.3771 8.01583 23.3318 9.03027 23.5107L18.0625 25.1055V28.3643H10V32.5518H18.0625V32.751L18.9697 32.5566L28.9238 30.4248C29.2743 30.3499 29.6302 30.3125 29.9922 30.3125H31.3545C32.3433 30.3126 33.2919 30.7051 33.9912 31.4043C34.6906 32.1037 35.083 33.053 35.083 34.042V34.8838L17.127 38.667H0.75V30.458C0.749974 29.4279 0.975785 28.4102 1.41113 27.4766C1.84652 26.5429 2.48129 25.7159 3.27051 25.0537C4.05971 24.3916 4.98439 23.9101 5.97949 23.6436ZM28.667 0.75C31.3189 0.750086 33.862 1.80363 35.7373 3.67871C37.6127 5.55407 38.667 8.09783 38.667 10.75C38.667 12.0632 38.4078 13.3639 37.9053 14.5771C37.4027 15.7903 36.6658 16.8928 35.7373 17.8213C34.8088 18.7497 33.7063 19.4868 32.4932 19.9893C31.2801 20.4916 29.9799 20.75 28.667 20.75C27.3538 20.75 26.053 20.4918 24.8398 19.9893C23.6267 19.4867 22.5243 18.7498 21.5957 17.8213C20.6672 16.8928 19.9303 15.7903 19.4277 14.5771C18.9252 13.3639 18.667 12.0632 18.667 10.75C18.667 8.09783 19.7203 5.55407 21.5957 3.67871C23.4711 1.80345 26.0149 0.75 28.667 0.75ZM26.5732 12.8438H34.792V8.65625H30.7607V3.72949H26.5732V12.8438Z" fill="#8134AF" stroke="#8134AF" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: '2',
    title: 'AI-Powered Insights',
    description: 'Get intelligent forecasts, automated baselines, and data-driven recommendations to reduce energy waste and cut costs by up to 30%.',
    icon: (
      <svg width="29" height="43" viewBox="0 0 29 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.4374 28.2926C26.3307 26.3696 26.7219 24.2514 26.5744 22.1362C26.4269 20.0209 25.7455 17.9776 24.5939 16.1972C23.4423 14.4168 21.8581 12.9574 19.9894 11.9554C18.1207 10.9535 16.0284 10.4417 13.9082 10.4679C11.7879 10.4941 9.70895 11.0575 7.86554 12.1053C6.02214 13.1531 4.47449 14.6512 3.36724 16.4595C2.26 18.2679 1.62931 20.3274 1.53413 22.4457C1.43895 24.5639 1.88238 26.6717 2.82298 28.5721M14.0639 5.08333C14.5391 5.08333 14.9948 4.89457 15.3308 4.55857C15.6668 4.22256 15.8556 3.76685 15.8556 3.29167C15.8556 2.81649 15.6668 2.36077 15.3308 2.02477C14.9948 1.68876 14.5391 1.5 14.0639 1.5C13.5887 1.5 13.133 1.68876 12.797 2.02477C12.461 2.36077 12.2722 2.81649 12.2722 3.29167C12.2722 3.76685 12.461 4.22256 12.797 4.55857C13.133 4.89457 13.5887 5.08333 14.0639 5.08333ZM14.0639 5.08333V10.4583M14.0639 37.3333C14.5391 37.3333 14.9948 37.5221 15.3308 37.8581C15.6668 38.1941 15.8556 38.6498 15.8556 39.125C15.8556 39.6002 15.6668 40.0559 15.3308 40.3919C14.9948 40.7279 14.5391 40.9167 14.0639 40.9167C13.5887 40.9167 13.133 40.7279 12.797 40.3919C12.461 40.0559 12.2722 39.6002 12.2722 39.125C12.2722 38.6498 12.461 38.1941 12.797 37.8581C13.133 37.5221 13.5887 37.3333 14.0639 37.3333ZM14.0639 37.3333C23.0312 37.3333 24.8139 33.7285 24.8139 33.7285L26.6056 28.375C26.6056 28.375 26.3529 27.0527 25.7097 27.4792C24.1295 28.5255 20.4315 30.1667 14.0639 30.1667C7.92564 30.1667 4.08431 28.538 2.41806 27.4792C1.65123 26.9918 1.52223 28.375 1.52223 28.375L3.31389 33.7285C3.31389 33.7285 5.0966 37.3333 14.0639 37.3333ZM8.6889 24.7917C9.16407 24.7917 9.61979 24.6029 9.95579 24.2669C10.2918 23.9309 10.4806 23.4752 10.4806 23C10.4806 22.5248 10.2918 22.0691 9.95579 21.7331C9.61979 21.3971 9.16407 21.2083 8.6889 21.2083C8.21372 21.2083 7.758 21.3971 7.422 21.7331C7.08599 22.0691 6.89723 22.5248 6.89723 23C6.89723 23.4752 7.08599 23.9309 7.422 24.2669C7.758 24.6029 8.21372 24.7917 8.6889 24.7917ZM19.4389 24.7917C19.9141 24.7917 20.3698 24.6029 20.7058 24.2669C21.0418 23.9309 21.2306 23.4752 21.2306 23C21.2306 22.5248 21.0418 22.0691 20.7058 21.7331C20.3698 21.3971 19.9141 21.2083 19.4389 21.2083C18.9637 21.2083 18.508 21.3971 18.172 21.7331C17.836 22.0691 17.6472 22.5248 17.6472 23C17.6472 23.4752 17.836 23.9309 18.172 24.2669C18.508 24.6029 18.9637 24.7917 19.4389 24.7917Z" stroke="#8134AF" strokeWidth="3" />
      </svg>
    ),
  },
  {
    id: '3',
    title: 'Utility & Billing Automation',
    description: 'Verify utility bills, generate automated remote billing, and forecast revenue with accurate time-of-use data and demand response tracking.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M20.2938 14.7512C19.0112 15.5691 17.5211 16.0024 16 16C15.8747 15.9999 15.7494 15.997 15.6243 15.9912L15.6435 16L12.4425 25.3457C14.5875 26.7807 16 29.2255 16 32C16 36.4183 12.4183 40 8 40C3.58175 40 0 36.4183 0 32C0 27.5817 3.58175 24 8 24C8.2175 24 8.43275 24.0086 8.64575 24.0257L11.6807 14.735C9.46675 13.312 8 10.8275 8 8C8 3.58175 11.5817 0 16 0C20.4183 0 24 3.58175 24 8C24 9.3775 23.6518 10.674 23.0385 11.806L27.8935 17.133C29.134 16.3894 30.5537 15.9977 32 16C36.4183 16 40 19.5817 40 24C40 28.4183 36.4183 32 32 32C27.5817 32 24 28.4183 24 24C23.9979 22.6579 24.335 21.337 24.98 20.16L20.2938 14.7512ZM8 36C10.2092 36 12 34.2092 12 32C12 29.7908 10.2092 28 8 28C5.79075 28 4 29.7908 4 32C4 34.2092 5.79075 36 8 36ZM16 12C18.2092 12 20 10.2092 20 8C20 5.79075 18.2092 4 16 4C13.7908 4 12 5.79075 12 8C12 10.2092 13.7908 12 16 12ZM32 28C34.2092 28 36 26.2092 36 24C36 21.7908 34.2092 20 32 20C29.7908 20 28 21.7908 28 24C28 26.2092 29.7908 28 32 28Z" fill="#8134AF" />
      </svg>
    ),
  },
  {
    id: '4',
    title: 'Performance & Compliance Tracking',
    description: 'Set measurable energy policies, monitor compliance, and rank performance across multiple sites with detailed reports and trend analysis.',
    icon: (
      <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.375 5.375V34.0417C5.375 34.992 5.75253 35.9035 6.42453 36.5755C7.09654 37.2475 8.00797 37.625 8.95833 37.625H37.625" stroke="#8134AF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.541 28.6663C13.4368 25.083 15.2285 16.1247 19.7077 16.1247C23.291 16.1247 23.291 21.4997 26.8743 21.4997C31.3535 21.4997 34.9368 12.5413 35.8327 8.95801" stroke="#8134AF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: '5',
    title: 'Alerts & Notifications',
    description: 'Stay informed with instant email alerts and custom alarms for any irregular activity, load deviation, or generator misuse.',
    icon: (
      <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.3965 37.625C18.711 38.1697 19.1633 38.622 19.7081 38.9365C20.2528 39.251 20.8707 39.4165 21.4997 39.4165C22.1286 39.4165 22.7465 39.251 23.2912 38.9365C23.836 38.622 24.2883 38.1697 24.6028 37.625" stroke="#8134AF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M39.4173 14.333C39.4173 10.2122 37.984 6.62884 35.834 3.58301" stroke="#8134AF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.84506 27.4588C5.61101 27.7153 5.45654 28.0343 5.40047 28.377C5.34439 28.7197 5.38912 29.0713 5.5292 29.3891C5.66929 29.7069 5.89869 29.977 6.18952 30.1668C6.48034 30.3566 6.82005 30.4578 7.16731 30.458H35.834C36.1812 30.4581 36.521 30.3574 36.812 30.1679C37.103 29.9785 37.3327 29.7086 37.4732 29.3911C37.6136 29.0735 37.6588 28.722 37.6031 28.3793C37.5475 28.0366 37.3935 27.7174 37.1598 27.4605C34.7769 25.0042 32.2506 22.3937 32.2506 14.333C32.2506 11.4819 31.1181 8.74763 29.102 6.73161C27.086 4.71559 24.3517 3.58301 21.5006 3.58301C18.6496 3.58301 15.9153 4.71559 13.8992 6.73161C11.8832 8.74763 10.7506 11.4819 10.7506 14.333C10.7506 22.3937 8.2226 25.0042 5.84506 27.4588Z" stroke="#8134AF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.16732 3.58301C5.01732 6.62884 3.58398 10.2122 3.58398 14.333" stroke="#8134AF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: '6',
    title: 'Carbon & Sustainability Metrics',
    description: 'Monitor your carbon footprint, analyze usage patterns, and track progress toward sustainability goals with visualized, actionable data.',
    icon: (
      <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32.25 37.625H40.3125V40.3125H32.25V37.625Z" fill="#8134AF" />
        <path d="M28.2188 40.3125C28.9609 40.3125 29.5625 39.7109 29.5625 38.9688C29.5625 38.2266 28.9609 37.625 28.2188 37.625C27.4766 37.625 26.875 38.2266 26.875 38.9688C26.875 39.7109 27.4766 40.3125 28.2188 40.3125Z" fill="#8134AF" />
        <path d="M38.9688 34.9375C39.7109 34.9375 40.3125 34.3359 40.3125 33.5938C40.3125 32.8516 39.7109 32.25 38.9688 32.25C38.2266 32.25 37.625 32.8516 37.625 33.5938C37.625 34.3359 38.2266 34.9375 38.9688 34.9375Z" fill="#8134AF" />
        <path d="M34.9375 34.9375H26.875V32.25H34.9375V34.9375ZM32.25 26.875H40.3125V29.5625H32.25V26.875Z" fill="#8134AF" />
        <path d="M28.2188 29.5625C28.9609 29.5625 29.5625 28.9609 29.5625 28.2188C29.5625 27.4766 28.9609 26.875 28.2188 26.875C27.4766 26.875 26.875 27.4766 26.875 28.2188C26.875 28.9609 27.4766 29.5625 28.2188 29.5625Z" fill="#8134AF" />
        <path d="M28.8812 18.9876L17.4593 12.5174C17.2573 12.4029 17.0291 12.3428 16.7969 12.3428C16.5647 12.3428 16.3364 12.4029 16.1344 12.5174L4.71253 18.9876C4.50572 19.1048 4.33369 19.2747 4.21401 19.4801C4.09432 19.6855 4.03126 19.9189 4.03125 20.1566V33.5941C4.03126 33.8318 4.09432 34.0653 4.21401 34.2707C4.33369 34.4761 4.50572 34.646 4.71253 34.7632L16.1344 41.2334L17.4688 37.6254L8.0625 32.2504V21.5004L16.7969 16.7973L25.5312 21.5004V24.1879H29.5625V20.1566C29.5625 19.9189 29.4994 19.6855 29.3797 19.4801C29.2601 19.2747 29.088 19.1048 28.8812 18.9876Z" fill="#8134AF" />
        <path d="M36.2816 20.1566H32.2493V11.4223L23.516 6.04727L13.4368 11.4223L11.4316 8.23758L22.8535 1.76742C23.0555 1.65295 23.2838 1.59277 23.516 1.59277C23.7482 1.59277 23.9764 1.65295 24.1785 1.76742L36.2805 9.40664L36.2816 20.1566Z" fill="#8134AF" />
      </svg>
    ),
  },
  {
    id: '7',
    title: 'Always-On Support',
    description: 'We offer 24/7 customer support to ensure your system is always running smoothly and a built-in AI chat support for guidance, analysis, and quick help anytime.',
    icon: (
      <svg width="41" height="43" viewBox="0 0 41 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M16.1017 0.0671875C16.5935 0.0233502 17.087 0.000933139 17.5807 0C18.103 0 18.6065 0.0277709 19.0606 0.0671875C19.8531 0.131508 20.5891 0.503166 21.1112 1.10277C28.9274 2.54417 35.3612 9.11152 35.6864 17.1409L39.3665 21.8261C39.9794 22.606 40.3126 23.5691 40.3125 24.5611C40.3125 26.3035 39.2823 27.9384 37.5919 28.6013C36.9361 28.8593 36.1281 29.1621 35.3146 29.4254L34.4932 34.9178C34.3389 35.9577 33.7793 36.8942 32.9367 37.5227C32.094 38.1512 31.0368 38.4205 29.9961 38.2718L28.07 37.9959V40.3161C28.07 40.7913 27.8813 41.247 27.5453 41.583C27.2093 41.919 26.7536 42.1077 26.2784 42.1077C25.8032 42.1077 25.3475 41.919 25.0115 41.583C24.6755 41.247 24.4867 40.7913 24.4867 40.3161V35.9292C24.4867 35.6725 24.5418 35.4187 24.6484 35.1852C24.755 34.9517 24.9105 34.7437 25.1045 34.5755C25.2984 34.4073 25.5262 34.2828 25.7725 34.2103C26.0188 34.1378 26.2778 34.1191 26.5319 34.1554L30.5049 34.7252C30.5562 34.7323 30.6084 34.7292 30.6585 34.7161C30.7086 34.703 30.7556 34.6801 30.7969 34.6488C30.8381 34.6176 30.8728 34.5784 30.899 34.5337C30.9251 34.4891 30.9422 34.4397 30.9492 34.3884L31.9391 27.7699C31.9908 27.4243 32.1424 27.1013 32.3752 26.8408C32.6081 26.5802 32.9121 26.3935 33.2498 26.3035C34.2065 26.049 35.3523 25.6316 36.2812 25.2661C36.5303 25.1684 36.7292 24.9078 36.7292 24.5611C36.7298 24.3718 36.6667 24.1878 36.55 24.0388L32.4981 18.8833C32.25 18.5678 32.115 18.1782 32.1147 17.7769C32.1147 11.9056 27.7726 6.70531 21.9614 4.98531C21.9757 5.81396 21.9855 6.78683 21.9855 7.9129C21.9855 8.74871 21.9802 10.1059 21.9721 10.9964C23.1777 11.8008 24.1393 12.9207 24.7521 14.2341C25.3649 15.5475 25.6054 17.0039 25.4474 18.4446C25.2893 19.8852 24.7389 21.2549 23.8559 22.4042C22.973 23.5535 21.7915 24.4384 20.4402 24.9624C22.6628 26.8938 25.4847 28.07 28.1077 28.07C28.343 28.07 28.5759 28.1164 28.7933 28.2064C29.0107 28.2965 29.2082 28.4284 29.3746 28.5948C29.5409 28.7612 29.6729 28.9587 29.7629 29.1761C29.853 29.3934 29.8993 29.6264 29.8993 29.8617C29.8993 30.097 29.853 30.33 29.7629 30.5473C29.6729 30.7647 29.5409 30.9622 29.3746 31.1286C29.2082 31.295 29.0107 31.427 28.7933 31.517C28.5759 31.607 28.343 31.6534 28.1077 31.6534C23.6384 31.6534 19.1234 29.2481 16.2047 25.7454C16.0984 25.6178 16.0104 25.4761 15.9431 25.3243C14.4197 25.001 13.0255 24.2355 11.935 23.1236C10.8445 22.0118 10.1062 20.603 9.81242 19.0736C9.51866 17.5442 9.68254 15.9621 10.2835 14.5254C10.8845 13.0886 11.8959 11.8611 13.1911 10.9964C13.1821 9.96856 13.1773 8.94073 13.1768 7.9129C13.178 6.86835 13.1852 5.95251 13.1983 5.16538C7.60115 7.095 3.58333 12.4037 3.58333 18.645C3.58333 24.0585 6.59064 29.1585 10.9265 31.5692C11.2056 31.7244 11.4382 31.9514 11.6001 32.2268C11.762 32.5021 11.8474 32.8157 11.8474 33.1351V40.3152C11.8474 40.7904 11.6586 41.2461 11.3226 41.5821C10.9866 41.9181 10.5309 42.1069 10.0557 42.1069C9.58055 42.1069 9.12483 41.9181 8.78883 41.5821C8.45283 41.2461 8.26406 40.7904 8.26406 40.3152V34.1483C3.25904 30.9116 0 24.9221 0 18.645C0 10.1346 5.96446 3.02165 13.9401 1.23625C14.1994 0.901929 14.5256 0.62531 14.8977 0.424029C15.2699 0.222747 15.68 0.101217 16.1017 0.0671875Z" fill="#8134AF" />
      </svg>
    ),
  },
  {
    id: '8',
    title: 'Remote Management',
    description: 'Securely access, manage, and compare up to 100,000 sites remotely with multi-level reporting and real-time dashboards.',
    icon: (
      <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M37.625 30.4583C37.625 29.508 37.2475 28.5965 36.5755 27.9245C35.9035 27.2525 34.992 26.875 34.0417 26.875H8.95833C8.00797 26.875 7.09654 27.2525 6.42453 27.9245C5.75253 28.5965 5.375 29.508 5.375 30.4583V34.0417C5.375 34.992 5.75253 35.9035 6.42453 36.5755C7.09654 37.2475 8.00797 37.625 8.95833 37.625H34.0417C34.992 37.625 35.9035 37.2475 36.5755 36.5755C37.2475 35.9035 37.625 34.992 37.625 34.0417V30.4583Z" stroke="#8134AF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.75 26.8753V23.292" stroke="#8134AF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.5 26.875V16.125" stroke="#8134AF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.5 16.125C24.4685 16.125 26.875 13.7185 26.875 10.75C26.875 7.78147 24.4685 5.375 21.5 5.375C18.5315 5.375 16.125 7.78147 16.125 10.75C16.125 13.7185 18.5315 16.125 21.5 16.125Z" stroke="#8134AF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ')

export function EmsFeaturesCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])
  const intervalRef = useRef<number | null>(null)
  const isWrappingRef = useRef(false)
  const extendedFeatures = useMemo(() => [...features, ...features, ...features], [])
  const baseIndex = features.length
  const [currentIndex, setCurrentIndex] = useState(baseIndex)
  const [isHovered, setIsHovered] = useState(false)

  const total = extendedFeatures.length
  const segmentLength = features.length

  const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
    const container = containerRef.current
    const targetCard = cardRefs.current[index]

    if (!container || !targetCard) {
      return
    }

    const containerWidth = container.clientWidth
    const scrollLeft = targetCard.offsetLeft - (containerWidth - targetCard.offsetWidth) / 2

    container.scrollTo({ left: scrollLeft, behavior })
  }, [])

  const startAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1
        const maxIndex = total - segmentLength // When we'd reach the last segment
        const minIndex = segmentLength // Start of middle segment

        // Wrap seamlessly when reaching boundaries - wrap happens instantly
        if (nextIndex >= maxIndex) {
          const wrappedIndex = nextIndex - segmentLength
          // Instantly wrap scroll position synchronously (invisible to user)
          const container = containerRef.current
          const targetCard = cardRefs.current[wrappedIndex]
          if (container && targetCard) {
            isWrappingRef.current = true
            const oldBehavior = container.style.scrollBehavior
            container.style.scrollBehavior = 'auto'
            const containerWidth = container.clientWidth
            const scrollLeft = targetCard.offsetLeft - (containerWidth - targetCard.offsetWidth) / 2
            container.scrollLeft = scrollLeft
            container.style.scrollBehavior = oldBehavior
            // Reset flag after current frame
            requestAnimationFrame(() => {
              isWrappingRef.current = false
            })
          }
          return wrappedIndex
        }

        if (nextIndex < minIndex) {
          const wrappedIndex = nextIndex + segmentLength
          // Instantly wrap scroll position synchronously
          const container = containerRef.current
          const targetCard = cardRefs.current[wrappedIndex]
          if (container && targetCard) {
            isWrappingRef.current = true
            const oldBehavior = container.style.scrollBehavior
            container.style.scrollBehavior = 'auto'
            const containerWidth = container.clientWidth
            const scrollLeft = targetCard.offsetLeft - (containerWidth - targetCard.offsetWidth) / 2
            container.scrollLeft = scrollLeft
            container.style.scrollBehavior = oldBehavior
            // Reset flag after current frame
            requestAnimationFrame(() => {
              isWrappingRef.current = false
            })
          }
          return wrappedIndex
        }

        return nextIndex
      })
    }, 2500)
  }, [total, segmentLength])

  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (!isWrappingRef.current) {
        scrollToIndex(currentIndex, 'auto')
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [currentIndex, scrollToIndex])

  useEffect(() => {
    scrollToIndex(baseIndex, 'auto')
  }, [baseIndex, scrollToIndex])

  useEffect(() => {
    // Only scroll if we're not in the middle of wrapping
    if (!isWrappingRef.current) {
      scrollToIndex(currentIndex)
    }
  }, [currentIndex, scrollToIndex])

  useEffect(() => {
    if (!isHovered) {
      startAutoScroll()
    } else {
      stopAutoScroll()
    }

    return () => {
      stopAutoScroll()
    }
  }, [isHovered, startAutoScroll, stopAutoScroll])

  return (
    <div
      className="relative w-full"
    >
      {/* <button
        type="button"
        onClick={() => goToSlide('prev')}
        aria-label="Previous feature"
        className="absolute left-2 sm:left-0 md:-left-12 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-black/5 transition hover:bg-[#5C12A7] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C12A7]"
      >
        <ChevronLeft className="h-6 w-6" />
      </button> */}
      {/* 
      <button
        type="button"
        onClick={() => goToSlide('next')}
        aria-label="Next feature"
        className="absolute right-2 sm:right-0 md:-right-12 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-black/5 transition hover:bg-[#5C12A7] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C12A7]"
      >
        <ChevronRight className="h-6 w-6" />
      </button> */}

      <div className="relative mx-auto w-full px-2 sm:px-4 lg:px-0">
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-[white] via-[white]/70 to-transparent md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-32 bg-gradient-to-l from-[white] via-[white]/70 to-transparent md:block" />
        <div
          ref={containerRef}
          className="flex gap-8 overflow-x-scroll scroll-smooth w-full px-8 py-10 snap-x snap-mandatory scrollbar-hide"
        >
          {extendedFeatures.map((feature, index) => {
            const distance = Math.abs(index - currentIndex)

            let depthClasses =
              'z-0 scale-[0.8] opacity-20 blur-md md:blur-[18px] lg:scale-[0.78] lg:opacity-20'

            if (distance === 0) {
              depthClasses = 'z-30 scale-110 opacity-100 blur-none'
            } else if (distance === 1) {
              depthClasses = 'z-20 scale-[0.94] opacity-80 blur-[2px] md:scale-[0.9] md:blur-[4px]'
            } else if (distance === 2) {
              depthClasses = 'z-10 scale-[0.88] opacity-55 blur-[6px] md:scale-[0.8] md:blur-[10px]'
            }

            return (
              <div
                key={`${feature.id}-${index}`}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={cn(
                  'relative flex-shrink-0 w-[min(80vw,320px)] sm:w-[320px] md:w-[360px] lg:w-[410px] snap-center transform-gpu transition-all duration-500 ease-out will-change-transform',
                  depthClasses
                )}
              >
                <div className="flex h-full flex-col rounded-lg border-4 border-white bg-gradient-to-b from-[#EDF3FA]/80 via-white to-[#EDF3FA]/90 px-8 py-10 shadow-[0px_24px_70px_rgba(15,23,42,0.08)] transition-shadow duration-500 ease-out">
                  <div className="mb-6 flex items-center justify-start">
                    <div className="flex h-20 w-20 items-center justify-center ">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-slate-900">{feature.title}</h3>
                  <p className="text-base leading-relaxed text-slate-500">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

