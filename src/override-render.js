/** childReplacement canonicalTag **/
if($('link[rel="canonical"]').length<1){
    $('head').append(`<link rel="canonical" href="https://schedule.swedish.org${window.location.pathname}">`)
}
/** end childReplacement canonicalTag **/

/** childReplacement searchPageTitle **/
$('head title').html('Find a Doctor | Swedish Health Services');
/** end childReplacement searchPageTitle **/

/** childReplacement analyticsBrand **/
const brand = "Swedish";
/** end childReplacement analyticsBrand **/

let wData = {
    /** childReplacement wDataBrand **/
    'brand': 'Swedish',
    /** end childReplacement wDataBrand **/
};

/** childReplacement schemaUrl **/
const url = `https://schedule.swedish.org${location.pathname}`;
/** end childReplacement schemaUrl **/

/** childReplacement communityReviewsText **/
let reviewsContainer = $(`
    <div id="review-carousel-scroll"></div>
    <div class="review-carousel section container" id="review-carousel">
        <span class="complex-bg"></span>
        <h2>Community Reviews</h2>
        <div class="intro-copy">
            <p>At Swedish, we're dedicated to providing you quality, personalized health care. We are constantly striving to optimize your experience.</p>
            <p>As part of ensuring you have a positive experience with Swedish, our online provider directory includes ratings and patient comments for select providers. 
            <a href="https://www.swedish.org/doctor-rating/about-our-survey">More about our survey</a>.</p>
        </div>
        <div class="review-ratings"></div>
    </div>
`);
/** end childReplacement communityReviewsText **/

/** childReplacement providerNotFoundTitle **/
if ($('head title')) {
    $('head title').text('Swedish Health Services | Provider Not Found');
} else {
    $('head').append('<title>Swedish Health Services | Provider Not Found</title>');
}
/** end childReplacement providerNotFoundTitle **/

/** childReplacement errorDeleteData **/
const toDelete = {
    brand: 'swedishomni',
    url: `https://swedishomni.ampify.wompmobile.com${window.location.pathname}`
}
/** end childReplacement errorDeleteData **/

/** childReplacement patientName **/
reviewSection += `
                        ${i === 6 ? 
                        `<amp-accordion id="moreReviews" disable-session-states>
                            <section id="content">
                                <h2 hidden></h2>
                                <div>` : ''
                            }
                            <div class="review" itemprop="review" itemscope="itemscope" itemtype="https://schema.org/Review">
                                <div itemprop="itemReviewed" itemscope="itemscope" itemtype="schema.org/Physician" class="hidden">
                                    <span itemprop="name">${name}</span>
                                    <noscript>
                                        <img class="ignore" itemprop="image" src="${image}" alt="${name}">
                                    </noscript>
                                </div>
                                <div class="review-stats">
                                    <div class="reviews">
                                        <span class="stars s">
                                            <span class="empty"></span>
                                            <span class="full" style="width: ${(rv.rating/5) * 100}%"></span>
                                        </span>
                                        <span class="stats reviewRating" itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
                                            <strong class="len${ratingLen}" itemprop="ratingValue">${rating}</strong>
                                            <span class="hidden" itemprop="bestRating">5</span>
                                            <span class="hidden" itemprop="worstRating">0</span>
                                        </span>
                                    </div>
                                    <div class="review-date" itemprop="dateCreated">${date}</div>
                                </div>
                                <div class="review-comment">
                                    <p itemprop="reviewBody">${body}</p>
                                    <p class="reviewer" itemprop="author">${wompLib.safeHtml(rv.author || 'Swedish Patient')}</p>
                                    ${rv.response_text ? 
                                        `<div class="review-response">
                                            <amp-img            
                                                alt="Providence Logo"            
                                                src="https://amp-providers.providence.org/7772/pwa-icon-96.png"            
                                                width="16"            
                                                height="16"            
                                                layout="flex-item"         
                                            ></amp-img>
                                            <div>
                                                <p class="response-meta">Providence Admin ${rv.response_date ? `<span>|</span> ${rv.response_date.split('T')[0].substring(5)+'-'+rv.response_date.substring(0,4)}` : ''}</p>
                                                <p class="response-body">${wompLib.safeHtml(rv.response_text)}</p>
                                            </div>   
                                        </div>` 
                                        : ``
                                    }
                                </div>
                            </div>

                        ${i === reviewsArr.length - 1 ?
                            `</div></section>
                            </amp-accordion>
                            <button
                                on="tap:moreReviews.toggle(section='content'),AMP.setState({ reviewsExpanded: true})"
                                [hidden]="reviewsExpanded"
                                class="more-reviews-btn"
                            >
                                See All Reviews
                            </button>` : ''}
                        `;
/** end childReplacement patientName **/

/** childReplacement searchPageScriptAttachments **/
$('body').append(
    /*html*/
    `<script async="" src="/${projectId}/${assetVersion}/js/directory-timeslots.js" defer></script>`
)
/** end childReplacement searchPageScriptAttachments **/