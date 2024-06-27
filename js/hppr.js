document.addEventListener('DOMContentLoaded', () =>{
    bringjsondata();
});

var wholeproperties = '';
var hpfeatures = '';
var bestpropertyvalue = '';
var oneproperty = '';
/*function calldata() {
return new Promise((resolve, reject) => {
    resolve(bringjsondata());
});
};
/*async function datareshufle() {
    await calldata()
  return new Promise((resolve, reject) => {
    shuffleArray(wholeproperties)

    resolve(hpfeatures = wholeproperties.slice(0, 6));
    resolve(bestpropertyvalue = wholeproperties.slice(6, 9));
    resolve(oneproperty = wholeproperties[9]);
  });
};
async function callshowfeatures() {
    await calldata()
  return new Promise((resolve, reject) => {
    resolve(showfeatures());
  });
};
async function callshowbestpropt() {
    await callshowfeatures()
  return new Promise((resolve, reject) => {
    resolve(showbestpropt());
  });
};

async function callshowsinglepropt() {
    await callshowbestpropt()
  return new Promise((resolve, reject) => {
    resolve(showsinglepropt());
  });
};
*/
function bringjsondata(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'js/property.json', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function(data) {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            wholeproperties = JSON.parse(xhr.responseText);
            shuffleArray(wholeproperties)
            hpfeatures = wholeproperties.slice(0, 6)
            bestpropertyvalue = wholeproperties.slice(6, 9)
            oneproperty = wholeproperties[9]
            showfeatures()
        }
    }
    xhr.send();
}


function showfeatures(){
    let output = '';
    for (let i = 0; i < hpfeatures.length; i++) {
        let fthome = hpfeatures[i].fthome;
        let ftlocation = hpfeatures[i].ftlocation;
        let ftbed = hpfeatures[i].ftbed;
        let ftbath = hpfeatures[i].ftbath;
        let ftsqft = hpfeatures[i].ftsqft;
        let ftamount = hpfeatures[i].ftamount;
        let ftimage = hpfeatures[i].ftimage;
        var formattedAmount = new Intl.NumberFormat('en-US').format(ftamount);
       
        output += `
        <div class="col-xl-4 col-lg-6 col-md-6">
        <div class="homeya-box">
            <div class="archive-top">
                <a href="javascript:;" class="images-group">
                    <div class="images-style">
                        <img src="images/sales/${ftimage}" alt="img">
                    </div>
                    <div class="top">
                        <ul class="d-flex gap-8">
                            <li class="flag-tag success">Featured</li>
                            <li class="flag-tag style-1">For Sale</li>
                        </ul>
                        <ul class="d-flex gap-4">
                            <li class="box-icon w-32">
                                <span class="icon icon-arrLeftRight"></span>
                            </li>
                            <li class="box-icon w-32">
                                <span class="icon icon-heart"></span>
                            </li>
                            <li class="box-icon w-32">
                                <span class="icon icon-eye"></span>
                            </li>
                        </ul>
                    </div>
                    <!--<div class="bottom">
                        <span class="flag-tag style-2">Studio</span>
                    </div>-->
                </a>
                <div class="content">
                    <div class="h7 text-capitalize fw-7"><a href="javascript:;" class="link"> ${fthome}</a></div>
                    <div class="desc"><i class="fs-16 icon icon-mapPin"></i><p>${ftlocation}</p> </div>
                    <ul class="meta-list">
                        <li class="item">
                            <i class="icon icon-bed"></i>
                            <span>${ftbed}</span>
                        </li>
                        <li class="item">
                            <i class="icon icon-bathtub"></i>
                            <span>${ftbath}</span>
                        </li>
                        <li class="item">
                            <i class="icon icon-ruler"></i>
                            <span>${ftsqft} SqFT</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="archive-bottom d-flex justify-content-between align-items-center">
                <!--<div class="d-flex gap-8 align-items-center">
                    <div class="avatar avt-40 round">
                        <img src="images/avatar/avt-6.jpg" alt="avt">
                    </div>
                    <span>Arlene McCoy</span>
                </div>-->
                <div class="d-flex align-items-center">
                    <h6>&#165; ${formattedAmount}</h6>
                    <!--<span class="text-variant-1">/SqFT</span>-->
                </div>
            </div>
        </div>
    </div>
        `;
    }
    document.getElementById('featuresProducts').innerHTML = output;
    showbestpropt()
}
function showbestpropt(){
    let output = '';
    for (let i = 0; i < bestpropertyvalue.length; i++) {
        let fthome = bestpropertyvalue[i].fthome;
        let ftlocation = bestpropertyvalue[i].ftlocation;
        let ftbed = bestpropertyvalue[i].ftbed;
        let ftbath = bestpropertyvalue[i].ftbath;
        let ftsqft = bestpropertyvalue[i].ftsqft;
        let ftamount = bestpropertyvalue[i].ftamount;
        let ftimage = bestpropertyvalue[i].ftimage;
        var formattedAmount = new Intl.NumberFormat('en-US').format(ftamount);

        output += `
        <div class="homeya-box list-style-1">
        <a href="javascript:;" class="images-group">
            <div class="images-style">
                <img src="images/sales/${ftimage}" alt="img" style="width:200px;">
            </div>
            <div class="top">
                <ul class="d-flex">
                    <li class="flag-tag style-1">For Sale</li>
                </ul>
                <ul class="d-flex gap-4">
                    <li class="box-icon w-28">
                        <span class="icon icon-arrLeftRight"></span>
                    </li>
                    <li class="box-icon w-28">
                        <span class="icon icon-heart"></span>
                    </li>
                    <li class="box-icon w-28">
                        <span class="icon icon-eye"></span>
                    </li>
                </ul>
            </div>
            <!--<div class="bottom">
                <span class="flag-tag style-2">Villa</span>
            </div>-->
        </a>
        <div class="content">
            <div class="archive-top">
                <div class="h7 text-capitalize fw-7"><a href="javascript:;" class="link">${fthome}</a></div>
                <div class="desc"><i class="icon icon-mapPin"></i><p>${ftlocation}</p> </div>
                <ul class="meta-list">
                    <li class="item">
                        <i class="icon icon-bed"></i>
                        <span>${ftbed}</span>
                    </li>
                    <li class="item">
                        <i class="icon icon-bathtub"></i>
                        <span>${ftbath}</span>
                    </li>
                    <li class="item">
                        <i class="icon icon-ruler"></i>
                        <span>${ftsqft} SqFT</span>
                    </li>
                </ul>
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <!--<div class="d-flex gap-8 align-items-center">
                    <div class="avatar avt-40 round">
                        <img src="images/avatar/avt-7.jpg" alt="avt">
                    </div>
                    <span>Annette Black</span>
                </div>-->
                <div class="d-flex align-items-center">
                    <div class="h7 fw-7">&#165; ${formattedAmount}</div>
                </div>
            </div>
        </div>
        
    </div>
        `;
    }
    document.getElementById('forSaleProperties').innerHTML = output;
    showsinglepropt()
}

