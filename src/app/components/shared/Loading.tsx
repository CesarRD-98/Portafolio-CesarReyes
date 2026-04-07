'use client'

export default function Loading() {
    return (
        <div className="
                fixed inset-0 z-50
                flex items-center justify-center
                bg-white dark:bg-neutral-900
                ">

            <svg
                className="cr-loader w-24 h-24"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
            >

                {/* TRACK */}
                <path
                    className="cr-track"
                    d="M30,25 C15,25 15,75 30,75 H50 V50 H70 C80,50 80,25 70,25 Z M50,50 L75,80"
                />

                {/* ANIMATED */}
                <path
                    className="cr-animated-path"
                    d="M30,25 C15,25 15,75 30,75 H50 V50 H70 C80,50 80,25 70,25 Z M50,50 L75,80"
                />

            </svg>

        </div>
    )
}