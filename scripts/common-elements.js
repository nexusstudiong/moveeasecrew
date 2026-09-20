const tag = document.getElementById('tag').innerHTML;

let nhome = "";
let nserv = "";
let ncontact = "";
let nblog = "";
let nprice = "";

if (tag === "nhome") {
    nhome = "active";
} else if (tag === "nserv") {
    nserv = "active"
} else if (tag === "ncontact") {
  ncontact = "active"
} else if (tag === "nblog") {
  nblog = "active"
} else if (tag === "nblog") {
  nprice = "active"
}

const tagg2 = document.getElementById('tag2') || "";
let tag2 = tagg2.innerHTML;

let n1 = "";
let n2 = "";
let n3 = "";
let n4 = "";
let n5 = "";
let n6 = "";
let n7 = "";
let n8 = "";

if (tag2 === "n1") {
    n1 = "active";
} else if (tag2 === "n2") {
    n2 = "active"
} else if (tag2 === "n3") {
    n3 = "active"
} else if (tag2 === "n4") {
    n4 = "active"
} else if (tag2 === "n5") {
    n5 = "active"
} else if (tag2 === "n6") {
    n6 = "active"
} else if (tag2 === "n7") {
    n7 = "active"
} else if (tag2 === "n8") {
    n8 = "active"
}

const footer = document.getElementById('footer') || "";
footer.innerHTML = `
    <div class="f1">
        <div class="logo">
            <div class="pic">
            </div>
            <div class="txt">
                <b>MoveEase<br>Crew Ltd</b>
            </div>
        </div>
        <div class="sitemap a1">
            <a href="" class="${nhome}">Home</a>
            <div>
                <p class="phn ${nserv}">Services<span><i class="fa-solid fa-angle-down"></i></span></p>
                <ul>
                <li><a class="${n1}" href="/Services/Moving-In-&-Out-Assistance/">Moving In & Out Assistance</a></li>
                <li><a class="${n2}" href="/Services/Cleaning-&-Organizing/">Cleaning & Organizing</a></li>
                <li><a class="${n3}" href="/Services/Painting-Services/">Painting Services</a></li>
                <li><a class="${n4}" href="/Services/Electrical-Services/">Electrical Services</a></li>
                <li><a class="${n5}" href="/Services/Curtains-&-Window-Blinds/">Curtains & Window Blinds </a></li>
                <li><a class="${n6}" href="/Services/Furniture-Making-&-Repairs/">Furniture Making & Repairs</a></li>
                <li><a class="${n7}" href="/Services/Plumbing-Services/">Plumbing Services</a></li>
                <li><a class="${n8}" href="/Services/Service-Technician-Division/">Service Technician Division</a></li>
                </ul>
                <p class="dsk ${nserv}">Services<span><i class="fa-solid fa-angle-down"></i></span></p>
            </div>
            <a href="#about">About Us</a>
            <a href="/Contact-Us" class="${ncontact}">Contact</a>
            <a href="https://maps.app.goo.gl/u1q1Zrv8iSTBGo6T9?g_st=com.google.maps.preview.copy" target="_blank">Maps / Directions</a>
            <a href="/Pricing" class="${nprice}">Pricing</a>
            <a href="/Blogs" class="${nblog}">Blogs</a>
        </div>
        <div class="soc">
            <a href="https://linktr.ee/moveeasecrew" target="_blank" rel="noopener">Linktree</a>
            <a href="https://wa.me/2347049631379">Whatsapp</a>
        </div>
    </div>
    <div class="f2">
        © 2026 MoveEase Crew Limited All rights reserved.
        <a href="/Terms-and-Conditions/">Terms of Use</a>
    </div>
     <a href="https://wa.me/2347049631379" class="whatsapp-link">Chat Us on WhatsApp<i class="fa-brands fa-whatsapp"></i></a>

`;

