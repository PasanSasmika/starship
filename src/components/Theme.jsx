import { useEffect, useState } from 'react'
import { Sun } from 'lucide-react'

export default function Theme() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const daisyThemes = [
    'light', 'dark', 'bumblebee', 'emerald', 'corporate', 'synthwave','valentine', 'halloween', 'forest', 
    'lofi',  'black', 'luxury','lemonade', 'coffee','abyss', 
  ]

  return (
    <div className="dropdown dropdown-end">
      <button className="btn btn-ghost btn-circle">
        <Sun className="w-6 h-6" />
      </button>

      <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60">
        {daisyThemes.map((themeName) => (
          <li key={themeName}>
            <button
              onClick={() => setTheme(themeName)}
              className={`capitalize w-full text-left ${theme === themeName ? 'active bg-primary text-primary-content' : ''}`}
            >
              {themeName.replace(/-/g, ' ')}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
