import { useState } from "react";

function Gallery(){
    
  return(
        <section className="gallery">
        <div className="heading">
          <h1>Gallery</h1>
        </div>
        <div className="images-grid gallery1">
          <img src="https://ice-eu-108964.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc0MkL0hl4ERYLJoYzeIyTf5GUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0r1hO6ZpBtkzj2HzrupjXjwmQwceomeMctw7QHrhFiP084TY9Os5hDkdhz9z3IEslDm9pfTzXqRRKmtc13tindiYSgJRaJlEOUwooZC.YistQ--" alt="" />
          <img src="https://ice-eu-108964.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc2.YOXudW3HwHqNHvSABEdqGUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0oq.fSjAh4kOnf.5SpXgTCuPsdWs.k7sBC5d.lkj.439luWHAb_Hl9jsqAn27xH4CLm9pfTzXqRRKmtc13tindi4RxfkV1jhbngnYnPAKqXWg--" alt="" />
          <img src="https://ice-eu-108964.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc0565qywcxQerj7RrviloHaGUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0pcaPyN.4T6TFZc866kYO2Y0MWIkuPdjMLek1NyddXWoIvmuzKjf9oRtYTLgfewBznm9pfTzXqRRKmtc13tindiyP1gNcYYkqoEIXiYsFn0AA--" alt="" />
          <img src="https://ice-eu-108964.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc3PExOR_PFZ17BdqBUq23hKGUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0rApyboZ.ggEDZ8L3Ey6cIZgQNYoNN1Sa9IG4zhMJ0HmhYDepnCEjF2186n9JMv1FHm9pfTzXqRRKmtc13tindiYVugYIgnQOtNbG.7.dMDLA--" alt="" />
          <img src="https://ice-eu-108964.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc0hdMSkzZ0eCfcTMBJizOeJGUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0rwqyM3JQ6dFKPcrEAzKvBMcGPD9jrkShRAIk2vUx58kT0SEkaldNHBcLNqLRA._Kfm9pfTzXqRRKmtc13tindioorVm_bfmwpFyQep8qnXMw--" alt="" />
          <img src="https://ice-eu-108964.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc0zxxq3kQgTkKEv.j_xvgn6GUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0ox2jPMQ2utYPVrZPFLCuF6KjWXJnVVnUrqfJOK5kGvX7k_.N7AIRyCbounKJI4Syfm9pfTzXqRRKmtc13tindi1ToXa8pTeJK6YuyiJN5suQ--" alt="" />
          
        </div>
        <div className="images-grid gallery2">
          <img src="https://ice-eu-108964.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc0MkL0hl4ERYLJoYzeIyTf5GUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0r1hO6ZpBtkzj2HzrupjXjwmQwceomeMctw7QHrhFiP084TY9Os5hDkdhz9z3IEslDm9pfTzXqRRKmtc13tindiYSgJRaJlEOUwooZC.YistQ--" alt="" />
          <img src="https://ice-eu-108964.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc2.YOXudW3HwHqNHvSABEdqGUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0oq.fSjAh4kOnf.5SpXgTCuPsdWs.k7sBC5d.lkj.439luWHAb_Hl9jsqAn27xH4CLm9pfTzXqRRKmtc13tindi4RxfkV1jhbngnYnPAKqXWg--" alt="" />
          <img src="https://ice-eu-108964.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc0565qywcxQerj7RrviloHaGUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0pcaPyN.4T6TFZc866kYO2Y0MWIkuPdjMLek1NyddXWoIvmuzKjf9oRtYTLgfewBznm9pfTzXqRRKmtc13tindiyP1gNcYYkqoEIXiYsFn0AA--" alt="" />
          <img src="https://ice-eu-108964.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc3PExOR_PFZ17BdqBUq23hKGUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0rApyboZ.ggEDZ8L3Ey6cIZgQNYoNN1Sa9IG4zhMJ0HmhYDepnCEjF2186n9JMv1FHm9pfTzXqRRKmtc13tindiYVugYIgnQOtNbG.7.dMDLA--" alt="" />
          <img src="https://ice-eu-108964.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc0hdMSkzZ0eCfcTMBJizOeJGUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0rwqyM3JQ6dFKPcrEAzKvBMcGPD9jrkShRAIk2vUx58kT0SEkaldNHBcLNqLRA._Kfm9pfTzXqRRKmtc13tindioorVm_bfmwpFyQep8qnXMw--" alt="" />
          <img src="https://ice-eu-108964.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc0zxxq3kQgTkKEv.j_xvgn6GUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0ox2jPMQ2utYPVrZPFLCuF6KjWXJnVVnUrqfJOK5kGvX7k_.N7AIRyCbounKJI4Syfm9pfTzXqRRKmtc13tindi1ToXa8pTeJK6YuyiJN5suQ--" alt="" />
          
        </div>
      </section>
    )
}

export default Gallery;