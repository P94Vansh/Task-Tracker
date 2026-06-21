import React, { useEffect, useState } from "react"
import { authClient } from "../lib/auth-client"

function LightThemeIcon() {
	return (
		<svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current dark:hidden">
			<path d="M12 17a5 5 0 1 1 5-5 5 5 0 0 1-5 5Zm0-12.5a.75.75 0 0 1 .75.75V7a.75.75 0 0 1-1.5 0V5.25A.75.75 0 0 1 12 4.5Zm0 12.75a.75.75 0 0 1 .75.75v1.75a.75.75 0 0 1-1.5 0V18a.75.75 0 0 1 .75-.75Zm7.25-5.25a.75.75 0 0 1-.75.75h-1.75a.75.75 0 0 1 0-1.5h1.75a.75.75 0 0 1 .75.75Zm-12.75 0a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h1.75a.75.75 0 0 1 .75.75Zm10.53-5.78a.75.75 0 0 1-1.06 0l-1.24-1.24a.75.75 0 0 1 1.06-1.06l1.24 1.24a.75.75 0 0 1 0 1.06Zm-9.06 9.06a.75.75 0 0 1-1.06 0L5.69 16.53a.75.75 0 1 1 1.06-1.06l1.24 1.24a.75.75 0 0 1 0 1.06Zm0-10.12a.75.75 0 0 1 0 1.06L6.75 8.69a.75.75 0 1 1-1.06-1.06l1.24-1.24a.75.75 0 0 1 1.06 0Zm9.06 9.06a.75.75 0 0 1 0 1.06l-1.24 1.24a.75.75 0 0 1-1.06-1.06l1.24-1.24a.75.75 0 0 1 1.06 0Z" />
		</svg>
	)
}

function DarkThemeIcon() {
	return (
		<svg aria-hidden="true" viewBox="0 0 24 24" className="hidden h-4 w-4 fill-current dark:block">
			<path d="M21 12.3A8.7 8.7 0 1 1 11.7 3 7 7 0 0 0 21 12.3ZM8.5 19a7 7 0 0 1 0-14c.36 0 .71.03 1.05.08A9 9 0 0 0 12 21c-1.26 0-2.45-.25-3.5-.7Z" />
		</svg>
	)
}

function Navbar() {
    const [imgUrl,setImgUrl]=useState('')
    const [theme,setTheme]=useState('light')
	const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
    const {data:session,isPending}=authClient.useSession()
    useEffect(()=>{
        if(session){
			// Pull the current session avatar into the header.
            setImgUrl(session?.user?.image)
        }
    },[session])

	// Toggle the document theme class for the whole app.
    const toggleThemeChange=()=>{
        const html=document.documentElement
        if(html.classList.contains('dark')){
            html.classList.remove('dark')
        }
        else{
            html.classList.add('dark')
        }
    }
	const handleLogout=async()=>{
		await authClient.signOut()
		location.reload()
	}
	return (
		<header className="border-b border-neutral-200 bg-neutral-50/95 text-neutral-950 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/95 dark:text-neutral-50">
			<div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6">
				<div className="flex items-center justify-between gap-3">
					<div className="flex items-center gap-3 text-left">
						<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-950 text-sm font-semibold tracking-tight text-white shadow-sm dark:bg-white dark:text-neutral-950">
						TT
						</div>
						<div className="hidden leading-tight sm:block">
							<p className="text-sm font-semibold text-neutral-950 dark:text-neutral-50">Task Tracker</p>
							<p className="text-xs text-neutral-500 dark:text-neutral-400">Simple work, clearly organized</p>
						</div>
					</div>

					<div className="flex items-center gap-3">
						<button
							type="button"
							className="flex h-10 items-center justify-center rounded-full border border-neutral-300 bg-white px-3.5 text-sm font-medium text-neutral-700 shadow-sm transition-colors hover:bg-neutral-100 sm:h-10 sm:gap-2 sm:px-3.5 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
							onClick={toggleThemeChange}
						>
							<LightThemeIcon />
							<DarkThemeIcon />
							<span className="hidden sm:inline">Theme</span>
						</button>

						<div className="relative">
							<button
								type="button"
								className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-sm font-semibold text-neutral-800 shadow-sm transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
								onClick={() => setIsProfileMenuOpen((currentValue) => !currentValue)}
								aria-label="Profile menu"
							>
								{imgUrl && <img className="h-full w-full rounded-full object-cover" src={imgUrl} alt="Profile" />}
							</button>

							{isProfileMenuOpen && (
								<div className="absolute right-0 top-full z-10 mt-2 w-36 rounded-2xl border border-neutral-200 bg-white p-2 shadow-lg dark:border-neutral-800 dark:bg-neutral-950">
									<button
										type="button"
										className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900"
										onClick={handleLogout}
									>
										Logout
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Navbar
