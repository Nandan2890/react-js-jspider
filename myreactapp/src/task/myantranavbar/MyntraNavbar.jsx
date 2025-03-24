import React from 'react'

const MyntraNavbar = () => {
  return (
    <div>
      <nav>
        <figure></figure>
        <section>
            <article>
                <ul>
                    <li>men</li>
                    <li>women</li>
                    <li>kids</li>
                    <li>home & living</li>
                    <li>beauty</li>
                    <li>studio</li>
                    <div className="search_bar">
                        <input type="text" />
                    </div>
                    <li></li>
                    <button>log in </button>
                    <button>sign up</button>
                </ul>
            </article>
        </section>
      </nav>
    </div>
  )
}

export default MyntraNavbar