function showsinglepropt(){
    var formattedAmount = new Intl.NumberFormat('en-US').format(oneproperty.ftamount);
    document.getElementById('forSingleProperty').innerHTML = `
    <div class="homeya-box lg">
            <div class="archive-top">
                <a href="property-details-v1.html" class="images-group">
                    <div class="images-style">
                        <img src="images/sales/${oneproperty.ftimage}" alt="img" style="width:100%;">
                    </div>
                    <div class="top">
                        <ul class="d-flex gap-8">
                            <li class="flag-tag success style-3">Featured</li>
                            <li class="flag-tag style-1 style-3">For Sale</li>
                        </ul>
                        <ul class="d-flex gap-4">
                            <li class="box-icon w-40">
                                <span class="icon icon-arrLeftRight"></span>
                            </li>
                            <li class="box-icon w-40">
                                <span class="icon icon-heart"></span>
                            </li>
                            <li class="box-icon w-40">
                                <span class="icon icon-eye"></span>
                            </li>
                        </ul>
                    </div>
                 
                </a>
                <div class="content">
                    <h5 class="text-capitalize"><a href="javascript:;" class="link"> ${oneproperty.fthome}</a></h5>
                    <div class="desc"><i class="icon icon-mapPin"></i><p>${oneproperty.ftlocation}</p> </div>
                    <ul class="meta-list">
                        <li class="item">
                            <i class="icon icon-bed"></i>
                            <span>${oneproperty.ftbed}</span>
                        </li>
                        <li class="item">
                            <i class="icon icon-bathtub"></i>
                            <span>${oneproperty.ftbath}</span>
                        </li>
                        <li class="item">
                            <i class="icon icon-ruler"></i>
                            <span>${oneproperty.ftsqft} SqFT</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="archive-bottom d-flex justify-content-between align-items-center">
               
                <div class="d-flex align-items-center">
                    <h6>&#165; ${formattedAmount}</h6>
                </div>
            </div>
        </div>
    `;
}




function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}