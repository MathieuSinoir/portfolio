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

                        <div className='ContainerSocialProfil'>
                            <a href='https://github.com/MathieuSinoir'>
                                <img src='src/assets/github.png'></img>
                            </a>
                            <a href='https://www.linkedin.com/in/mathieu-sinoir-a3a97882/'>
                                <img src='src/assets/linkedi.png'></img>
                            </a>

                        </div>


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