const nav = document.getElementById('navv');
nav.innerHTML = `
    <div class="logo">
        <div class="pic">
        </div>
        <div class="txt">
            <b>MoveEase<br>Crew Ltd</b>
        </div>
    </div>
    <div class="a1">
        <a href="/" class="${nhome}">Home</a>
        <div>
            <p class="${nserv}">Our Services<span><i class="fa-solid fa-angle-down"></i></span></p>
            <ul>
                <li><a class="${n1}" href="/Services/Moving-In-&-Out-Assistance/">Moving In & Out Assistance</a></li>
                <li><a class="${n2}" href="/Services/Cleaning-&-Organizing/">Cleaning & Organizing</a></li>
                <li><a class="${n3}" href="/Services/Painting-Services/">Painting Services</a></li>
                <li><a class="${n4}" href="/Services/Electrical-Services/">Electrical Services</a></li>
                <li><a class="${n5}" href="/Services/Curtains-&-Window-Blinds/">Curtains & Window Blinds </a></li>
                <li><a class="${n6}" href="/Services/Furniture-Making-&-Repairs/">Furniture Making & Repairs</a></li>
                <li><a class="${n7}" href="/Services/Plumbing-Services/">Plumbing Services</a></li>
                <li><a class="${n8}" href="/Services/Service-Technician-Division/">Service Technician Division</a></li>
            </ul>
        </div>
        <a href="#about">About Us</a>
        <a href="/Pricing" class="${nprice}">Pricing</a>
    </div>

    <div>
      <a href="/Get-A-Free-Estimate">
        <button>
            Get a Free Estimate
        </button>
      </a>
      <a href="/Service-Form/">
        <button>
            Book Now
        </button>
      </a>
    </div>
    <button class="hamb" id="bars">
        <i class="fa-solid fa-bars-staggered"></i>
    </button>
    
    <div class="a2" id="a2">
        <a href="/" class="${nhome}">Home</a>
        <div>
            <p class="${nserv}">Our Services<span><i class="fa-solid fa-angle-down"></i></span></p>
            <ul>
                <li><a class="${n1}" href="/Services/Moving-In-&-Out-Assistance/">Moving In & Out Assistance</a></li>
                <li><a class="${n2}" href="/Services/Painting-Services/">Painting Services</a></li>
                <li><a class="${n3}" href="/Services/Electrical-Services/">Electrical Services</a></li>
                <li><a class="${n4}" href="/Services/Curtains-&-Window-Blinds/">Curtains & Window Blinds </a></li>
                <li><a class="${n5}" href="/Services/Cleaning-&-Organizing/">Cleaning & Organizing</a></li>
                <li><a class="${n6}" href="/Services/Furniture-Making-&-Repairs/">Furniture Making & Repairs</a></li>
                <li><a class="${n7}" href="/Services/Plumbing-Services/">Plumbing Services</a></li>
                <li><a class="${n8}" href="/Services/Service-Technician-Division/">Service Technician Division</a></li>
            </ul>
        </div>
        <a href="../../../#about">About Us</a>
        <a href="/Pricing" class="${nprice}">Pricing</a>

        <a href="/Get-A-Free-Estimate/">
            <button class="phnstart">
                Get a Free Estimate
            </button>
        </a>
        <a href="/Service-Form/">
            <button class="phnstart" style="margin-top: 0;">
                Book Now
            </button>
        </a>
    </div>
`;

