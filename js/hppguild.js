document.addEventListener('DOMContentLoaded', () =>{
    bringjsondata();
});
var wholeproperties = '';
var hpfeatures = '';
function bringjsondata(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'js/property.json', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function(data) {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            wholeproperties = JSON.parse(xhr.responseText);
            shuffleArray(wholeproperties)
            hpfeatures = wholeproperties.slice(0, 4)
          
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
        <li class="latest-property-item">
                                            <a href="property-details-v1.html" class="images-style">
                                                <img src="images/sales/${ftimage}" alt="img">
                                            </a>
                                            <div class="content">
                                                <div class="h7 text-capitalize fw-7"><a href="property-details-v1.html" class="link">${fthome}</a></div>
                                                <ul class="meta-list">
                                                    <li class="item">
                                                        <span>Bed:</span>
                                                        <span class="fw-7">${ftbed}</span>
                                                    </li>
                                                    <li class="item">
                                                        <span>Bath:</span>
                                                        <span class="fw-7">${ftbath}</span>
                                                    </li>
                                                    <li class="item">
                                                        <span class="fw-7">${ftsqft} SqFT</span>
                                                    </li>
                                                </ul>
                                                <div class="d-flex align-items-center">
                                                    <div class="h7 fw-7">&#165;${formattedAmount}</div>
                                                    
                                                </div>
                                            </div>
                                        </li>
        `;
    }
    document.getElementById('propertiesonguild').innerHTML = output;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}