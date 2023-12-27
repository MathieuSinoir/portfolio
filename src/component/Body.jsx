import React from 'react'

function Body() {
    return (
        <>
            <section className='BodyMain'>
                <section className='BodyMainTitre'>
                    <section className='BodyTitre'>
                        <h1>LET ME INTRODUCE MYSELF</h1>
                        <h1>I'M JUNIOR WEB DEVELOPEUR</h1>
                        <h2>You can check my profil </h2>
                        <section className='SocialProfil'>
                            <ul>
                                <li className='LinkedingProfil'><img className='GitHubImg' src='src/assets/github.png' alt='icone github'></img></li>
                                <li className='GuitHubProfil'><img className='LinkdinImg' src='src/assets/linkedin.png' alt='icone linkdin'></img></li>

                            </ul>
                        </section>

                    </section>
                </section>
                <section className='BodyMainPic'>
                    <img src="src/assets/0_ngAthWxOvKZHvsw9.jpg" alt="MyPic" />
                </section>
            </section>
        </>
    )
}

export default Body