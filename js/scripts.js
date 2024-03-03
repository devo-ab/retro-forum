// load the data from the api
const loadLatest = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
  const data = await res.json();
  const latestData = data;
  // console.log(latestData);
  displayLatestData(latestData);
};
// display the data in the webpage
const displayLatestData = async (latestData) => {
  // console.log(latestData);

  // get container
  const latestContainer = document.getElementById('latest-container');

  latestData.forEach((latest) => {
    console.log(latest);
    // create div
    const latestCard = document.createElement("div");
    latestCard.classList = `card w-96 bg-base-100 shadow-xl`;

    // set inner html
    latestCard.innerHTML = `
        <figure class="px-8 pt-8">
            <img src="${latest.cover_image}" alt="Banner Images" class="rounded-xl" />
        </figure>
        <div class="card-body text-start">
            <p><i class="fa-regular fa-calendar-minus" style="color: #bac2cf;"></i> <span class="leading-5 text-[#12132D99]">${latest.author?.posted_date || 'No publish date'}</span></p>
            <h2 class="card-title font-bold text-lg leading-7 text-[#12132D]">${latest.title}</h2>
            <p class="leading-7 text-[#12132D99]">${latest.description}</p>
            <div class="flex gap-3 items-center mt-2">
                <div ><img class="rounded-full w-16" src="${latest.profile_image}" alt=""></div>
                <div>
                    <h3 class="leading-5 font-medium text-[#12132D]">${latest.author?.name}</h3>
                    <p class="text-sm leading-5 text-[#12132D99]">${latest.author?.designation || 'Unknown'}</p>
                </div>
            </div>
        </div>
        `;
        latestContainer.appendChild(latestCard);
  });
};

loadLatest();
