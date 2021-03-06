const $root = $("#root");
export async function helloWorld() {
    $("#root").append("hello World")
}
export async function renderheader() {
    $root.append(`<header class="header-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="logo">
                        <a href="./index.html">
                            <img src="img/logo.png" alt="">
                        </a>
                    </div>
                    <nav class="nav-menu mobile-menu">
                        <ul>
                            <li class="active"><a href="./index.html">Home</a></li>
                            <li><a href="./about.html">About</a></li>
                            <li><a href="./portfolio.html">Portfolio</a></li>
                            <li><a href="./contact.html">Contact</a></li>
                        </ul>
                    </nav>
                    <div class="top-search search-switch">
                        <i class="fa fa-search"></i>
                    </div>
                    <div id="mobile-menu-wrap"></div>
                </div>
            </div>
        </div>
    </header>
    `)
}

export async function renderBody() {
    $root.append(`<section class="about-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 p-0">
                    <div class="about-pic set-bg" data-setbg="img/headshot.jpg">
                    </div>
                </div>
                <div class="col-lg-6 p-0">
                    <div class="about-text">
                        <div class="section-title">
                            <h2>Hi, I'm Ari.</h2>
                            <p>I'm a recent graduate of UNC who loves exploring and photographing the outdoors. The photographs on this site come from my travels, the most recent of which are listed below. I hope you enjoy my work and would love any feedback you may have!
                            </p>
                        </div>
                        <div class="at-list">
                            <div class="al-item">
                                
                                <div class="al-text">
                                    <h5>Post Graduation Road Trip</h5>
                                    <p>On my most recent roadtrip, I traded in Trevor the Subaru for Gus the Van and visited Nevada, California, Oregon, Washington, Idaho, Montana, Wyoming, and Utah. On this trip, I photographed North Cascades National Park, Seqouia National Park, and Glacier National Park among others.</p>
                                </div>
                            </div>
                            <div class="al-item">
                                
                                <div class="al-text">
                                    <h5>Winter Break Road Trip</h5>
                                    <p>Over winter break, I lived in Trevor the Subaru and traveled through North Carolina, Georgia, Mississippi, Alabama, Louisiana, Texas, New Mexico, Arizona, Utah, Colorado, Kansas, Missouri, Illinois, Kentucky, and Tennessee. I photographed some awesome destinations in New Mexico (e.g. Ah-Shi-Sle-Pah, Santa Fe National Forest, and Valles Caldera), Utah (e.g. Bryce Canyon National Park, Zion National Park, and Canyonlands National Park), and Colorado (e.g. Great Sand Dunes National Park and Black Canyon of the Gunnison).   </p>
                                </div>
                            </div>
                            <div class="al-item">
                                
                                <div class="al-text">
                                    <h5>Semester in Canada</h5>
                                    <p>I was fortunate enough to spend lockdown in Vancouver, BC. I travelled to Whistler, Golden Ears Provincial Park, and Manning Provincial Park</p>
                                </div>
                            </div>
                            <div class="al-item">
                                
                                <div class="al-text">
                                    <h5>Backpacking in North Carolina</h5>
                                    <p>Although not a single trip, many of my photographs come from my backpacking trips in N.C. Some of my favorites include the Art Loeb Trail, Linville Gorge Wilderness, and Shining Rock Wilderness</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `)
}

export async function loadIntoDOM() {
    await helloWorld()

    
}

$(function () {
    loadIntoDOM();
});
