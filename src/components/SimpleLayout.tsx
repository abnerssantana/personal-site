import clsx from 'clsx'
export function SimpleLayout({ title, intro, children }) {
  return (
    <>
      <header className="max-w-full">
        <h1
          className={clsx(
            'text-xl font-bold tracking-wide text-gray-900 dark:text-gray-100 sm:text-2xl'
          )}
        >
          {title}
        </h1>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
          {intro}
        </p>
      </header>
      <div className="mt-4 sm:mt-8">{children}</div>
    </>
  )
}