const faq = document.getElementById('faq') || "";
faq.innerHTML = `
  <h1>Frequently Asked Questions</h1>
  <span>
    Got questions about our booking services in Ibadan or home maintenance services in Ibadan? We’ve got answers! Check out our FAQs below and don’t forget to get a free Estimate for your move or maintenance project today!<br><br><br>
  </span>
  <div class="fq1">
    <div class="fq11">
      <div class="img">
        <img src="/images/faq.jpeg">
      </div>
    </div>
    <div class="fq12">
      <div class="faqitem">
        <div class="faqc">
          <p>How do I book a service?</p><i class="fa-solid fa-angle-down"></i>
        </div>
        <div class="faqans">
          <p>
          Booking is super easy! Head to our website and fill out the booking form, or give us a call, email, or send us a DM on Instagram, X, TikTok, or WhatsApp.<br><br>
          💡 <b>Tip</b>: You can also use our “Get a Free Estimate” section to select your services and get a custom pricing estimate instantly.
          </p>
        </div>
      </div>
      <div class="faqitem">
        <div class="faqc">
          <p>Can I reschedule or cancel my booking?</p><i class="fa-solid fa-angle-down"></i>
        </div>
        <div class="faqans">
          <p>
            Yes! You can reschedule or cancel up to 48 hours before your appointment without any extra fees. Reach out via call, email, or DM, and we’ll sort it out for you.
          </p>
        </div>
      </div>
      <div class="faqitem">
        <div class="faqc">
          <p>How soon can I book a service?</p><i class="fa-solid fa-angle-down"></i>
        </div>
        <div class="faqans">
          <p>
            You can book your service as little as 24 hours in advance for the best experience. For urgent needs, we’ll do our best to fit you in based on availability.<br><br>
            💡 <b>Tip</b>: Use the Get a Free Estimate section to plan your booking and see estimated costs for multiple services.
          </p>
        </div>
      </div>
      <div class="faqitem">
        <div class="faqc">
          <p>Do you provide materials for the services?</p><i class="fa-solid fa-angle-down"></i>
        </div>
        <div class="faqans">
          <p>
            Absolutely! We supply high-quality materials through our trusted supplier partners at great prices. If you prefer, you may also bring your own materials for home maintenance services in Ibadan.
          </p>
        </div>
      </div>
      <div class="faqitem">
        <div class="faqc">
          <p>How much do your services cost?</p><i class="fa-solid fa-angle-down"></i>
        </div>
        <div class="faqans">
          <p>Costs vary depending on the service and job size. Contact us via call, email, or DM for a personalized quote tailored to your relocation or home maintenance needs in Ibadan.<br><br>
          💡 <b>Tip</b>: Save time by using our Get a Free Estimate section — select the services you need, and receive a tailored estimate immediately.</p>
        </div>
      </div>
      <div class="faqitem">
        <div class="faqc">
          <p>Are there any hidden charges?</p><i class="fa-solid fa-angle-down"></i>
        </div>
        <div class="faqans">
          <p>Nope! We’re all about transparency. You’ll see all costs upfront when you book your services.</p>
        </div>
      </div>
      <div class="faqitem">
        <div class="faqc">
          <p>How do you vet your workers?</p><i class="fa-solid fa-angle-down"></i>
        </div>
        <div class="faqans">
          <p>We’re selective! Our workers are carefully screened for skills, experience, and professionalism, and trained to meet our high standards for movers and home maintenance experts in Ibadan.</p>
        </div>
      </div>
      <div class="faqitem">
        <div class="faqc">
          <p>What happens if my items get damaged during moving?</p><i class="fa-solid fa-angle-down"></i>
        </div>
        <div class="faqans">
          <p>
            We take every precaution to handle your belongings safely during relocation. All items moved with MoveEase Crew Limited are covered under our insurance policy against accidental damage, loss, or breakage during transit.<br><br>
            For fragile or high-value items, please inform us in advance so we can ensure proper handling and coverage. While our team is careful, there is always a small inherent risk when moving items, so insurance helps give you extra peace of mind.<br><br>
            💡 <b>Tip</b>: When requesting a move, use the Get a Free Estimate form to include all items and ensure proper coverage and pricing.
          </p>
        </div>
      </div>
      <div class="faqitem">
        <div class="faqc">
          <p>What happens if I’m not satisfied with the service?</p><i class="fa-solid fa-angle-down"></i>
        </div>
        <div class="faqans">
          <p>Your happiness matters! If something isn’t right, let us know immediately via call, email, or DM. We’ll resolve it quickly — whether through a revisit or a refund for your home maintenance services in Ibadan.</p>
        </div>
      </div>
      <div class="faqitem">
        <div class="faqc">
          <p>Can I request multiple services at once?</p><i class="fa-solid fa-angle-down"></i>
        </div>
        <div class="faqans">
          <p>Absolutely! Bundle services like painting, furniture assembly, appliance installation, and more in one booking for your Ibadan property — convenience at its best!<br><br>
          💡 <b>Tip</b>: Our Get a Free Estimate section is perfect for bundling multiple services and seeing a tailored estimate before booking.</p>
        </div>
      </div>
      <div class="faqitem">
        <div class="faqc" id="faqclast">
          <p>How do I make a payment on the website?</p><i class="fa-solid fa-angle-down"></i>
        </div>
        <div class="faqans lastans" >
          <p>It’s secure and simple with Paystack:</p><br>
            <p class="span">
              <ol>
                <li>
                  Pick your service and fill out the booking form.<br><br>
                </li>
                <li>
                  Check your order on the checkout page.<br><br>
                </li>
                <li>
                  Choose debit/credit card or bank transfer.<br><br>
                </li>
                <li>
                  Pay safely via Paystack.
                </li>
              </ol>
            </p>
          <p>You’ll get a confirmation email once payment is complete. Need help? Contact our support team via call, email, or DM on Instagram, X, TikTok, or WhatsApp!</p>
        </div>
      </div>
    </div>
  </div>
`;

const nheader = document.getElementById('nheader') || "";

let cmov = `
    <div class="scards">
    <div class="img">
    <img src="/images/m-moving.jpg" alt="Moving In & Out Assistance">
    </div>
    <p>Moving In & Out Assistance<br><br><span>We know that relocating can be overwhelming that’s why our team is here to handle every detail for you...</span></p>
    <a href="/Services/Moving-In-&-Out-Assistance">Read More<i class="fa-solid fa-arrow-right"></i></a>
    </div>
`;

