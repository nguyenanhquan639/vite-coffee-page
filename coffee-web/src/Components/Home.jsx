export default function Home() {
    const info_data = [
        {
            icon: "fa-solid fa-phone",
            title: "000 (123) 456 7890",
            description: "A small river named Duden flows by their place and supplies."
        },
        {
            icon:"fa-solid fa-location-crosshairs",
            title: "198 West 21th Street",
            description: "203 Fake St. Mountain View, San Francisco, California, USA"
        },
        {
            icon:"fa-regular fa-clock",
            title: "Open Monday-Friday",
            description: "8:00am - 9:00pm"
        },
    ]

    const utilities_data = [
        {
            icon: "fa-regular fa-rectangle-list fa-3x",
            title: "EASY TO ORDER",
            description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        },
        {
            icon: "fa-solid fa-truck-fast fa-3x",
            title: "FASTEST DELIVERY",
            description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        },
        {
            icon: "fa-solid fa-mug-saucer fa-3x",
            title: "QUALITY COFFEE",
            description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        }
    ]

    const infoElement = info_data.map(e => {
        return (
            <div className="info">
                    <i className={e.icon}></i>
                    <div>
                        <p>{e.title}</p>
                        <p>{e.description}</p>
                    </div>
                </div>
        )
    })

    const utilitiesElement = utilities_data.map(e => {
        return (
            <div className="utilities">
                    <i className={e.icon}></i>
                    <p>{e.title}</p>
                    <p>{e.description}</p>
                   
                </div>
        )
    })

    return (
        <div className="home-container">
            <div className="home-screen">
                <div>
                    <span className="welcome">Welcome</span>
                    <h1>THE BEST COFFEE TESTING EXPERIENCE</h1>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <div className="btn-container">
                        <button className="btn brown" >Order Now</button>
                        <button className="btn white">View Menu</button>
                    </div>
                </div>
            </div>
            <div className="info-container">
                {infoElement}
            </div>
            <div className="about-container">
                <div className="bar-counter"></div>
                <div className="about">
                    <div>
                        <span>Discover</span>
                        <h1>OUR STORY</h1>
                        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                    </div>
                </div>
            </div>
            <div className="utilities-container">
                {utilitiesElement}
            </div>
        </div>
    )
}