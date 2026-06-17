import React from 'react'
import logo from "../assets/github-svgrepo-com.svg"
import {authClient} from '../lib/auth-client'
const GithubIcon = () => {
    return (
        <svg
            className="h-6 w-6 fill-current text-white transition-colors duration-200 hover:text-neutral-200 dark:text-neutral-900 dark:hover:text-neutral-700"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.008.069-.008 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
    )
}
const GoogleIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303C33.654 32.657 29.237 36 24 36c-6.627 0-12-5.373-12-12S17.373 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.27 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 16.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.27 4 24 4c-7.682 0-14.318 4.337-17.694 10.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.167 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.145 35.091 26.715 36 24 36c-5.216 0-9.619-3.329-11.283-7.946l-6.522 5.025C9.536 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.084 5.57l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
};
function Signup() {
    const handleSignUp=async(provider)=>{
        await authClient.signIn.social({
            provider:provider,
            callbackURL:"/"
        })
    }
    return (
        <main className="min-h-screen bg-neutral-50 text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50">
            <div className="mx-auto flex min-h-screen w-full max-w-md items-center px-6 py-12">
                <section className="w-full rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                    <div className="space-y-2">
                        <p className="text-sm font-medium tracking-[0.22em] text-neutral-500 uppercase dark:text-neutral-400">
                            Task Tracker
                        </p>
                        <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
                            Create your account
                        </h1>
                        <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                            Use GitHub to sign up and keep everything in one place.
                        </p>
                    </div>

                    <div className="mt-8">
                        <button
                            onClick={()=> {handleSignUp("github")}}
                            type="button"
                            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-neutral-300 bg-neutral-950 px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 focus:ring-offset-white dark:border-neutral-700 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 dark:focus:ring-offset-neutral-900"
                        >
                            <GithubIcon/>
                            <span>Sign up with GitHub</span>
                        </button>
                    </div>
                    <div className="mt-8">
                        <button
                            onClick={()=> {handleSignUp("google")}}
                            type="button"
                            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-neutral-300 bg-neutral-950 px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 focus:ring-offset-white dark:border-neutral-700 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 dark:focus:ring-offset-neutral-900"
                        >
                            <GoogleIcon/>
                            <span>Sign up with Google</span>
                        </button>
                    </div>

                    <p className="mt-6 text-center text-xs leading-5 text-neutral-500 dark:text-neutral-400">
                        Minimal setup. No extra fields. No noise.
                    </p>
                </section>
            </div>
        </main>
    )
}

export default Signup
