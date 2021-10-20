export async function renderPhotos1() {
let html = `<div class="pf-item set-bg snow" data-setbg="img/snow/snow-4.jpg">
                            <a href="img/snow/snow-4.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Humphreys Peak</h4>
                                <span>Snow</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg snow" data-setbg="img/snow/snow-5.jpg">
                            <a href="img/snow/snow-5.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>North Cascades</h4>
                                <span>Snow</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg deserts" data-setbg="img/desert/desert-6.jpg">
                            <a href="img/desert/desert-6.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Valley of Fire</h4>
                                <span>Desert</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg deserts" data-setbg="img/desert/desert-7.jpg">
                            <a href="img/desert/desert-7.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Smith Rock</h4>
                                <span>Desert</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg deserts" data-setbg="img/desert/desert-8.jpg">
                            <a href="img/desert/desert-8.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Petrified Forest</h4>
                                <span>Desert</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg deserts" data-setbg="img/desert/desert-9.jpg">
                            <a href="img/desert/desert-9.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Valley of Fire</h4>
                                <span>Desert</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg deserts" data-setbg="img/desert/desert-10.jpg">
                            <a href="img/desert/desert-10.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Utah Highway</h4>
                                <span>Desert</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg deserts" data-setbg="img/desert/desert-11.jpg">
                            <a href="img/desert/desert-11.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Petrified Forest</h4>
                                <span>Desert</span>
                            </div>
                        </div>
                        
                        
                        <div class="pf-item set-bg forests" data-setbg="img/forest/forest-6.jpg">
                            <a href="img/forest/forest-6.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>EC Manning</h4>
                                <span>Forests</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg forests" data-setbg="img/forest/forest-7.jpg">
                            <a href="img/forest/forest-7.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>EC Manning</h4>
                                <span>Forests</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg forests" data-setbg="img/forest/forest-8.jpg">
                            <a href="img/forest/forest-8.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Santa Fe</h4>
                                <span>Forests</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg forests" data-setbg="img/forest/forest-9.jpg">
                            <a href="img/forest/forest-9.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Carolina North</h4>
                                <span>Forests</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg forests" data-setbg="img/forest/forest-10.jpg">
                            <a href="img/forest/forest-10.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Columbia River Gorge</h4>
                                <span>Forests</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg forests" data-setbg="img/forest/forest-11.jpg">
                            <a href="img/forest/forest-11.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Linville Gorge</h4>
                                <span>Forests</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg forests" data-setbg="img/forest/forest-12.jpg">
                            <a href="img/forest/forest-12.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Merrit's Pasture</h4>
                                <span>Forests</span>
                            </div>
                        </div>
                        
                        <div class="pf-item set-bg mountains" data-setbg="img/mountain/mountain-6.jpg">
                            <a href="img/mountain/mountain-6.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Humphreys Peak</h4>
                                <span>Mountains</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg mountains" data-setbg="img/mountain/mountain-7.jpg">
                            <a href="img/mountain/mountain-7.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Humphreys Peak</h4>
                                <span>Mountains</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg mountains" data-setbg="img/mountain/mountain-8.jpg">
                            <a href="img/mountain/mountain-8.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Zion</h4>
                                <span>Mountains</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg mountains" data-setbg="img/mountain/mountain-9.jpg">
                            <a href="img/mountain/mountain-9.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Humphreys Peak</h4>
                                <span>Mountains</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg mountains" data-setbg="img/mountain/mountain-10.jpg">
                            <a href="img/mountain/mountain-10.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Humphreys Peak</h4>
                                <span>Mountains</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg mountains" data-setbg="img/mountain/mountain-11.jpg">
                            <a href="img/mountain/mountain-11.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Humphreys Peak</h4>
                                <span>Mountains</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg mountains" data-setbg="img/mountain/mountain-12.jpg">
                            <a href="img/mountain/mountain-12.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Humphreys Peak</h4>
                                <span>Mountains</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg mountains" data-setbg="img/mountain/mountain-13.jpg">
                            <a href="img/mountain/mountain-13.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Linville Gorge</h4>
                                <span>Mountains</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg mountains" data-setbg="img/mountain/mountain-14.jpg">
                            <a href="img/mountain/mountain-14.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Glacier</h4>
                                <span>Mountains</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg mountains" data-setbg="img/mountain/mountain-15.jpg">
                            <a href="img/mountain/mountain-15.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Humphreys Peak</h4>
                                <span>Mountains</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg mountains" data-setbg="img/mountain/mountain-16.jpg">
                            <a href="img/mountain/mountain-16.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Wedgemount</h4>
                                <span>Mountains</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg mountains" data-setbg="img/mountain/mountain-17.jpg">
                            <a href="img/mountain/mountain-17.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Wedgemount</h4>
                                <span>Mountains</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg mountains" data-setbg="img/mountain/mountain-18.jpg">
                            <a href="img/mountain/mountain-18.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>Whistler</h4>
                                <span>Mountains</span>
                            </div>
                        </div>`
    document.getElementById("append").innerHTML = html
}

export async function renderPhotos2() {

}

export async function renderPhotos3() {

}

export async function renderPhotos4() {

}

export async function renderPhotos5() {

}