let cclean = `
    <div class="scards">
    <div class="img">
    <img src="/images/m-cleaning.jpg" alt="Cleaning & Organizing">
    </div>
    <p>Cleaning & Organizing<br><br><span>At MoveEase Crew Limited, we understand that a clean, organized space is essential to feeling truly at home...</span></p>
    <a href="/Services/Cleaning-&-Organizing/">Read More<i class="fa-solid fa-arrow-right"></i></a>
    </div>
`;

let cpaint = `
    <div class="scards">
    <div class="img">
    <img src="/images/m-painting.jpg" alt="Painting Services">
    </div>
    <p>Painting Services<br><br><span>A fresh coat of paint can completely transform your space and at MoveEase Crew Limited, we make that transformation easy...</span></p>
    <a href="/Services/Painting-Services/">Read More<i class="fa-solid fa-arrow-right"></i></a>
    </div>
`;

let celec = `
    <div class="scards">
    <div class="img">
    <img src="/images/m-electrical.jpg" alt="Electrical Services">
    </div>
    <p>Electrical Services<br><br><span>Electrical work is one area where precision, safety, and professionalism matter most and that’s exactly what MoveEase Crew Limited delivers...</span></p>
    <a href="/Services/Electrical-Services/">Read More<i class="fa-solid fa-arrow-right"></i></a>
    </div>
`;

let ccurt = `
    <div class="scards">
    <div class="img">
    <img src="/images/m-curtains.jpg" alt="Curtains & Window Blinds ">
    </div>
    <p>Curtains & Window Blinds <br><br><span>The right curtains or blinds do more than just provide privacy, they elevate your space, enhance comfort, and add a touch of style...</span></p>
    <a href="/Services/Curtains-&-Window-Blinds/">Read More<i class="fa-solid fa-arrow-right"></i></a>
    </div>
`;

let cfurn = `
    <div class="scards">
    <div class="img">
    <img src="/images/m-furniture.jpg" alt="Furniture Making & Repairs">
    </div>
    <p>Furniture Making & Repairs<br><br><span>At MoveEase Crew Limited, we believe your furniture should reflect your personality, space, and lifestyle...</span></p>
    <a href="/Services/Furniture-Making-&-Repairs/">Read More<i class="fa-solid fa-arrow-right"></i></a>
    </div>
`;

let cplumb = `
    <div class="scards">
    <div class="img">
    <img src="/images/m-plumbing.jpg" alt="Plumbing Services">
    </div>
    <p>Plumbing Services<br><br><span>From minor leaks to full installations, MoveEase Crew Limited provides reliable and affordable plumbing services tailored to your property’s needs...</span></p>
    <a href="/Services/Plumbing-Services/">Read More<i class="fa-solid fa-arrow-right"></i></a>
    </div>
`;

let ctechn = `
    <div class="scards">
    <div class="img">
    <img src="/images/m-service.jpg" alt="Service Technician Division">
    </div>
    <p>Service Technician Division<br><br><span>Our expert Service Technician Division are here to handle the technical details that keep your home or office running smoothly...</span></p>
    <a href="/Services/Service-Technician-Division/">Read More<i class="fa-solid fa-arrow-right"></i></a>
    </div>
`;

if (tag2 === "n1") {
  nheader.style.backgroundImage = "url('/images/m-moving.jpg')"
  cmov = "";
} else if (tag2 === "n2") {
  nheader.style.backgroundImage = "url('/images/m-cleaning.jpg')"
  cclean = "";
} else if (tag2 === "n3") {
  nheader.style.backgroundImage = "url('/images/m-painting.jpg')"
  cpaint= "";
} else if (tag2 === "n4") {
  nheader.style.backgroundImage = "url('/images/m-electrical.jpg')"
  celec = "";
} else if (tag2 === "n5") {
  nheader.style.backgroundImage = "url('/images/m-curtains.jpg')"
  ccurt = "";
} else if (tag2 === "n6") {
  nheader.style.backgroundImage = "url('/images/m-furniture.jpg')"
  cfurn = "";
} else if (tag2 === "n7") {
  nheader.style.backgroundImage = "url('/images/m-plumbing.jpg')"
  cplumb = "";
} else if (tag2 === "n8") {
  nheader.style.backgroundImage = "url('/images/m-service.jpg')"
  ctechn = "";
} else if (nheader) {
  nheader.style.backgroundImage = "url('/images/bg.jpg')"
  nheader.style.backgroundPosition = "bottom";
}

const swp = document.getElementById('swp') || "";
swp.innerHTML = `<h1>Services we provide</h1>` + `<div class="scard">` + cmov + cclean + cpaint + celec + ccurt + cfurn + cplumb + ctechn + `</div>`;